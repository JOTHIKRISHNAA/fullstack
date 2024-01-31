import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <body>
      <div className='cont1'>
      <div id="container">
        <header>Register new account</header>
        <form method="post" onSubmit={handleRegister}>
          <fieldset>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              required
              autoFocus
            />
            <br />
            
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter PhoneNumber"
              required
              autoFocus
            />
            <br />
            
            <input type="email" name="email" id="email" placeholder="Enter E-mail" required />
            <br />
            
            <input type="password" name="password" id="password" placeholder="Password" required />
            <br />
            
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
            <br></br>

            <label htmlFor="submit"></label>
            <Link to={'/home'}><input type="submit" name="submit" id="submit" value="REGISTER" /></Link>
            <br></br>
            <div style={{fontSize:17}}>
            <a className='new2'>Already User ?</a><Link to={'/login'} className='new2'>login</Link>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
    </body>
  );
};

export default RegisterForm;
