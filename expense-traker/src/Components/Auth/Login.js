// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = ({ setLoginUser }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
    showPassword:false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,     // Toggle password visibility
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', user);
      alert(response.data.message);
      setLoginUser(response.data.user);
      localStorage.setItem('token:',response.data.token);
      navigate('/dashboard');

    } catch (error) {
      // console.error('Login error:', error);
      alert('Wrong Credentials. Please try again!');
    }

  };

  return (
    <>
      <div className='loginCard'>
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <input
            type='email'
            required
            name='email'
            value={user.email}
            onChange={handleChange}
            className='inputs'
            placeholder='Email'
          />
          <div className='passwordContainer'>
           <div className='inputWithIcon'>
            <input
              type={user.showPassword ? 'text' : 'password'}
              required
              name='password'
              value={user.password}
              onChange={handleChange}
              className='inputs_pass'
              placeholder='Password'
            />
            <button
                type='button'
                onClick={togglePasswordVisibility}
                className='passwordToggleBtn'
              >
                {user.showPassword ? <FaEye />:<FaEyeSlash /> }
            </button>
            </div>
            </div>
          <div>
            <button type='submit' className='loginBtn'>
              Login
            </button>
          </div>
          <p>OR</p>
          <div>
            <Link to='/signup'>
              <button className='ResisterBtn'>Register</button>
            </Link>
          </div>
          <Link to="/forgotpass" ><p className='forgotPass'>Forgot password?</p></Link>
        </form>
      </div>
    </>
  )
  };

export default Login;
