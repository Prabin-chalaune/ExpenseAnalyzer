import React,{useState}from 'react';
import './forgotpass.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Forgotpass = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            setMessage("");
            setError("");
            const res = await axios.post("http://localhost:5000/api/v1/forgotPass/forgotPassword", {email})
            console.log(res);
            setMessage(res.data.message);
            console.log(res.data.message);
        } catch (error) {
            setError(error.response.message)
            console.log(error);
            console.log(error.response.data.message);
        }finally{
            setIsLoading(false)
        }
    }

  const closeSuccessMessage = () => {
    setMessage(false);
  };

  const closeErrorMessage = () => {
    setError(false);
  };

  return (
    <div>
        <div className='email_container'>
          <p className='pass_text' >Reset your password:</p>
          <p >Please enter your email address to reset your password </p>
          <form onSubmit={handleSubmit} className='email_div'>
            <input type='email'  onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="e.g venthan@gmail.com" className='forgot_email'/>
            <button type="submit" className='RequestBtn'>Request reset link</button>
          </form>

          <Link to="/login" className='reset_'>Back To Login</Link>

          {
                message && <div className='message-box success-message'>
                    <p>
                        {message}
                    </p>
                    <button className='cut' onClick={closeSuccessMessage}>X</button>
                </div>
            }
            {
                error && <div className='message-box success-message'>
                    <p>
                        {error}
                    </p>
                    <button className='cut' onClick={closeErrorMessage}>X</button>
                </div>
            }

        </div>
    </div>
  );
}

export default Forgotpass;
