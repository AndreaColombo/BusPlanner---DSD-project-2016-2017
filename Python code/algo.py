from collections import defaultdict #needed for the logic of the code and it is python dependent
from firebase import firebase #To connect with firebase
import random #needed for random generation
from pulp import * #library needed for linear programming, install instructions from "https://www.coin-or.org/PuLP/main/installing_pulp_at_home.html"

#takes parameters how many routes we have, and the working hours
#puts them in an array style, (route,time) pair
#we assume the working hours of drivers and a bus take 1 hour to complete a route

def trip_generator(line_name,a,b):
  results = []
  for actual_route in line_name:
    for hour in range(a, b):
       results.append((actual_route, hour))
  return results

#data structure is needed for lookup purposes
#gives out the possibilities for available hours, and what routes for that particular hour

def work_generator(number_works, trips):

  tentative_hours = {t[1] for t in trips}
  route_per_hour = defaultdict(list)
  for t in trips:
    route_per_hour[t[1]].append(t[0])

  works = []

#randomly generate: number of trips that a bus driver can do, connection of time and trip, route trip assignment
  for _ in range(number_works):
    num_trips = random.randrange(1, len(tentative_hours) + 1)#can not do more trips than allowed hours

    hours = random.sample(tentative_hours, num_trips)#list format with random selection from a set of inputs
    work = []
    for hour in sorted(hours):
      actual_route = random.choice(route_per_hour[hour])#gets only one element, must not be empty
      work.append((actual_route, hour))#connects hour with route
    works.append(work)#fills list

  return works

#To consider not generating a duty with many trips at the same time

def rule_controler(work):
#hour is the unit that drives the logic
#rules are made by us

  constraintloop = max(len(work), 8) #one rule


  if len(work) > 8 :

    constraintloop += 0.5 * (len(work) - 8)#another rule


  if len(work) > 4: #another rule
    first_hour = work[0][1]
    last_hour = work[-1][1]
    if last_hour - first_hour + 1 == len(work):

      constraintloop = 1e6 #big number

  return constraintloop

#imagine a set where there are all the buses,drivers and their duties
#work of a driver is the trips that can be done according to the rules
#sets will have costs, and that cost comes from the above rules
#driver duties are named as X, between 0 and 1
#1- if solution of work division will satisfy rules, 0- otherwise.
#will be accompanied with coefficients coming from rules

#for a certain time, group them in a set, which satisfies the rules
#we should minimize the values that the set holds

#printing format will be: n duties, where the above rules per driver in that duty, should be minimized.
#so we deal with just finding solution for minimizing a summation of rules
#satisfy as many as possible trips in one duty
#linear programming makes possible that if a trip appears in many duties, consider only that which has 1
#x1+x2+x3+x4+x5=1 means that if duties contain a trip in route A at 9'o clock, only one duty must include it.

def solve(works, trips):
  problem = LpProblem('BusPlanner', LpMinimize)
  variables = []
  rule_controlers = []

  trip_refer = {trip: [] for trip in trips} #save the trips constraints

  #assure that all trips needed are included in duties sets  (+)
  #from random generation we might get duties with only trips on route A
  #so one duty per each trip
  works = works + [[trip] for trip in trips]

  #collect costs
  for i, work in enumerate(works):
    #binary value per duty
    x = LpVariable('x{}'.format(i + 1), 0, 1, LpBinary) #format depedent from library
    variables.append(x)
    rule_controlers.append(rule_controler(work))
    for trip in work:
      trip_refer[trip].append(x)

  #function is created
  problem += lpDot(rule_controlers, variables)

  #control that each trip one of the duties includes it
  for xs in trip_refer.values():
    problem += lpSum(xs) == 1


  #print(problem)
  status = problem.solve()
  print(LpStatus[status])

 #which duty to use considering costs
  solve = []
  total_rule_controler = 0
  for i, x in enumerate(variables):
    if x.value():
      solve.append(works[i])
      total_rule_controler += rule_controlers[i]

  return solve, total_rule_controler



def main():


  routes = 'ABCDE' #actualy it is a b c d e so 5 routes

  hour_start=1
  hour_end=hour_start+4
  trips = trip_generator(routes,hour_start,hour_end)
  works = work_generator(8, trips) #trips per duty simulation, can be increased
  solve_works, solve_rule_controler = solve(works, trips)

  k = ''.join(str(e) for e in solve_works) #as solution is in string format
  k1 = k.replace("A", "Route 1")
  k2 = k1.replace("B", "Route 2")
  k3 = k2.replace("C", "Route 3")
  k4 = k3.replace("D", "Route 4")
  k5 = k4.replace("E", "Route 5")
  print(k5)
  print("------------")

  for Route in k5.split(')]'):
    if(Route):
#we do not know how dropins, drop outs would be
        savedata(Route[9], Route[13],random.randrange(1, 50),random.randrange(1, 30,2),random.randrange(1, 25))

    else:
     print('')
#save in firebase
def savedata(R9,R13,a,i,o):
   db= firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/')
   schedule = {
     'Bus_id': R9,
     'Route_id': R13,
     'Drop_in':i,
     'Drop_out': o,
     'User_request': a
   }
   name = 'Schedule'+str(R9)+''
   db.put("/AlgDynamic", name, schedule)
   print('result'+str(schedule))

if __name__ == '__main__':
    main()
