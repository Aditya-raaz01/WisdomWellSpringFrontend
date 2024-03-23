import "./Layout.css"
import { Link, Outlet } from "react-router-dom";
import {  FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Layout (){
    return(
        <main>
        <div id="header">
            <div id="address">
                <FaHome />
                <div>Sector-1, NIT Rourkela</div>
            </div>
            <div id="phone">
                <FaPhoneAlt />
                <div>+91 9777938549</div>
            </div>
            <button id="donate-now">Donate Now</button>
        </div>
        <div id='nav-bar'>
            <img src="/pictures/logo.png" alt='image' id='logo' height={50}/>
            <div id='nav-bar-format'>
                <Link to='/' id='nav-button'>Home</Link>
                <Link to='/about-us' id='nav-button'>About US</Link>
                <Link to='/login' id='nav-button'>Login</Link>
                <Link to='/signUp' id='nav-button'>Register</Link>
                <button id='nav-button-emergency' height={50}>Emergency</button>
            </div>
        </div>
        <Outlet/>
    </main>
    );
}