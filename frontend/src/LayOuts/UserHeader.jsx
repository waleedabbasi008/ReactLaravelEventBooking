import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from '../assets/logo.png';
import styled from 'styled-components';
const Nav = styled.div`
width: 100%;
background: transparent;
display: flex;
`
const Container = styled.div`
   display: flex;
   justify-content: space-between;
    align-items: center;
    min-height: 10vh;        
    ul {
    display: flex;
}
ul li, ul select {
    padding-left: 2rem;
    list-style: none;
}
ul li a {
    text-decoration: none;
    color: #B5C0D0;
    font-size: 1.2rem;
    padding: 0.2em;
    position: relative;
}
ul li a::after{
    content: "";
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #3559E0;
    box-sizing: border-box;
    position: absolute;
    transition: all 0.3s ease-in-out;
    top: 0;
    left: 0;    
    transform-origin: center;

}
ul li a:hover::after{
    transform: scaleX(0);
}
.active {
 font-weight: 700;
 font-size: 1.3rem;
 border-bottom: none;
  /* Add any other styles for the active class */
}

.nav-toggle{
display: none;
}
.logo img{
    margin-left: -2rem;
    height: 60px;
    width: 60px;
    aspect-ratio: 4/4;
    // mix-blend-mode: color-burn;
    background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), #FDF7E4;
    box-shadow: 5px 5px 15px #F3F8FF;
    border-radius: 15px ;
    animation: LogoAnimate 2s infinite ease-in-out alternate-reverse;
  }
  @keyframes LogoAnimate {
    0%{
        box-shadow: 0px 0px 15px #F3F8FF;
    }
    25%{
        box-shadow: 5px 0px 15px #F3F8FF;
    }
    50%{
        box-shadow: 0px 5px 15px #F3F8FF ;
    }
    75%{
        box-shadow: 5px 0px 15px #F3F8FF;
    }

    100%{
        
        box-shadow: 0px 0px 15px #F3F8FF;
    }
    
  }
@media screen and (max-width: 1200px){
  
  ul li{
    padding-left: 1rem;

  } 
  ul li a{
    font-size: 1rem;
  }

}
@media screen and (max-width: 1000px) {
    .container {
        z-index: 0;        
        justify-content: space-between;
        border: 2px solid red;
    }

    .logo {
        margin-left: 10%;
    }
    .logo h1{
        color: #FDF7E4;
    }
    ul {
        flex-direction: column;
        /* margin-top: 15px; */
        text-align: center;
        z-index: 1;
        position: absolute;
        top: 100%;
        left: 0%;
        transform: translate(-100%);
        transition: all 0.4s;
        background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75));
        display: none;
        width: 100%;        
    }

    ul li {
        margin: 30px 0 30px 0;
    }   
    .nav-toggle{
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .nav-toggle .bar{
        position: relative;
        width: 32px;
        height: 2px;
        background: #fff;
    }
    .nav-toggle .bar::before, .nav-toggle .bar::after{
        content: "";
        position: absolute;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        transition: all 0.4s ease-in-out;

    } 
    .nav-toggle .bar::before{
        width: 25px;
        transform: translateY(-8px);
        right: 0;
    }
    .nav-toggle .bar::after{
        width: 32px;
        transform: translateY(8px);
        right: 0;
    }
    .nav-toggle.open .bar{
        transform: translateX(-40px);
        background: transparent;

    }
    .nav-toggle.open .bar::before{
        width: 32px;
        transform: rotate(45deg) translate(26px, -26px);
    }
    .nav-toggle.open .bar::after{        
        transform: rotate(-45deg) translate(26px, 26px);
    }
    ul.open{
    transform: translate(0);
    display: block;
    animation: animate 0.5s ease-in-out alternate;    
    }
    @keyframes animate {
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(0);
        }
        
    }
    ul li a::after{
        border-bottom: none;
    }
    .active{
        font-size: 1.5rem;
    }

}

@media screen and (max-width: 600px) {
    ul {
        left: 0%;
        text-align: center;
        padding: 0;
    }

}

`
const UserHeader = () => {
    const [activeItem, setactiveItem] = useState('home')
    const [isopen, setisopen] = useState(false);
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'))
    const logOut = () => {
        localStorage.clear();
        alert('you logged out');
        navigate('/register');


    }
    return (
        <>
            <Nav className=' navbar '>
                <Container className=' container' >
                    <div className="logo d-flex justify-content-between">
                        <img src={logoImg} alt="" />
                    </div>
                    <ul className={`${isopen && 'open'}`}>
                        <li className={activeItem === 'home' ? 'active' : ''}> <NavLink to="/"> Home </NavLink> </li>
                        <li className={activeItem === 'about' ? 'active' : ''}> <NavLink to="/about"> About </NavLink> </li>
                        <li className={activeItem === 'services' ? 'active' : ''}> <NavLink to="/services"> Services </NavLink> </li>
                        <li className={activeItem === 'contact' ? 'active' : ''}> <NavLink to="/contact"> Contact </NavLink> </li>
                        <li className={activeItem === 'login' ? 'active' : ''}> <NavLink to='/login'> Login </NavLink> </li>
                        <li className={activeItem === 'register' ? 'active' : ''}> <NavLink to='/register'> Register </NavLink> </li>
                        <li> <NavLink to='/dashboard'> Dashboard </NavLink> </li>

                    </ul>

                    <div className={`nav-toggle ${isopen && 'open'}`} onClick={() => setisopen(!isopen)}>
                        <div className="bar">  </div>
                    </div>
                    <div className="book" style={{ marginLeft: "3rem" }}>
                        <NavLink to='/bookorder'> <button className="btn btn-primary"> Book Now </button> </NavLink>
                    </div>
                    <div className="user-data">
                        {
                            localStorage.getItem('user-info') ?
                                <Nav>
                                    <NavDropdown title={user && user.name} id="basic-nav-dropdown" style={{ color: '#B5C0D0' }}>
                                        <NavDropdown.Item href="#action/3.1">
                                            <button className="btn" onClick={logOut}> Logout  </button>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav> :
                                null
                        }
                    </div>
                </Container>

            </Nav>
        </>
    )
}

export default UserHeader;