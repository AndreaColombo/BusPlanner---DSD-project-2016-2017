c = sqlite3.connect('https://busplanner-f496d.firebaseio.com/')
cur = c.cursor()
cur.execute("Bus")
test = cur.fetchall()
