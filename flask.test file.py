from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/',methods=['POST','GET'])
def process_form():
    if request.method == 'POST':
       form_input = request.form['name']
       return render_template('index.html',name=form_input)
    else:
       return render_template('index.html')

if __name__ == '__main__':
   app.run(debug=True)
