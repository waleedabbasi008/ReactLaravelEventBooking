import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../LayOuts/UserHeader';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
const Container = styled.div`
background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/hero-bg.jpg');
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 90vh; */
}

.form {
    padding: 6rem 2.5rem;
    border: 2px solid #333;
    border-radius: 50px;    
    background: #ffffff05;
    backdrop-filter: blur(10px);
    margin-top: 6rem;
    margin-bottom: 3rem;
    transition: all 0.5s ease-in-out;
}
.form:hover{
  background: transparent;
}

.form input {
    height: 4vh;
    border-radius: 25px;
    border-style: groove;
    border-width: 5px;
    padding: 1.2rem;
    font-size: 1.2rem;
}

.form input[type="text"] {
    margin-bottom: 1.5rem;
}

.form input:focus {
    border-style: dashed;
    border-radius: 25px;
}

.form label {
    font-weight: 600;
    font-size: 1.5rem;
    color: rgba(255,255,255,0.5);
}

.form h1 {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: rgba(255,255,255,0.5);
}
.form button{   
    width: 50%;
    margin: auto;
    border-radius: 35px;
    margin-top: 2rem ;
}
`
const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // **************************** the user should not go to the page login and regiteration if already logged in *********************
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/eventlist');
    }

  }, [])
  const login = async (e) => {

    e.preventDefault();
    let detail = { email, password };
    let result = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify(detail)
    })
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result))
    navigate('/eventlist');
  }
  return (
    <>
      <Container>
        {
          localStorage.getItem('user-info') ?
            <Header /> && <UserHeader /> :
            <UserHeader />


        }
        <div className="container" data-aos="fade-down">
          <form class=" form form-group">
            <h1> Login </h1>
            <label for="Email">Email address</label> <br /> <br />
            <input onChange={(e) => { setemail(e.target.value) }} type="text" placeholder=" enter email" /> <br /><br />
            <label for="Password">Password</label> <br /> <br />
            <input type="password" placeholder=" enter password" onChange={(e) => { setpassword(e.target.value) }} /> <br /><br />
            <button type="submit" onClick={login} className=' btn btn-outline-secondary m-auto'>Submit</button>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Login