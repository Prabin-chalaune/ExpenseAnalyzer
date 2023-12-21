import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


//toast styling when login/register

const Homepage = () => {
  return (
    <>
     <FormStyled>
        <div className='home_div'>
         <h1>Empower your financial journey. Track-Manage & Thrive</h1>
         <div className='mid_desc'>
          <p><b>Gain an invaluable edge in managing your money</b> with our intuitive expenses managing platform. Seamlessly categorize and monitor your spending habits, effortlessly understanding where every money goes. Our user-friendly interface empowers you to set budgets, analyze trends, and make informed financial decisions. Take charge of your financial destiny as you chart a path toward smarter spending and long-term financial well-being. <b>Join us today </b>and witness how simple insights can transform the way you manage your expenses.</p>
         </div>
         <Link to="/login"><button className='login_btn'>Explore Services</button></Link>
        </div>
     </FormStyled>
    </>
  );
}

export default Homepage;

const FormStyled = styled.div`

  padding:2rem 8rem;
  margin-top:10%;
  .home_div{
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    h1{
      margin-bottom:4rem;
    }
    .mid_desc{
      background-color: rgba(252, 246, 249, 0.78);
      p{
          padding:4rem 1.5rem;
          font-size:1.2rem;
          font-weight:500;
          letter-spacing:0.03rem;
      }
  }
    .login_btn{
        height:3rem;
        border:none;
        background-color:#42AD00;
        color:white;
        width:14rem;
        cursor:pointer;
        margin-top:2rem;
        font-size:1.2rem;
        border-radius:3px;

    }
  }

  @media only screen and (max-width:600px) and (min-width:310px){
    padding:1rem 1rem;
    margin-top:5%;
  .home_div{
    h1{
        font-size:1rem;
    }
    p{
        padding:0.5rem;
        font-size:0.8rem;
        text-align:left;
    }
    .login_btn{
        width:10rem;
        cursor:pointer;
        margin-top:1rem;
        font-size:1rem;


    }
  }

  }

`