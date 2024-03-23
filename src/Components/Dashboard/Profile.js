import { Link } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/user/profile").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  }, []);
  console.warn(users);

  return (
    <>
      <div id="dashboard">
        <div id="panel">
          <div id="panelButton">
            <Link to="/profile" id="panelButtonText">
              Profile
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/addPatient" id="panelButtonText">
              Add Patient
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/addMedicine" id="panelButtonText">
              Add Medicine
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/" id="panelButtonText">
              Log Out
            </Link>
          </div>
        </div>
        <div id="display">
          <div className="App">
            <h1>Our Elders</h1>
            {users.map((e) => {
              <div className="card">
                <img src="img_avatar.png" alt="Avatar" style="width:100%" />
                <div className="container">
                  <h4>
                    <b></b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}