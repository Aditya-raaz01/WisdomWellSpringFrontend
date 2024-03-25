import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginemail, setlogin] = useState("");
  const [loginpassword, setPassword] = useState("");
  async function userData() {
    let data = {
      loginemail,
      loginpassword,
    };
    fetch("https://wisdom-well-spring-backend.vercel.app/user/login", {
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
        navigate("/user/profile");
      });
    });
  }

  return (
    <>
      <div id="loginpage">
        <img
          src="/pictures/loginbackground.jpg"
          alt=""
          id="backimage"
        ></img>
        <img src="/pictures/loginside.png" alt="image" id="sideimage"></img>
        <div id="loginbox">
          <div id="loginupper">Login</div>
          <div id="loginunderline"></div>
          <div id="loginbody">
            <input
              id="loginemail"
              type="email"
              placeholder="  Email ID"
              value={loginemail}
              name="loginemail"
              onChange={(e) => {
                setlogin(e.target.value);
              }}
            ></input>
            <br />
            <input
              id="loginpassword"
              type="password"
              placeholder="  Password"
              value={loginpassword}
              name="loginpassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <div id="loginnewmember">
              Don't Have an Account?{" "}
              <Link to="/signup" id="logincreate">
                Create One
              </Link>
            </div>
          </div>
          <div id="loginlower">
            <button id="loginbutton" onClick={userData}>
              <Link to="/user/profile" id="loginbuttontext">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
