import "./Register.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from "react";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if(confirmpassword.current.value!==password.current.value)
    {
      confirmpassword.current.setCustomValidity("Password doesn't Match");
    }
    else
    {
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
        confirmpassword:confirmpassword.current.value
      }
      try{
        const res = await axios.post("/auth/register",user);
        console.log(res);
      }
      catch(err){
        console.log(err);
      }
      
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FACEIT <KeyboardArrowDownIcon/></h3>
          <span className="loginDesc">
          Elo based Competitive CSGO ladder matchmaking.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email} className="loginInput" />
            <input placeholder="Password" required type="password" ref={password} className="loginInput" />
            <input placeholder="Confirm Again" required type="password"  ref={confirmpassword} className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}