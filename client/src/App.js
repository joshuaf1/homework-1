import React, { useState, useEffect } from 'react'
import "./App.css";
import Axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [id, setID] = useState(0);
  const [points, setPoints] = useState(0);

  const [targetID, setTargetID] = useState(0);

  const [users, setUsers] = useState([]);

  const createUser = () => {
    Axios.post("http://localhost:5000/api/create", {
      name: name,
      id: id,
      points: points
    }).then(
      Axios.get("http://localhost:5000/api/read").then((response) => {
        setUsers(response.data.json_list);
        window.location.reload();
      })
    )
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/api/read").then((response) => {
      setUsers(response.data.json_list);
    });
  }, []);

  const updateUser = () => {
    Axios.post("http://localhost:5000/api/update", {
      targetID: targetID,
      name: name,
      id: id,
      points: points
    }).then(
      Axios.get("http://localhost:5000/api/read").then((response) => {
        setUsers(response.data.json_list);
        window.location.reload();
      })
    )
  };

  const deleteUser = () => {
    Axios.post('http://localhost:5000/api/delete', {
      targetID: targetID
    }).then(
      Axios.get("http://localhost:5000/api/read").then((response) => {
        setUsers(response.data.json_list);
        window.location.reload();
      })
    )
  };

  return (
    <div id="App">

      <div id="title">
        CRUD APPLICATION
      </div>

      <div className="form">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>ID: </label>
        <input
          type="number"
          name="id"
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
        <label>Points: </label>
        <input
          type="number"
          name="points"
          onChange={(e) => {
            setPoints(e.target.value);
          }}
        />
        <button onClick={createUser}>Create</button>
      </div>

      <div className="form">
        <label>Target ID: </label>
        <input
          type="number"
          name="targetID"
          onChange={(e) => {
            setTargetID(e.target.value);
          }}
        />
        <button onClick={() => { updateUser() }}>Update</button>
        <button onClick={() => { deleteUser() }}> Delete</button>
      </div>

      <div id="tableOfUsers">
        <div id="tableCaption">
          List of Users in Database
        </div>
        <div id="tableHeader">
          <div className="tableHeaderCell">
            Name
          </div>
          <div className="tableHeaderCell">
            ID
          </div>
          <div className="tableHeaderCell">
            Points
          </div>
        </div>
        <div id="tableBody">
          {users.map((val) => {
            return (
              <div className={"tableRow"} key={val.id}>
                <div className="tableCell">
                  {val.name}
                </div>
                <div className="tableCell">
                  {val.id}
                </div>
                <div className="tableCell">
                  {val.points}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App