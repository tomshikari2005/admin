import React,{useState} from 'react'
import './LoginForm.css'
import bg from './asest/bg.mp4'
import { Link } from 'react-router-dom';



function LoginForm({onLogin}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin@gmail.com' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };


  return (
    <>
    <video id='vid' autoPlay loop muted>
      <source src={bg} type='video/mp4' />
    </video>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4'></div>
        <div className='col-12 col-md-4'>
          <div className='form'>
          <form onSubmit={handleSubmit}>
            <h1>Login Admin</h1>
            <div className='input-box'>
              <input type='email' placeholder='Username' required 
              value={username} onChange={(e) => setUsername(e.target.value)}
              />
              <i className="bi bi-person-fill icon"></i>
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required 
               value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bi bi-shield-lock-fill icon"></i>
            </div>

            <div className="remember-forget">
              <label><input type='checkbox' />Remember me</label>
            </div>
              <button type='submit'>Login</button>

            <div className="register-link">
              <p>Don't have an account?<Link>Contact HR</Link></p>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
// extra

// extra
}

export default LoginForm;