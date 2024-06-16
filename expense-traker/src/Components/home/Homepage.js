import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css'


const Homepage = () => {
  return (
    <>
     <div className="FormStyled">
        <div className='home_div'>
         <h1>Empower your financial journey. Track-Manage & Thrive</h1>
         <div className='mid_desc'>
          <p><b>Gain an invaluable edge in managing your money</b> with our intuitive expenses managing platform. Seamlessly categorize and monitor your spending habits, effortlessly understanding where every money goes. Our user-friendly interface empowers you to set budgets, analyze trends, and make informed financial decisions. Take charge of your financial destiny as you chart a path toward smarter spending and long-term financial well-being. <b>Join us today </b>and witness how simple insights can transform the way you manage your expenses.</p>
         </div>
         <Link to="/login"><button className='login_btn'>Explore Services</button></Link>
        </div>
     </div>
    </>
  );
}

export default Homepage;
