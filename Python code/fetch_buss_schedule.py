from firebase import firebase
firebase=firebase.FirebaseApplication('https://busplanner-f496d.firebaseio.com/', None)
result=firebase.get('/Bus',None)
print (result)
