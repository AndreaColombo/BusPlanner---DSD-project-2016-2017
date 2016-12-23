from collections import defaultdict
from firebase import firebase
import random
from pulp import *

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


  #print(problem)
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

  a = []
  #11 is hard coded can not get the total number of children a root has in firebase
  db = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/')
  for gotit in range(11):
    result = db.get('/UserRequest', 'UserRequest' + str(gotit) + '/user_name')

    a.append(result)

    if not result:
      print('No more data')
    #print(a)
  for arr in range(0,11):

   ra=random.choice(a)
   print(ra)

  #also hours can be implemented
  drop_in = random.choice(a)
  drop_out = random.choice(a)

  trips = trip_generator(routes, drop_in, drop_out)
  works = work_generator(6, trips)
  solve_works, solve_rule_controler = solve(works, trips)


  k = ''.join(str(e) for e in solve_works)

  k1 = k.replace("A", "Route 1")
  k2 = k1.replace("B", "Route 2")
  k3 = k2.replace("C", "Route 3")
  k4 = k3.replace("D", "Route 4")
  k5 = k4.replace("E", "Route 5")
  print(k5)
  print("------------")

  for Route in k5.split(')]'):
    if(Route):
      savedata(Route[9], Route[13],random.choice(a))

    else:
       print('')

def savedata(R9,R13,a):
   db= firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/')
   schedule = {
     'Bus_id': R9,
     'Route_id': R13,
     'User_request': a
   }
   name = 'Schedule'+R9+''
   db.put("/AlgDynamic", name, schedule)
   print('result'+str(schedule))

if __name__ == '__main__':
    main()