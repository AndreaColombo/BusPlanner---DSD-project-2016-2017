from datetime import datetime, timedelta
import random 
import sys
import codecs
import json
import math

from collections import defaultdict
from operator import itemgetter
from firebase import firebase
from request_simulator.request_simulator import *


#RequestSimulator = UserRequestSimulator()
#RequestSimulator.clear_user_request_table()
#RequestSimulator.generate_user_request(int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]))
#user_requests_grouped = {}
#route_id_list = []
#firebasedb = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/', None)
#user_requests = firebasedb.get('UserRequest', None)
#for i in range(len(user_requests)):
#	user_request_key = "UserRequest"+str(i)
#	route_id_list.append(user_requests[user_request_key]['route_id'])
#
#route_id_list_distinct=list(set(route_id_list))
#
##group user requests per route id 
#for _ in range(len(route_id_list_distinct)):
#	route_id = route_id_list_distinct.pop()
#	mylist = []
#	for i in range(len(user_requests)):
#		user_request_key = "UserRequest"+str(i)
#		name = "UserRequestRoute"+str(route_id)
#		if (user_requests.get(user_request_key).get('route_id') == route_id):
#			mylist.append(user_requests.get(user_request_key))
#	user_requests_grouped.update({name :{'stops':mylist}})
##print(str(user_requests_grouped).encode('utf-8'))
#route_id_list_distinct=list(set(route_id_list))
#busses = firebasedb.get("Bus", None)
#routes = firebasedb.get("Route", None)
##generate timetable document
#for route_id in route_id_list_distinct:
#	print(route_id)
#	key = "UserRequestRoute"+str(route_id)
#	steps = user_requests_grouped.get(key).get("stops")
#	sortedl = []
#	for step in steps:                                                                                               
#		sortedl.append(step.get("departure_datetime"))                                                               
#		sortedl.sort()                                                                                               
#		#print(str(step).encode('utf-8'))                                                                            
#		# in steps ci sono le user request della route corrente                                                      
#                                                                                                                     
#		# in sorted ci sono le datetime delle requests della route corrente sortate                                  
#	#bus = get_first_bus_available(busses)                                                                           
#                                                                                                                     
#	onboarding=0                                                                                                     
#	deboarding=0                                                                                                     
#	starting_bus_stop_id=100                                                                                         
#	for step in steps:                                                                                     
#		curr = step.get("starting_bus_stop").get("Stop_id")
#		starting_bus_stop_id = min(int(curr), starting_bus_stop_id) 
#		
#	ending_bus_stop_id=0                                                                                            
#	for step in steps:                                                                                     
#		curr = step.get("ending_bus_stop").get("Stop_id")                                                        
#		ending_bus_stop_id = max(int(curr), ending_bus_stop_id)                                                      
#	print(starting_bus_stop_id, ending_bus_stop_id)
#	route_key = "Route"+str(route_id)
#	starting_stop_key = "BusStop"+str(starting_bus_stop_id)
#	ending_stop_key = "BusStop"+str(ending_bus_stop_id)
#	#calcolo starting e ending bus stop 
#	starting_bus_stop = routes.get(route_key).get("BusStops").get(starting_stop_key)
#	ending_bus_stop= routes.get(route_key).get("BusStops").get(ending_stop_key)
#	
#	print(starting_bus_stop, ending_bus_stop)                                                                                                                                                          


	
#def get_first_bus_available(self, busses):
#	max_capacityy_available=0
#	for bus in busses:
#		if (bus.get("Available")):
#			curr=bus.get("Bus_capacity")
#			max_capacityy_available= max(max_capacityy_available, curr)
#	for bus in busses:
#		if (bus.get("Available") && bus.get("Bus_capacity")==max_capacityy_available:
#			return bus
			

# sorto le user request per una linea in base alla datetime
# prenco il primo bus con max posti available e lo assegno a quella rotta 
# per ogni fermata calcolo numero di onboarding e deboarding 
# arrivato alla fine vedo se basta un bus solo 
#
 #timetable_document: {
	# 	'_id', 'route_id',
	# 	'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
	# 	'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
	# 	'departure_datetime',
	#   'steps': [
	#		'step':{
	#			'bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
	#			'arrival_datetime',
	#   		'number_of_onboarding_passengers',
	#   		'number_of_deboarding_passengers'
	#		}],
	#   'number_of_current_passengers'
	# }