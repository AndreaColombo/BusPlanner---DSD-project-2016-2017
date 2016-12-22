from collections import defaultdict
from firebase import firebase
import random
from pulp import *
from itertools import groupby

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


  drop_in = random.randrange(1, 15)#make the range till the max size of requests, total number of requests

  drop_out = random.randrange(0, 15)#we can play around here
  if drop_in<drop_out:
   #start = 6
   #end= start + 12
   trips = trip_generator(routes, drop_in, drop_out)
   works = work_generator(8, trips)#8 trips per driver
   solve_works, solve_rule_controler = solve(works, trips)

   k = ''.join(str(e) for e in solve_works)

   k1 = k.replace("A", "Route 1")
   k2 = k1.replace("B", "Route 2")
   k3 = k2.replace("C", "Route 3")
   k4 = k3.replace("D", "Route 4")
   k5 = k4.replace("E", "Route 5")
   print(k5)

firebase = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/')
#here is the list/array holding the route_id for USERREQUEST
a = []

#read till the size of the children, NOT ABLE TO FIND ANY SOLUTION FOR THAT
for gotit in range(11):
 result = firebase.get('/UserRequest','UserRequest'+str(gotit)+'/route_id')

 #print (result)

 a.append(result)
 if not result:
    print ('No more data')
 print(a)

 #after we know which route id as requested we will try to get the size of request for each route, like route x has y requestes
 #and consider that number as drop_in
 #print(len(a))#total number of requests
 #print(a.count(5))
 #print(max(a))

for arr in a:
      print(arr)
      #instead of drop_in in same format play with arr
      #so this piece of code whould be putter in that place
#try to group by route id
      #plus we dont deal with each bus stop as the data is in db, we deal with a route as a whole. TRY TO STAY WITH THAT ONE

      things = [(arr, "here the number of request")]

      for key, group in groupby(things, lambda x: x[0]):
       for thing in group:
        print ("This request %s belongs to this route_id %s." % (thing[1], key))
        print (" ")
if __name__ == '__main__':
    main()