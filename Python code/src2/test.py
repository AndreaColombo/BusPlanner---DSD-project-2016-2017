from datetime import datetime, timedelta
import random 
import sys
import codecs
import json
from request_simulator.request_simulator import *
from firebase import firebase


RequestSimulator = UserRequestSimulator()
RequestSimulator.clear_user_request_table()
RequestSimulator.generate_user_request(int(sys.argv[1]),int(sys.argv[2]))
