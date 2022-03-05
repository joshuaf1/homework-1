## HOMEWORK 1 - CMSC447

This CRUD application was built using a React frontend, a Flask backend, and a SQLite database.

### Prerequisites

Make sure your local machine has the latest versions of Node.js and Python installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/joshuaf1/homework-1.git
   ```
2. Install NPM packages in the client directory on your machine.
   ```sh
   ...homework-1-master\client npm install
   ```
3. Install axios in the client directory on your machine.
   ```sh
   ...homework-1-master\client npm install axios
   ```
4. Pip install the following python packages in the flask-server directory on your machine.
   ```sh
   homework-1-master\flask-server pip install flask
   homework-1-master\flask-server pip install flask-sqlalchemy
   homework-1-master\flask-server pip install flask-cors
   ```

## Running the Application

Frontend:
```sh
homework-1-master\client npm start
```
Backend:
```sh
homework-1-master\flask-server flask run
```

## Usage

Running the frontend should have opened an instance of http://localhost:3000 on your local machine; if not, navigate to http://localhost:3000 in your browser.

Create User:
Users can be added to the database by populating the "Name", "ID", and "Points" field and clicking "Create."

Update User:
Existing users can be updated by populating the "Name", "ID", "Points", and "Target ID" (ID of user to be updated) fields and clicking "Update."

Delete User:
Users can be deleted by entering their ID in the "Target ID" field and clicking "Delete"
