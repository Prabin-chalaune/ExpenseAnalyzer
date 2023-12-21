import React,{useState} from 'react'
import styled from 'styled-components'
import avatar from '../../Img/AvatarOne.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useNavigate } from 'react-router-dom';

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
        <NavStyled>
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
        </NavStyled>
    )
}


const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
            font-size:1.5rem;
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .logout{
        border:none;
        background-color:transparent;
        font-size:1.1rem;
        cursor:pointer;
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }


    @media only screen and (max-width: 1024px) and (min-width: 700px)  {
        padding: 2rem 1.5rem;
        width: 260px;
    }

    @media only screen and (max-width:500px) and (min-width:310px){
        padding: 0.5rem 0.5rem;
        width: 100%;
        height:auto;
        background: rgba(252, 246, 249, 0.78);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.4rem;
        font-size:0.8rem;
        .user-con{
            height: 100px;
            display: flex;
            flex-direction:column;
            align-items: center;
            gap: 0.5rem;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
            }
            h2{
                font-size:1rem;
            }
            p{
                font-size:0.8rem;
            }
        }

        .logout{
            font-size:0.8rem;
        }

        .menu-items{
            flex: 1;
            display: flex;
            flex-direction: column;
            li{
                display: grid;
                grid-template-columns: 40px auto;
                align-items: center;
                margin: .6rem 0;
                font-weight: 500;
                cursor: pointer;
                transition: all .4s ease-in-out;
                color: rgba(34, 34, 96, .6);
                padding-left: 0.5rem;
                position: relative;
                i{
                    color: rgba(34, 34, 96, 0.6);
                    font-size:0.8rem;
                    transition: all .4s ease-in-out;
                }
            }
        }

    }
`;

export default Navigation;



