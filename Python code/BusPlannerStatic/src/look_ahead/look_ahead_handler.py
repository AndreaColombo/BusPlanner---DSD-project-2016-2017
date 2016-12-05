#!/usr/local/bin/python
# -*- coding: utf-8 -*-
"""
The MIT License (MIT)

Copyright (c) 2016 Eleftherios Anagnostopoulos for Ericsson AB (EU FP7 CityPulse Project)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""
from BusPlannerStatic.src.common.variables import firebasedb_host, firebasedb_port
from BusPlannerStatic.src.firebasedb_database.firebasedb_database_connection import FirebasedbDatabaseConnection
from BusPlannerStatic.src.route_generator.route_generator_client import get_waypoints_between_two_bus_stops
from BusPlannerStatic.src.common.logger import log
from BusPlannerStatic.src.look_ahead.timetable_generator import *
from BusPlannerStatic.src.look_ahead.timetable_updater import *

__author__ = 'Eleftherios Anagnostopoulos'
__email__ = 'eanagnostopoulos@hotmail.com'
__credits__ = [
    'Azadeh Bararsani (Senior Researcher at Ericsson AB) - email: azadeh.bararsani@ericsson.com'
    'Aneta Vulgarakis Feljan (Senior Researcher at Ericsson AB) - email: aneta.vulgarakis@ericsson.com'
]


class LookAheadHandler(object):
    def __init__(self):
        self.firebasedb_database_connection = FirebasedbDatabaseConnection(host=firebasedb_host, port=firebasedb_port)
        log(module_name='look_ahead_handler', log_type='DEBUG',
            log_message='firebasedb_database_connection: established')

    def generate_bus_line(self, line_id, bus_stop_names):
        """
        Generate a bus_line, consisted of a line_id and a list of bus_stops, and store it to the corresponding
        collection of the System Database. Moreover, identify all the possible waypoints between the bus_stops
        of the bus_line, and populate the BusStopWaypoints collection.

        bus_line_document: {
            '_id', 'line_id', 'bus_stops': [{'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}}]
        }
        bus_stop_document: {
            '_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}
        }
        bus_stop_waypoints_document: {
            '_id', 'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'waypoints': [[edge_object_id]]
        }
        :param line_id: int
        :param bus_stop_names: [string]
        :return: None
        """
        # 1: The inputs: line_id and bus_stop_names are provided to the function, so as as a bus_line
        #    with the corresponding line_id and bus_stops to be generated.
        #
        # 2: The Look Ahead connects to the System Database and retrieves the bus_stops which correspond to
        #    the provided bus_stop_names. The function returns None and the bus_line is not generated,
        #    in case there is a bus_stop_name which does not correspond to a stored bus_stop.
        #
        bus_stops = []

        for bus_stop_name in bus_stop_names:
            bus_stop_document = self.firebasedb_database_connection.find_bus_stop_document(name=bus_stop_name)

            if bus_stop_document is None:
                log_message = 'find_bus_stop_document (firebase_database) - name:', bus_stop_name, '- result: None'
                log(module_name='look_ahead_handler', log_type='DEBUG', log_message=log_message)
                return None
            else:
                bus_stops.append(bus_stop_document)

        # 3: The intermediate waypoints of the bus_routes, which are generated while combining starting and
        #    ending bus_stops of the bus_line, should be stored as bus_stop_waypoints_documents at the System Database.
        #    The Look Ahead checks the existing bus_stop_waypoints_documents and communicates with the Route Generator
        #    in order to identify the waypoints of the bus_routes which are not already stored. The newly generated
        #    bus_stop_waypoints_documents are getting stored to the corresponding collection of the System Database.
        #    The function returns None and the bus_line is not generated, in case the Route Generator can not identify
        #    a possible route in order to connect the bus_stops of the bus_line.
        #
        number_of_bus_stops = len(bus_stops)

        for i in range(0, number_of_bus_stops - 1):
            starting_bus_stop = bus_stops[i]
            ending_bus_stop = bus_stops[i + 1]

            bus_stop_waypoints_document = self.firebasedb_database_connection.find_bus_stop_waypoints_document(
                starting_bus_stop=starting_bus_stop,
                ending_bus_stop=ending_bus_stop
            )
            if bus_stop_waypoints_document is None:
                route_generator_response = get_waypoints_between_two_bus_stops(
                    starting_bus_stop=starting_bus_stop,
                    ending_bus_stop=ending_bus_stop
                )
                if route_generator_response is None:
                    log(module_name='look_ahead_handler', log_type='DEBUG',
                        log_message='get_waypoints_between_two_bus_stops (route_generator): None')
                    return None
                else:
                    waypoints = route_generator_response.get('waypoints')

                    if len(waypoints) == 0:
                        log(module_name='look_ahead_handler', log_type='DEBUG',
                            log_message='get_waypoints_between_two_bus_stops (route_generator): None')
                        return None

                    lists_of_edge_object_ids = []

                    for list_of_edges in waypoints:
                        list_of_edge_object_ids = []

                        for edge in list_of_edges:
                            edge_object_id = edge.get('_id')
                            list_of_edge_object_ids.append(edge_object_id)

                        lists_of_edge_object_ids.append(list_of_edge_object_ids)

                    # waypoints: [[edge_object_id]]
                    #
                    waypoints = lists_of_edge_object_ids

                    self.firebasedb_database_connection.insert_bus_stop_waypoints_document(
                        starting_bus_stop=starting_bus_stop,
                        ending_bus_stop=ending_bus_stop,
                        waypoints=waypoints
                    )

        # 4: The Look Ahead stores the newly generated bus_line_document, which is consisted of the line_id
        #    and the list of bus_stops, to the corresponding collection of the System Database.
        #    In case there is an already existing bus_line_document, with the same line_id,
        #    then the list of bus_stops gets updated.
        #
        bus_line_document = {'line_id': line_id, 'bus_stops': bus_stops}
        self.firebasedb_database_connection.insert_bus_line_document(bus_line_document=bus_line_document)

        log(module_name='look_ahead_handler', log_type='DEBUG',
            log_message='insert_bus_line_document (firebase_database): ok')

    def generate_timetables_for_bus_line(self, timetables_starting_datetime, timetables_ending_datetime,
                                         requests_min_departure_datetime, requests_max_departure_datetime,
                                         bus_line=None, line_id=None):
        """
        Generate timetables for a bus_line, for a selected datetime period,
        evaluating travel_requests of a specific datetime period.

        bus_line_document: {
            '_id', 'line_id', 'bus_stops': [{'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}}]
        }
        :param timetables_starting_datetime: datetime
        :param timetables_ending_datetime: datetime
        :param requests_min_departure_datetime: datetime
        :param requests_max_departure_datetime: datetime
        :param bus_line: bus_line_document
        :param line_id: int
        :return: None
        """

        # 1: The inputs: bus_line or line_id are provided to the function, so as timetables for the corresponding
        #    bus_line to be generated. The Look Ahead retrieves the list of bus_stops which correspond
        #    to the selected bus_line.
        #
        # bus_stops: [{'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}}]}
        #
        if bus_line is None and line_id is None:
            return None
        elif bus_line is None:
            bus_line = self.firebasedb_database_connection.find_bus_line_document(line_id=line_id)
        else:
            line_id = bus_line.get('line_id')

        bus_stops = bus_line.get('bus_stops')

        # 2: The inputs: timetable_starting_datetime and timetable_ending_datetime are provided to the function,
        #    so as timetables to be generated for the specific datetime period.

        # 3: The inputs: requests_min_departure_datetime and requests_max_departure_datetime are provided
        #    to the function, so as to evaluate travel_requests for the specific datetime period.
        #    The Look Ahead retrieves from the System Database the requests with
        #    departure_datetime between these values.
        #
        # travel_request_document: {
        #     '_id', 'client_id', 'line_id',
        #     'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        #     'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        #     'departure_datetime', 'arrival_datetime'
        # }
        # travel_requests: [travel_request_document]
        #
        travel_requests = self.firebasedb_database_connection.find_travel_request_documents(
            line_ids=[line_id],
            min_departure_datetime=requests_min_departure_datetime,
            max_departure_datetime=requests_max_departure_datetime
        )

        # 4: (TimetableGenerator is initialized) The Look Ahead sends a request to the Route Generator so as
        #    to identify the less time-consuming bus_route between the the bus_stops of the bus_line,
        #    while taking into consideration the current levels of traffic density.
        #
        timetable_generator = TimetableGenerator(
            line_id=line_id,
            bus_stops=bus_stops,
            travel_requests=travel_requests
        )

        # The list of bus_stops of a bus_line might contain the same bus_stop_osm_ids more than once.
        # For this reason, each travel_request needs to be related with the correct index in the bus_stops list.
        # So, the values 'starting_timetable_entry_index' and 'ending_timetable_entry_index' are estimated.
        #
        correspond_travel_requests_to_bus_stops(
            travel_requests=timetable_generator.travel_requests,
            bus_stops=timetable_generator.bus_stops
        )

        # 5: Based on the response of the Route Generator, which includes details about the followed bus_route,
        #    and using only one bus vehicle, the Look Ahead generates some initial timetables which cover the
        #    whole datetime period from timetables_starting_datetime to timetables_ending_datetime.
        #    Initially, the list of travel requests of these timetables is empty, and the departure_datetime and
        #    arrival_datetime values of the timetable_entries are based exclusively on the details of the bus_route.
        #    In the next steps of the algorithm, these timetables are used in the initial clustering
        #    of the travel requests.
        #
        timetable_generator.timetables = generate_initial_timetables(
            line_id=line_id,
            timetables_starting_datetime=timetables_starting_datetime,
            timetables_ending_datetime=timetables_ending_datetime,
            route_generator_response=timetable_generator.route_generator_response
        )

        current_average_waiting_time_of_timetables = float('Inf')

        while True:
            new_timetables = generate_new_timetables_based_on_travel_requests(
                current_timetables=timetable_generator.timetables,
                travel_requests=timetable_generator.travel_requests
            )
            new_average_waiting_time_of_timetables = calculate_average_waiting_time_of_timetables_in_seconds(
                timetables=new_timetables
            )
            if new_average_waiting_time_of_timetables < current_average_waiting_time_of_timetables:
                timetable_generator.timetables = new_timetables
                current_average_waiting_time_of_timetables = new_average_waiting_time_of_timetables
                print_timetables(timetables=timetable_generator.timetables)
            else:
                break

        print_timetables(timetables=timetable_generator.timetables)

        self.firebasedb_database_connection.insert_timetable_documents(
            timetable_documents=timetable_generator.timetables
        )
        log(module_name='look_ahead_handler', log_type='DEBUG',
            log_message='insert_timetable_documents (firebase_database): ok')

    def generate_timetables_for_bus_lines(self, timetables_starting_datetime, timetables_ending_datetime,
                                          requests_min_departure_datetime, requests_max_departure_datetime):
        """
        Generate timetables for all bus_lines, for a selected datetime period,
        evaluating travel_requests of a specific datetime period.

        :param timetables_starting_datetime: datetime
        :param timetables_ending_datetime: datetime
        :param requests_min_departure_datetime: datetime
        :param requests_max_departure_datetime: datetime
        :return: None
        """
        bus_lines = self.firebasedb_database_connection.get_bus_line_documents_list()

        for bus_line in bus_lines:
            self.generate_timetables_for_bus_line(
                bus_line=bus_line,
                timetables_starting_datetime=timetables_starting_datetime,
                timetables_ending_datetime=timetables_ending_datetime,
                requests_min_departure_datetime=requests_min_departure_datetime,
                requests_max_departure_datetime=requests_max_departure_datetime
            )

    def update_timetables_of_bus_line(self, bus_line=None, line_id=None):
        """
        Update the timetables of a bus_line, taking into consideration the current levels of traffic_density.

        bus_line_document: {
            '_id', 'line_id', 'bus_stops': [{'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}}]
        }
        :param bus_line: bus_line_document
        :param line_id: int
        :return: None
        """
        if bus_line is None and line_id is None:
            return None
        elif bus_line is None:
            bus_line = self.firebasedb_database_connection.find_bus_line_document(line_id=line_id)
        else:
            line_id = bus_line.get('line_id')

        bus_stops = bus_line.get('bus_stops')
        timetables = self.firebasedb_database_connection.find_timetable_documents(line_ids=[line_id])
        travel_requests = get_travel_requests_of_timetables(timetables=timetables)

        timetable_updater = TimetableUpdater(
            bus_stops=bus_stops,
            timetables=timetables,
            travel_requests=travel_requests
        )
        update_entries_of_timetables(
            timetables=timetable_updater.timetables,
            route_generator_response=timetable_updater.route_generator_response
        )
        current_average_waiting_time_of_timetables = calculate_average_waiting_time_of_timetables_in_seconds(
            timetables=timetable_updater.timetables
        )

        while True:
            new_timetables = generate_new_timetables_based_on_travel_requests(
                current_timetables=timetable_updater.timetables,
                travel_requests=timetable_updater.travel_requests
            )
            new_average_waiting_time_of_timetables = calculate_average_waiting_time_of_timetables_in_seconds(
                timetables=new_timetables
            )
            if new_average_waiting_time_of_timetables < current_average_waiting_time_of_timetables:
                timetable_updater.timetables = new_timetables
                current_average_waiting_time_of_timetables = new_average_waiting_time_of_timetables
                print_timetables(timetables=timetable_updater.timetables)
            else:
                break

        print_timetables(timetables=timetable_updater.timetables)

        self.firebasedb_database_connection.insert_timetable_documents(
            timetable_documents=timetable_updater.timetables
        )
        log(module_name='look_ahead_handler', log_type='DEBUG',
            log_message='update_timetable_documents (firebase_database): ok')

    def update_timetables_of_bus_lines(self):
        """
        Update the timetables of all bus_lines, taking into consideration the current levels of traffic_density.

        :return: None
        """
        bus_lines = self.firebasedb_database_connection.get_bus_line_documents_list()

        for bus_line in bus_lines:
            self.update_timetables_of_bus_line(bus_line=bus_line)


def generate_new_timetables_based_on_travel_requests(current_timetables, travel_requests):
    """
    Generate new timetables based on the travel_requests.

    timetable_document: {
        '_id', 'line_id',
        'timetable_entries': [{
            'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'departure_datetime', 'arrival_datetime', 'number_of_onboarding_passengers',
            'number_of_deboarding_passengers', 'number_of_current_passengers',
            'route': {'total_distance', 'total_time', 'node_osm_ids', 'points', 'edges',
                      'distances_from_starting_node', 'times_from_starting_node',
                      'distances_from_previous_node', 'times_from_previous_node'}}],
        'travel_requests': [{
            '_id', 'client_id', 'line_id',
            'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'departure_datetime', 'arrival_datetime',
            'starting_timetable_entry_index', 'ending_timetable_entry_index'}]
    }
    travel_request_document: {
        '_id', 'client_id', 'line_id',
        'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        'departure_datetime', 'arrival_datetime',
        'starting_timetable_entry_index', 'ending_timetable_entry_index'
    }
    :param current_timetables: [timetable_document]
    :param travel_requests: [travel_request_document]
    :return: new_timetables: [timetable_document]
    """
    new_timetables = generate_additional_timetables(timetables=current_timetables)

    # 6: (Initial Clustering) Each one of the retrieved travel_requests is corresponded to the timetable
    #    which produces the minimum_individual_waiting_time for the passenger. The waiting time is calculated
    #    as the difference between the departure_datetime of the travel_request and the departure_datetime of
    #    the timetable_entry from where the passenger departs from (identified by the
    #    'starting_timetable_entry_index' value).
    #
    correspond_travel_requests_to_timetables(
        travel_requests=travel_requests,
        timetables=new_timetables
    )

    # 7: (Handling of Undercrowded Timetables) After the initial clustering step, there might be timetables
    #    where the number of travel_requests is lower than the input: minimum_number_of_passengers_in_timetable.
    #    This is usual during night hours, where transportation demand is not so high. These timetables are
    #    removed from the list of generated timetables and each one of their travel_requests is corresponded
    #    to one of the remaining timetables, based on the individual_waiting_time of the passenger.
    #
    travel_requests_of_undercrowded_timetables = handle_undercrowded_timetables(timetables=new_timetables)
    correspond_travel_requests_to_timetables(
        travel_requests=travel_requests_of_undercrowded_timetables,
        timetables=new_timetables
    )

    # 8: (Handling of Overcrowded Timetables) In addition, there might be timetables where the
    #    number_of_current_passengers is higher than the input: maximum_bus_capacity, which indicates that
    #    each one of these timetables cannot be served by one bus vehicle. For this reason, each one of these
    #    timetables should be divided into two timetables, and the corresponding travel_requests are partitioned.
    #    The whole procedure is repeated until there is no timetable where the number_of_current_passengers
    #    exceeds the maximum_bus_capacity.
    #
    #    The first step is to calculate the number_of_current_passengers in each one of the timetable_entries.
    #
    calculate_number_of_passengers_of_timetables(timetables=new_timetables)
    # handle_overcrowded_timetables(timetables=new_timetables)

    # 9: (Adjust Departure Datetimes) At this point of processing, the number of travel_requests in each timetable
    #    is higher than the minimum_number_of_passengers_in_timetable and lower than the maximum_bus_capacity.
    #    So, the departure_datetime and arrival_datetime values of each timetable_entry are re-estimated,
    #    taking into consideration the departure_datetime values of the corresponding travel_requests.
    #    In each timetable and for each travel_request, the ideal departure_datetimes from all bus_stops
    #    (not only the bus stop from where the passenger desires to depart) are estimated. Then, the ideal
    #    departure_datetimes of the timetable, for each bus stop, correspond to the mean values of the ideal
    #    departure_datetimes of the corresponding travel_requests. Finally, starting from the initial bus_stop
    #    and combining the ideal departure_datetimes of each bus_stop and the required traveling time between
    #    bus_stops, included in the response of the Route Generator, the departure_datetimes of the
    #    timetable_entries are finalized.
    adjust_departure_datetimes_of_timetables(timetables=new_timetables)

    # 10: (Individual Waiting Time) For each timetable, the individual_waiting_time of each passenger is calculated.
    #     For each one of the travel_requests where individual_waiting_time is higher than the
    #     input: individual_waiting_time_threshold, alternative existing timetables are investigated, based on the
    #     new individual_waiting_time, the average_waiting_time and the number_of_current_passengers of each
    #     timetable. For the travel_requests which cannot be served by the other existing timetables, if their
    #     number is greater or equal than the mini_number_of_passengers_in_timetable, then a new timetable is
    #     generated with departure_datetimes based on the ideal departure_datetimes of the
    #     aforementioned passengers.
    #
    # handle_travel_requests_of_timetables_with_waiting_time_above_threshold(
    #     timetables=new_timetables
    # )
    # calculate_number_of_passengers_of_timetables(timetables=new_timetables)
    # adjust_departure_datetimes_of_timetables(timetables=new_timetables)

    # 11: (Average Waiting Time) For each timetable, the average_waiting_time of passengers is calculated.
    #     If the average waiting time is higher than the input: average-waiting-time-threshold, then the
    #     possibility of dividing the timetable is investigated. If the two new timetables have lower
    #     average_waiting_time than the initial one and both have more travel_requests than the
    #     minimum_number_of_passengers_in_timetable, then the initial timetable is divided, its travel_requests
    #     are partitioned, and the departure_datetime and arrival_datetime values of the timetable_entries of
    #     the new timetables, are estimated based on the departure_datetime values of the partitioned requests.
    #
    handle_timetables_with_average_waiting_time_above_threshold(timetables=new_timetables)
    calculate_number_of_passengers_of_timetables(timetables=new_timetables)
    adjust_departure_datetimes_of_timetables(timetables=new_timetables)

    return new_timetables


def get_travel_requests_of_timetables(timetables):
    """
    Retrieve a list containing all the travel_request_documents,
    which are included in a list of timetable_documents.

    timetable_document: {
        '_id', 'line_id',
        'timetable_entries': [{
            'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'departure_datetime', 'arrival_datetime', 'number_of_onboarding_passengers',
            'number_of_deboarding_passengers', 'number_of_current_passengers',
            'route': {'total_distance', 'total_time', 'node_osm_ids', 'points', 'edges',
                      'distances_from_starting_node', 'times_from_starting_node',
                      'distances_from_previous_node', 'times_from_previous_node'}}],
        'travel_requests': [{
            '_id', 'client_id', 'line_id',
            'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
            'departure_datetime', 'arrival_datetime',
            'starting_timetable_entry_index', 'ending_timetable_entry_index'}]
    }
    travel_request_document: {
        '_id', 'client_id', 'line_id',
        'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
        'departure_datetime', 'arrival_datetime',
        'starting_timetable_entry_index', 'ending_timetable_entry_index'
    }
    :param timetables: [timetable_documents]
    :return: travel_requests: [travel_request_documents]
    """
    travel_requests = []

    for timetable in timetables:
        travel_requests_of_timetable = timetable.get('travel_requests')
        travel_requests.extend(travel_requests_of_timetable)

    return travel_requests
