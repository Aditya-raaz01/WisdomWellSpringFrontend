import React, { useEffect, useState } from "react";
import "./Viewpatient.css";
import { Link, useNavigate } from "react-router-dom";

export default function Viewpatient() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/user/getPatient", {
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
        setPatients(data.patients); // Update state with patients array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          <h1>Patients</h1>
          <div className="last">
            {patients.length > 0 ? (
              patients.map((patient) => (
                <div className="card bigcard smallcard" key={patient._id}>
                  <div className="container container2">
                    <h4>
                      <b> Name : {patient.name}</b>
                    </h4>
                    <p>Gender: {patient.gender}</p>
                    <p>Phone Number: {patient.phoneNo}</p>
                    <p>Age: {patient.age}</p>
                    <p>Id: {patient._id}</p>
                    <p>Medicines: {patient.medicineList}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No patients to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
