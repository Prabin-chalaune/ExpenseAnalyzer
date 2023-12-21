
import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './resetPassword.css';
import axios from 'axios';
const ResetPassword=()=>{
    const [password, setPassword] = useState("");
    const [confirmnewPassword, setConfirmnewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    // const searchParams= useSearchParams();
    const [isLoading, setIsLoading] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordValidations, setPasswordValidations] = useState({
      length: false,
      number: false,
      specialCharacter: false,
    });
    const {id,token} = useParams();
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setMessage("");
        setError("");
        if (password !== confirmnewPassword) {
            setError("Passwords do not match.");
            setIsLoading(false)
        } else {
            try {
                // const token = searchParams.get("token");
                // const token=localStorage.getItem('token');
                const res = await axios.post(`http://localhost:5000/api/v1/forgotPass/resetPassword/${id}/${token}`, {password })
                setMessage(res.data.message);
                if(res.data.Status==="Success"){
                   window.alert("Password reset successful!");
                navigate("/login");
                }

            } catch (error) {
                // setError(error.response.data.message)
                if (error.response && error.response.data && error.response.data.message) {
                  setError(error.response.data.message);
              } else {
                  setError("An error occurred while resetting the password.");
              }
            }finally{
                setIsLoading(false);
            }
        }
    }

    const closeSuccessMessage = () => {
      setMessage(false);
    };

    const closeErrorMessage = () => {
      setError(false);
    };

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


  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    isPasswordValid(value);
  };

  const handleFocus = () => {
    setPasswordFocused(true);
  };

  const handleBlur = () => {
    setPasswordFocused(false);
  };


  return (
    <div className='text-center'>
      <h1 className='text-xl font-bold p-5'>Reset Password</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="password"
          // name="password"
          // className="input-field"
          placeholder="Enter new password"
          // onChange={(e) => setnewPassword(e.target.value)}
          onChange={handlePasswordChange}
          value={password}
          required
          autoComplete='false'
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={`input-field ${passwordFocused ? 'passwordFocused' : ''}`}
        />
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
        <input
          type="password"
          className="input-field"
          placeholder="Confirm new password"
          onChange={(e) => setConfirmnewPassword(e.target.value)}
          value={confirmnewPassword}
          required
          autoComplete={false}
        />
        <button className="submit-btn" disabled={isLoading}>
          Reset Password
        </button>
      </form>
      {/* Message and error components */}
      {message && (
        <div className={`message-box success-message`}>
          <p>{message}</p>
          <button className='cut' onClick={closeSuccessMessage}>X</button>
        </div>
      )}
      {error && (
        <div className={`message-box error-message`}>
          <p>{error}</p>
          <button className='cut' onClick={closeErrorMessage}>X</button>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
