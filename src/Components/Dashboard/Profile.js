import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://wisdom-well-spring-backend.vercel.app/user/profile", {
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
    fetch(" https://wisdom-well-spring-backend.vercel.app/user/logout", {
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
                  alt=""
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
