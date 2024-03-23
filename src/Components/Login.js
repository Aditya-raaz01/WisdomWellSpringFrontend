import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <>
            <div id='loginpage'>
                <img src="/pictures/loginbackground.jpg" alt='image' id='backimage'></img>
                <img src="/pictures/loginside.png" alt='image' id='sideimage'></img>
                <div id='loginbox'>
                    <div id='loginupper'>Login</div>
                    <div id='loginunderline'></div>
                    <div id='loginbody'>
                        <input id='loginemail' type='email' placeholder='Email ID'></input><br/>
                        <input id='loginpassword' type='password' placeholder='Password'></input><br/>
                        <div id='loginnewmember'>Don't Have an Account? <Link to='/signup' id='logincreate'>Create One</Link></div>
                    </div> 
                    <div id='loginlower'>
                        <button id='loginbutton'><Link to='/user/profile' id="loginbuttontext">Login</Link></button>
                    </div>
                </div>

            </div>
        </>
    );
}