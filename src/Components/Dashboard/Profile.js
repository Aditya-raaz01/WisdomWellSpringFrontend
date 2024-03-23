import { Link } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((data) => {
        // Check if data is an array
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          // If data is not an array, perhaps it's an object with users inside
          // Adjust this according to the structure of your response
          setUsers([data]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div id="dashboard">
        <div id="panel">
          <div id="panelButton">
            <Link to="/user/profile" id="panelButtonText">
              Profile
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/user/viewPatients" id="panelButtonText">
              View Patient
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/user/addPatient" id="panelButtonText">
              Add Patient
            </Link>
          </div>
          <div id="panelButton">
            <Link to="/user/addMedicine" id="panelButtonText">
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
            <h1>User-Profile</h1>
            {users.map((user) => (
              <div className="card bigcard" key={user.id}>
                <div className="rightcard">
                  <img
                    src="/pictures/Userimg.jpeg"
                    alt="User Image"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="container">
                  <h4>
                    <b> Name : {user.name}</b>
                  </h4>
                  <p>Email: {user.email}</p>
                  <p>UserId: {user.userId}</p>
                  <p>UserCenter: {user.userCentre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}