import json
from firebase import firebase
from firebase import jsonutil

firebase = firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/', authentication=None)

def log_user(response):
    with open('/tmp/Login/%s.json' % response.keys()[0], 'w') as Login_file:
        Login_file.write(json.dumps(response, cls=jsonutil.JSONEncoder))

firebase.get_async('/Login', None, {'print': 'pretty'}, callback=log_user)
