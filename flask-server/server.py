from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# Initialize the database
db = SQLAlchemy(app)

# Create db model
class Users(db.Model):
    name = db.Column(db.String(200), nullable=False)
    id = db.Column(db.Integer, primary_key=True)
    points = db.Column(db.Integer, nullable=False)
# Create a function to return a string when we add something
def __repr__(self):
    return '<Name %r>' % self.id

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)