import "./Addmedicine.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddMedicine() {
  const [medicineName, setMedicineName] = useState("");
  const [medicineFoodBox, setMedicineFoodBox] = useState("");
  const [medicineTime, setMedicineTime] = useState("");
  const [patientId, setPatientId] = useState("");
  const navigate = useNavigate();

    function userData() {
        let data = {
          medicineName,
          medicineFoodBox,
          medicineTime,
          patientId
          
        };
        fetch("https://wisdom-well-spring-backend.vercel.app/user/addMedicine", {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((resp) => {
          // console.warn("resp",resp);;
          resp.json().then((result) => {
            console.log("result", result);
          });
        });
      }
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
          <div id="panelButton" >
            <Link to="/" id="panelButtonText" onClick={logout}>
              Log Out
            </Link>
          </div>
        </div>
        <div id="display">
          <img
            src="/pictures/loginbackground.jpg"
            alt=""
            id="addMedicineBackImage"
          />
        </div>
      </div>
      <img src="/pictures/medicine.png" alt="" id="addMedicineSideImage" />
      <div id="addMedicineForm">
        <div id="addMedicineHeader">Add Medicine</div>
        <div id="medicineUnderline"></div>
        <input
          type="text"
          placeholder="Patient ID"
          id="patientId"
          name="patientId"
          value={patientId}
          onChange={(e) => {
            setPatientId(e.target.value);
          }}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Medicine Name"
          id="medicineName"
          name="medicineName"
          value={medicineName}
          onChange={(e) => {
            setMedicineName(e.target.value);
          }}
        ></input>
        <br />
        <span id="medicineTime">MEDICINE TIME: </span>
        <select
          id="medicineTimeList"
          name="medicineTime"
          value={medicineTime}
          onChange={(e) => {
            setMedicineTime(e.target.value);
          }}
        >
          {" "}
          <option id="medicineTimeBox" value="Select ">
            Select Time
          </option>
          <option id="medicineTimeBox" value="Morning">
            Morning
          </option>
          <option id="medicineTimeBox" value="Afternoon">
            Afternoon
          </option>
          <option id="medicineTimeBox" value="Evening">
            Evening
          </option>
          <option id="medicineTimeBox" value="Night">
            Night
          </option>
        </select>
        <br />
        <span id="medicineFood">MEDICINE TYPE: </span>
        <select
          id="medicineFoodList"
          name="medicineFood"
          value={medicineFoodBox}
          onChange={(e) => {
            setMedicineFoodBox(e.target.value);
          }}
        >
          <option id="medicineFoodBox" value="Select">
            Select Type
          </option>
          <option id="medicineFoodBox" value="Empty Stomach">
            Empty Stomach
          </option>
          <option id="medicineFoodBox" value="After Food">
            After Food
          </option>
        </select>
        <br />
        <button id="medicineSubmit" onClick={userData}>
          Submit
        </button>
      </div>
    </>
  );

}
