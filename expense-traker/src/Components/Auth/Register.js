import React,{useState} from 'react';
import './register.css';
import axios from 'axios';      // for api call
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


const Register = () => {

  const navigate= useNavigate();

  const [user,setUser]=useState({   //user creating  :initial value null of these objects
    name:"",
    email:"",
    password:"",
    ConfirmPassword:"",
  });


  const valueUpdater=(e)=>{
    const{name,value}=e.target;
    setUser({
      ...user,[name]:value
    })
}


const resisterClick = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  const { name, email, password, ConfirmPassword } = user;

  if (name && email && password && password === ConfirmPassword) {
    axios.post("http://localhost:5000/api/v1/signup", user)
      .then(res => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch(error => {
        console.error("Registration error:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Server responded with status:", error.response.status);
          console.error("Server response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
        alert("There was an error during registration. Please try again.");
      });
  } else {
    alert("Please fill in all fields correctly and ensure passwords match.");
  }
};

return (
    <>
        <div className='RegisterCard'>
          <form onSubmit={resisterClick}>
            <h1>Register</h1>
            <input type="text" required name="name" value={user.name} onChange={valueUpdater} className='inputs' placeholder='User name' />
            <input type="email" required name="email" value={user.email}onChange={valueUpdater} className='inputs' placeholder='Email'/>
            <input type="password" required name="password" value={user.password}onChange={valueUpdater}  className='inputs' placeholder='Enter password'/>
            <input type="password" required name="ConfirmPassword" value={user.ConfirmPassword} onChange={valueUpdater} className='inputs' placeholder='Confirm password'/>

            <div >
                <button type='submit' className='loginBtn'>Register</button>
            </div>
            <p>OR</p>
            <div >
                <Link to="/login"><button className='ResisterBtn'>Login</button></Link>
            </div>
          </form>
        </div>

    </>
  );
}

export default Register;
