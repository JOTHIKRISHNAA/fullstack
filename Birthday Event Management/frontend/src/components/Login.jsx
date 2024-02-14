import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth';
import './login.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    // Check if email and password are provided
    if (!email.trim() && !password.trim()) {
      setErrorMessage('Please enter email and password.');
      return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrorMessage('Please enter email.');
      return;
    }
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter password.');
      return;
    }

    try {
      // Call signIn function with form data
      const res = await signIn(form);
      sessionStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      console.log(err);
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div style={{ flexDirection: 'row', display: 'flex' }} className='login'>
      <div className="container">
        <div className="form" id="login">
          <h1 className="form__title">Welcome back</h1>
          <form>
            <div className="form__input-group">
              <input
                type="text"
                className="form__input"
                autoFocus
                name='email'
                placeholder="Email"
                id="emailInput"
                onChange={handleChangeEvent}
              />
              
            </div>
            <div className="form__input-group">
              <input
                type="password"
                className="form__input"
                autoFocus
                name='password'
                placeholder="Password"
                id="passwordInput"
                onChange={handleChangeEvent}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="padding"></div>
              <button type="submit" className="form__button" id="loginButton" style={{ marginLeft: 80 }} onClick={handleLogin}>
                LOGIN
              </button>
              <br /><br />
              <div style={{ paddingLeft: "5em", fontSize: 19 }}>
                <a className='new1'>New User ? </a><Link to={'/register'} style={{ color: 'black', textDecoration: 'none' }}>Sign Up</Link>
                <br /><br />
                <button style={{ color: 'black', width: 150, backgroundColor: 'grey' }}><Link to={'/admin'} style={{ color: 'black', width: 50 }}>Admin Login</Link></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
