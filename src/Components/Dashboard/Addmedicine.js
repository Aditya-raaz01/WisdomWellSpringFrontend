import './Addmedicine.css'
import { Link } from "react-router-dom";

export default function addMedicine(){
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

                </div>
            </div>
        </>
    );
}