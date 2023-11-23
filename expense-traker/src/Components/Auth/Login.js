
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', user);
      alert(response.data.message);
      setLoginUser(response.data.user);
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
          <input
            type='password'
            required
            name='password'
            value={user.password}
            onChange={handleChange}
            className='inputs'
            placeholder='Password'
          />
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
        </form>
      </div>
    </>
  )
  };

export default Login;
