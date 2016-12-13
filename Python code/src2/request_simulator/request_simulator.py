import random
from firebase import firebase
from datetime import datetime, timedelta

class UserRequestSimulator(object):

	
	def __init__(self):
		random.seed();
		
	# Clear the table of user requests 
	def clear_user_request_table(self):
		firebasedb = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/', None)
		firebasedb.delete("/UserRequest", None)
		
		
	# Generate usser requests for all bus lines
	# Inputs: minimum number of user requests and maximum number of user requests 
	# user_request_document: {
	# 	'_id', 'route_id',
	# 	'starting_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
	# 	'ending_bus_stop': {'_id', 'osm_id', 'name', 'point': {'longitude', 'latitude'}},
	# 	'departure_datetime'
	# }
	def generate_user_request(self, n, m):
		min_user_request_number = min(n,m)
		max_user_request_number = max (n,m)
		print (min_user_request_number, max_user_request_number)
		firebasedb = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/', None)
		user_request_number = random.randint(
			min_user_request_number,
			max_user_request_number
		)
		initial_datetime = datetime.now();
		weighted_datetimes = [
			(initial_datetime + timedelta(hours=0), 1),
			(initial_datetime + timedelta(hours=1), 1),
			(initial_datetime + timedelta(hours=2), 1),
			(initial_datetime + timedelta(hours=3), 1),
			(initial_datetime + timedelta(hours=4), 1),
			(initial_datetime + timedelta(hours=5), 1),
			(initial_datetime + timedelta(hours=6), 1),
			(initial_datetime + timedelta(hours=7), 1),
			(initial_datetime + timedelta(hours=8), 1),
			(initial_datetime + timedelta(hours=9), 1),
			(initial_datetime + timedelta(hours=10), 1),
			(initial_datetime + timedelta(hours=11), 1),
			(initial_datetime + timedelta(hours=12), 1),
			(initial_datetime + timedelta(hours=13), 1),
			(initial_datetime + timedelta(hours=14), 1),
			(initial_datetime + timedelta(hours=15), 1),
			(initial_datetime + timedelta(hours=16), 1),
			(initial_datetime + timedelta(hours=17), 1),
			(initial_datetime + timedelta(hours=18), 1),
			(initial_datetime + timedelta(hours=19), 1),
			(initial_datetime + timedelta(hours=20), 1),
			(initial_datetime + timedelta(hours=21), 1),
			(initial_datetime + timedelta(hours=22), 1),
			(initial_datetime + timedelta(hours=23), 1)
		]
		datetime_population = [val for val, cnt in weighted_datetimes for i in range(cnt)]
		for i in range(0, user_request_number):
			user_id = random.randint(1,34094)
			id = i
			route_id = random.randint(1,5)
			route = '/Route/Route'+str(route_id)+'/BusStops'
			bus_stops = firebasedb.get(route, None)
			starting_bus_stop_id = random.randint(0, len(bus_stops)-2)
			ending_bus_stop_id = random.randint(starting_bus_stop_id+1, len(bus_stops)-1)
			# print(route_id)
			# print (starting_bus_stop_id, ending_bus_stop_id)
			starting_bus_stop_key = "BusStop"+str(starting_bus_stop_id)
			ending_bus_stop_key = "BusStop"+str(ending_bus_stop_id)
			starting_bus_stop = bus_stops.get(starting_bus_stop_key)
			ending_bus_stop = bus_stops.get(ending_bus_stop_key)
			# print (starting_bus_stop, ending_bus_stop)
			additional_departure_time_interval = random.randint(0, 59)
			departure_datetime = (random.choice(datetime_population) + timedelta(minutes=additional_departure_time_interval))
			user_request = {
				'user_name': user_id,
				'id': id,
				'route_id': route_id,
				'starting_bus_stop': starting_bus_stop,
				'ending_bus_stop': ending_bus_stop,
				'departure_datetime': departure_datetime
			}
			name = 'UserRequest'+str(id)
			firebasedb.put("/UserRequest", name, user_request)