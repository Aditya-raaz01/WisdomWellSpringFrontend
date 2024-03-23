import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
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
       
          setUsers(data);
      
          // If data is not an array, perhaps it's an object with users inside
          // Adjust this according to the structure of your response
          
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [users]);

  function logout() {
    fetch("http://localhost:8080/user/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.log("result", result);
      });
      navigate("/");
    });
  }

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
            <Link to="/" id="panelButtonText" onClick={logout}>
              Log Out
            </Link>
          </div>
        </div>
        <div id="display">
          <div className="App">
            <h1>User-Profile</h1>
            
              <div className="card bigcard" key={users.userId}>
                <div className="rightcard">
                  <img
                    src="/pictures/Userimg.jpg"
                    alt="User Image"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="container">
                  <h4>
                    <b> Name : {users.name}</b>
                  </h4>
                  <p>Email: {users.email}</p>
                  <p>UserId: {users.userId}</p>
                  <p>UserCenter: {users.userCentre}</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
