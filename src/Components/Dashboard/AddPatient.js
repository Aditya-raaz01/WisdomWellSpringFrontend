import './AddPatient.css'
import { Link } from "react-router-dom";

export default function addPatient(){
    const [patientName, setpatientName] = useState("");
    const [patientAge, setpatientAge] = useState("");
    const [patientGender, setpatientGender] = useState("");
    const [patientNumber, setpatientNumber] = useState("");

    function userData() {
    let data = {
      patientName,
      patientGender,
      patientNumber,
      patientAge
      
    };
    fetch("http://localhost:8080/user/addPatient", {
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

    return(
        <>
            <div id="dashboard">
                <div id="panel">
                    <div id="panelButton"><Link to='/user/profile' id="panelButtonText">Profile</Link></div>
                    <div id="panelButton"><Link to='/user/addPatient' id="panelButtonText">Add Patient</Link></div>
                    <div id="panelButton"><Link to='/user/addMedicine' id="panelButtonText">Add Medicine</Link></div>
                    <div id="panelButton"><Link to='/' id="panelButtonText">Log Out</Link></div>
                </div>
                <div id="display">
                    <img src='/pictures/addPatientBackImage.jpg'/>
                    <input type='text' placeholder='Name' id='patientName' name='patientName' value={patientName} onChange={(e)=>{
                        setpatientName(e.target.value)
                    }}></input><br/>
                    <span id='patientGender'>Gender: </span>
                    <select id="patientListGender" name='patientGender' value={patientGender} onChange={(e)=>{
                        setpatientGender(e.target.value)
                    }}>
                        <option value="volvo">Male</option>
                        <option value="saab">Female</option>
                    </select>
                    <br/>
                    <input type='number' placeholder='Age' id='patientAge' name='patientAge' value={patientAge} onChange={(e)=>{
                        setpatientAge(e.target.value)
                    }}></input><br/>
                    <input type='text' placeholder='Number' id='patientNumber' name='patientNumber' value={patientNumber} onChange={(e)=>{
                        setpatientNumber(e.target.value)
                    }}></input><br/>
                    <button id='patientSubmit' onClick={userData}>Submit</button>

                </div>
            </div>
        </>
    );
}