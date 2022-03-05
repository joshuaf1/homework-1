from flask import Flask, jsonify, request 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class Users(db.Model):
    name = db.Column(db.String(200), nullable=False)
    id = db.Column(db.Integer, primary_key=True)
    points = db.Column(db.Integer, nullable=False)

    @property
    def serialize(self):
        return {
            'name'   : self.name,
            'id'     : self.id,
            'points' : self.points
        }

@app.route('/')
def index():
    return "Why are snooping around my backend? ( ͡° ͜ʖ ͡°)"

@app.route('/api/create', methods=['POST'])
def create():
    data = request.get_json()
    create_name = data.get('name')
    create_id = data.get('id')
    create_points = data.get('points')
    create_user = Users(name = create_name, id = create_id, points = create_points)
    db.session.add(create_user)
    db.session.commit()
    return "User succesfully created."

@app.route('/api/read', methods=['GET'])
def read():
    users = Users.query.all()
    return jsonify(json_list = [i.serialize for i in users])

@app.route('/api/delete', methods=['POST'])
def delete():
    data = request.get_json()
    del_user = Users.query.get_or_404(data.get('targetID'))
    db.session.delete(del_user)
    db.session.commit()
    return "User successfully delete."

@app.route('/api/update', methods=['POST'])
def update():
    data = request.get_json()
    user = Users.query.get_or_404(data.get('targetID'))
    user.name = data.get('name')
    user.id = data.get('id')
    user.points = data.get('points')
    db.session.commit()
    return "User successfully updated."

if __name__ == "__main__":
    app.run(debug=True)