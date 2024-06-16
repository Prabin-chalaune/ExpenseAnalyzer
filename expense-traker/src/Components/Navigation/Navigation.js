import React,{useState} from 'react'
import avatar from '../../Img/AvatarOne.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useNavigate } from 'react-router-dom';
import '../../App.css'

function Navigation({active, setActive}) {
    const [isloggedin,setIsloggedin]=useState(false);
    const navigate=useNavigate();
    const userData = localStorage.getItem('name');

    const handlelogout=()=>{
        localStorage.clear();
        setIsloggedin(false);
        navigate("/");
    };

    return (
        <div className='NavStyled'>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    {/* {userData?<h2>{userData}</h2> :"Daily"} */}
                    <h2>Daily</h2>
                    <p>Money Record</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                 <button className='logout' onClick={handlelogout} > {signout} Logout</button>
                </li>
            </div>
        </div>
    )
}


export default Navigation;



