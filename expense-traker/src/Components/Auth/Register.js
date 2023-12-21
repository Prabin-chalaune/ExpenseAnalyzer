import React,{useState} from 'react';
import './register.css';
import axios from 'axios';      // for api call
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


const Register = () => {

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    number: false,
    specialCharacter: false,
  });
  const navigate= useNavigate();

  const [user,setUser]=useState({   //user creating  :initial value null of these objects
    name:"",
    email:"",
    password:"",
    ConfirmPassword:"",
  });

  const isPasswordValid = (password) => {
    const lengthValid = password.length >= 8;
    const numberValid = /\d/.test(password);
    const specialCharValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    setPasswordValidations({
      length: lengthValid,
      number: numberValid,
      specialCharacter: specialCharValid,
    });

    return lengthValid && numberValid && specialCharValid;
  };


//   const valueUpdater=(e)=>{
//     const{name,value}=e.target;
//     setUser({
//       ...user,[name]:value
//     })
// }
  const valueUpdater = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    if (name === 'password') {
      isPasswordValid(value);
    }
  };

  // const handlePasswordValidation = (e) => {
  //   const { value } = e.target;
  //   const isValid = isPasswordValid(value);
  //   setPasswordValid(isValid);
  // };

  const handleFocus = () => {
    setPasswordFocused(true);
  };

  const handleBlur = () => {
    setPasswordFocused(false);
  };

const resisterClick = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  const { name, email, password, ConfirmPassword } = user;

  if (name && email && password && password === ConfirmPassword && isPasswordValid(password)) {
    axios.post("http://localhost:5000/api/v1/signup", user)
      .then(res => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch(error => {
        console.error("Registration error:", error);
        if (error.response) {

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
            <input type="password" required name="password" value={user.password} onChange={valueUpdater}  onFocus={handleFocus}
              onBlur={handleBlur}
              className={`inputs ${passwordFocused ? 'passwordFocused' : ''}`}
              placeholder='Enter password'/>
            {passwordFocused && (
              <div className='passwordValidation'>
                <p>Password must include</p>
                <ul>
                  <li className={passwordValidations.length ? 'valid' : 'invalid'}>
                    at least 8 characters
                  </li>
                  <li className={passwordValidations.number ? 'valid' : 'invalid'}>
                    at least a number
                  </li>
                  <li className={passwordValidations.specialCharacter ? 'valid' : 'invalid'}>
                    a special character
                  </li>
                </ul>
              </div>
            )}
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
