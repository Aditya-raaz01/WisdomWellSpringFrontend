import './SignUp.css';
import { Link } from 'react-router-dom';
import { MdOutlineRefresh } from "react-icons/md";
import { useState } from 'react';

export default function SignUp(){
    const [regID,setRegID] = useState('');
    const generateID = () => {
      const RandomID = Math.random().toString(36).substring(2,10);
      setRegID(RandomID);
    }

    return(
        <>
            <div id='signUpPage'>
                <img src="/pictures/loginbackground.jpg" alt='image' id='signUpBackImage'></img>
                <img src="/pictures/signUpSideImage.png" alt='image' id='signUpSideImage'></img>
                <div id='signUpBox'>
                    <div id='signUpUpper'>Sign Up</div>
                    <div id='signUpUnderline'></div>
                    <div id='signUpBody'>
                        <input id='signupName' type='text' placeholder='Your Name'></input><br/>
                        <input id='signupCentre' type='text' placeholder='Name of the Centre'></input><br/>
                        <input id='signupEmail' type='email' placeholder='Your Email'></input><br/>
                        <input id='signupPassword' type='password' placeholder='Password'></input><br/>
                        <input id='signupCPassword' type='password' placeholder='Confirm Password'></input><br/>
                        <div id='signupIdBox'>
                            <input id='signupId' type='text' placeholder='Unique ID' value={regID} onChange={(e)=>setRegID(e.target.value)} readOnly></input>
                            <MdOutlineRefresh id='icon' size={25} style={{cursor:'pointer'}} onClick={generateID}/>
                        </div>
                    </div>
                    <div id='signUpOldMember'>Already an User? <Link to='/login' id='signUpOldMemberText'>Log In</Link></div>
                    <div id='signUpLower'>
                        <button id='signUpButton'><Link to='/user/profile' id="signUpButtonText">Sign Up</Link></button>                    
                    </div>
                </div>
            </div>
        </>
    );
}