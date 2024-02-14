import  { useState } from 'react';
import './Register.css'
import { Link ,useNavigate} from 'react-router-dom';
import { signUp } from '../services/auth';

const RegisterForm = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const response = await signUp({ name, email, password });
        if (response.status === 202) {
          navigate('/');
        }
      } else {
        setConfirmPasswordError("Your confirm password does not match");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

 
  

  return (
    <body>
      <div className='cont1'>
      <div id="container" style={{marginTop:100,}}>
        <header>Register new account</header>
        <form method="post" onSubmit={handleSubmit}>
          <fieldset>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              required
              autoFocus
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter E-mail" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input 
              type="password" 
              name="confirm-password" 
              id="confirm-password" 
              placeholder="Confirm Password" 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            {confirmPasswordError && <p style={{color: 'red', fontSize: '0.8rem'}}>{confirmPasswordError}</p>}
            
            <button name="submit" id="submit" style={{color:'white',backgroundColor:'#2d3436',fontWeight:'bold',width:'50%',height:30}}>REGISTER</button>
            <br />
            <br></br>
            <div style={{fontSize:17}}>
              <span className='new2'>Already User ?</span>
              <Link to={'/'} className='new2' style={{textDecoration:'none'}}>Login</Link>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
    </body>
  );
};

export default RegisterForm;
