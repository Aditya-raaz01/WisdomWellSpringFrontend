import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineRefresh } from "react-icons/md";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [signupId, setRegID] = useState("");
  const generateID = () => {
    const RandomID = Math.random().toString(36).substring(2, 10);
    setRegID(RandomID);
  };

  const [signupName, setName] = useState("");
  const [signupEmail, setEmail] = useState("");
  const [signupPassword, setPassword] = useState("");
  const [signupCentre, setCentre] = useState("");
  const [signupCPassword, setCPassword] = useState("");

  async function userData() {
    let data = {
      signupName,
      signupEmail,
      signupCentre,
      signupPassword,
      signupCPassword,
      signupId,
    };
    // console.warn(data);
    fetch("https://wisdom-well-spring-backend.vercel.app/", {
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
        console.warn("result", result);
        navigate("/user/profile");
      });
    });

    alert("Succesfully Registered");
  }

  return (
    <>
      <div id="signUpPage">
        <img
          src="/pictures/loginbackground.jpg"
          alt="image"
          id="signUpBackImage"
        ></img>
        <img
          src="/pictures/signUpSideImage.png"
          alt="image"
          id="signUpSideImage"
        ></img>
        <div id="signUpBox">
          <div id="signUpUpper">Sign Up</div>
          <div id="signUpUnderline"></div>
          <div id="signUpBody">
            <input
              id="signupName"
              type="text"
              placeholder="  Your Name"
              value={signupName}
              name="signupName"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <br />
            <input
              id="signupCentre"
              type="text"
              placeholder="  Name of the Centre"
              value={signupCentre}
              name="signupCentre"
              onChange={(e) => {
                setCentre(e.target.value);
              }}
            ></input>
            <br />
            <input
              id="signupEmail"
              type="email"
              placeholder="  Your Email"
              value={signupEmail}
              name="signupEmail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <input
              id="signupPassword"
              type="password"
              placeholder="  Password"
              value={signupPassword}
              name="signupPassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <input
              id="signupCPassword"
              type="password"
              placeholder="  Confirm Password"
              value={signupCPassword}
              name="signupCPassword"
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            ></input>
            <br />
            <div id="signupIdBox">
              <input
                id="signupId"
                type="text"
                placeholder="  Unique ID"
                value={signupId}
                onChange={(e) => setRegID(e.target.value)}
                name="signupId"
                readOnly
              ></input>
              <MdOutlineRefresh
                id="icon"
                size={25}
                style={{ cursor: "pointer" }}
                onClick={generateID}
              />
            </div>
          </div>
          <div id="signUpOldMember">
            Already an User?{" "}
            <Link to="/login" id="signUpOldMemberText">
              Log In
            </Link>
          </div>
          <div id="signUpLower">
            <button id="signUpButton">
              <div id="signUpButtonText" onClick={userData}>
                Sign Up
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
