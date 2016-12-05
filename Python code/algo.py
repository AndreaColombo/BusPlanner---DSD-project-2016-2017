from collections import defaultdict
from pprint import pprint
import random
import pyrebase
from pulp import *

#all database variables here as later it enter in loops
config = {
      "apiKey": "AIzaSyBQchZ2V6xpY-SgQ9Z20-wFsL4xDx-Rw3w",
      "authDomain": "busplanner-f496d.firebaseapp.com",
      "databaseURL": "https://busplanner-f496d.firebaseio.com",
      "storageBucket": "busplanner-f496d.appspot.com",
  }
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
user = auth.sign_in_with_email_and_password("albidode@aol.com", "Vasteras2016")
db = firebase.database()
lana_data = db.child("UserRequest").child("UserRequest1").get(user['idToken']).val()
print("lana_data: ", lana_data["User_id"])
papa = int(lana_data["User_id"])

def trip_generator(line_name, drop_in, drop_out):
  results = []
  for actual_route in line_name:
    for hour in range(drop_in, drop_out):
      results.append((actual_route, hour))
  return results


def work_generator(number_works, trips):
   
  tentative_hours = {t[1] for t in trips}
  route_per_hour = defaultdict(list)
  for t in trips:
    route_per_hour[t[1]].append(t[0])

  works = []

  for _ in range(number_works):
    num_trips = random.randrange(1, len(tentative_hours) + 1)
    num_seats = random.randrange(1, 2)
   #READ FROM DATABASE
    if num_seats < 2:
   #LOWER THAN CAPACITY READ FROM DB 8
     hours = random.sample(tentative_hours, num_trips)
    work = []
    for hour in sorted(hours):
      actual_route = random.choice(route_per_hour[hour])
      work.append((actual_route, hour))
    works.append(work)

  return works


def rule_controler(work):
   
  constraintloop = max(len(work), 8)

   
  if len(work) > 8 :
    
    constraintloop += 0.5 * (len(work) - 8)

   
  if len(work) > 4:
    first_hour = work[0][1]
    last_hour = work[-1][1]
    if last_hour - first_hour + 1 == len(work):
      
      constraintloop = 1e6

  return constraintloop


def solve(works, trips):
  problem = LpProblem('BusPlanner', LpMinimize)
  variables = []
  rule_controlers = []
  
  trip_refer = {trip: [] for trip in trips}

   
  works = works + [[trip] for trip in trips]

  
  for i, work in enumerate(works):
  
    x = LpVariable('x{}'.format(i + 1), 0, 1, LpBinary)
    variables.append(x)
    rule_controlers.append(rule_controler(work))
    for trip in work:
      trip_refer[trip].append(x)

   
  problem += lpDot(rule_controlers, variables)
 
  for xs in trip_refer.values():
    problem += lpSum(xs) == 1

 
  print(problem)
  status = problem.solve()
  print(LpStatus[status])

   
  solve = []
  total_rule_controler = 0
  for i, x in enumerate(variables):
    if x.value():
      solve.append(works[i])
      total_rule_controler += rule_controlers[i]

  return solve, total_rule_controler



def main():


  routes = 'ABCDE' #actualy it is a b c d e so 5 routes
  #TREAT THESE NUMBERS AS THE RANDON NUMBER OF USER REQUESTS
  drop_in  = random.randrange(1, 25)

  drop_out = random.randrange(1, 10)+12

  trips = trip_generator(routes, drop_in, drop_out)
  works = work_generator(10, trips)
  solve_works, solve_rule_controler = solve(works, trips)
  print("rule_controler: {}".format(solve_rule_controler))
  #print(solve_works)
  #here before inserting you need a parser to insert in the right database format
  #x = [s.replace('a', 'b') for s in x]


  k = ''.join(str(e) for e in solve_works)
  #k=str1.replace("]","new")
  #words = [solve_works.replace('[', 'test') for solve_works in str1]
  k1 = k.replace("A", "Route 1")
  k2 = k1.replace("B", "Route 2")
  k3 = k2.replace("C", "Route 3")
  k4 = k3.replace("D", "Route 4")
  k5 = k4.replace("E", "Route 5")
  print(k5)
  #data = {"Bus7":{"Bus_capacity":"7","Bus_id":"7","Bus_type":"bus","Driver_id":"7","Latitude":"56","Longitude":"60"}
  #db.child("Bus").push(data)


  data = {
      "Bus7":{"Bus_capacity":"7","Bus_id":"7","Bus_type":"bus","Driver_id":"7","Latitude":"56","Longitude":"60"}
  }

  # works

  db.child("Bus").set(data)

if __name__ == '__main__':
   main()
