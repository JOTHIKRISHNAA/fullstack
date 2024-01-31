// import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{flexDirection:'row',display:'flex'}} className='login'>
    <div className="container">
      <div className="form" id="login">
        <h1 className="form__title">Welcome back</h1>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Username"
            id="usernameinput"
          />
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autoFocus
            placeholder="Password"
            id="passwordInput"
          />
          <div className="padding"></div>
          <a href="#">

            <Link to='/home'>
            <button className="form__button" id="loginButton">
              Login
            </button></Link>
            
            
          </a>
          <br></br>
          <br></br>
          
          <div style={{paddingLeft:"5em",fontSize:19} } >
          <a className='new1'>New User ? </a><Link to={'/register'} style={{color:'black'}}>Sign Up</Link>
          <br></br>
          <button style={{color:'black',width:150,backgroundColor:'grey'}}><Link to={'/admin'} style={{color:'black',width:50}}>Admin Login</Link></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
