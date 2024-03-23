import './AddPatient.css'
import { Link } from "react-router-dom";

export default function addPatient(){
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
                    <input type='text' placeholder='Name' id='patientName'></input><br/>
                    <span id='patientGender'>Gender: </span>
                    <select name="cars" id="patientListGender" form="carform">
                        <option value="volvo">Male</option>
                        <option value="saab">Female</option>
                    </select>
                    <br/>
                    <input type='number' placeholder='Age' id='patientAge'></input><br/>
                    <button id='patientSubmit'>Submit</button>

                </div>
            </div>
        </>
    );
}