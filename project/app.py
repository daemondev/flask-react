from flask import Flask, render_template
import pymongo
import json

app = Flask(__name__)

cn = pymongo.MongoClient()
db = cn["pandas"]
items = db['union']


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/items')
def getItems():
    data = items.find({},{'_id':0})
    return json.dumps(list(data))



if __name__ == '__main__':
    app.run(debug=True)
