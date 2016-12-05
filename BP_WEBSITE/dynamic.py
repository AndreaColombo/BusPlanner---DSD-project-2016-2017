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
    hours = random.sample(tentative_hours, num_trips)
    work = []
    for hour in sorted(hours):
      actual_route = random.choice(route_per_hour[hour])
      work.append((actual_route, hour))
    works.append(work)

  return works


def rule_controler(work):

  #val is suposed do be read from database
  payment = max(len(work), 8)

  #print(papa)
  #val=papa #number of available seats for example
  # Rule 3
  if len(work) > 8 :
    #and 18 > papa:
    # #play here lets say a bus has 18 seats
    payment += 0.5 * (len(work) - 8)


  if len(work) > 4:
    first_hour = work[0][1]
    last_hour = work[-1][1]
    if last_hour - first_hour + 1 == len(work):

      payment = 1e6

  return payment


def solve(works, trips):
  problem = LpProblem('driver_scheduling', LpMinimize)
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
  drop_in = 7
  drop_out = drop_in + 12

  trips = trip_generator(routes, drop_in, drop_out)
  works = work_generator(8, trips)
  solve_works, solve_rule_controler = solve(works, trips)
  print("rule_controler: {}".format(solve_rule_controler))
  print(solve_works)



  str1 = ''.join(str(e) for e in solve_works)
  k=str1.replace("]","new")

  print(k)

if __name__ == '__main__':
   main()
