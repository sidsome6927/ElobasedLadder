import "./Login.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useContext, useRef} from "react";
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from '@mui/material';

const Login = () =>{
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
  }

  console.log(user);
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
            <input placeholder="Email" type="email" className="loginInput" ref={email} />
            <input placeholder="Password" type="password" className="loginInput" ref={password} />
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="15px"/> : "Login In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;