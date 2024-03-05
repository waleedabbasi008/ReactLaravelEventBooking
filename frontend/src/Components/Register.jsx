import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserHeader from '../LayOuts/UserHeader';
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
    padding: 4rem 1rem;
    border: 2px solid #333;
    border-radius: 50px;    
    background: #ffffff05;
    backdrop-filter: blur(10px);
    margin-top: 3rem;
    margin-bottom: 2rem;
    transition: all 0.5s ease-in-out;
}
.form:hover{
  background: transparent;
}

.form input {
    height: 2vh;
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
function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  // **************************** the user should not go to the page login and regiteration if already logged in *********************
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/eventlist');
    }
    AOS.init({ duration: 2000 });

  }, [])
  // ****************************** function for sign Up ****************************
  const signUp = async (e) => {
    e.preventDefault();
    let detail = { name, email, password };
    // console.log(detail);
    let result = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      body: JSON.stringify(detail),
      headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json'
      }

    })
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));   //we have called user-info key inside the Header 
    navigate('/eventlist');
    setname(' ');
    setemail(' ');
    setpassword(' ');
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
            <h1 className=' text-center'> Register </h1>
            <label for="name">Enter Your Name</label> <br /> <br />
            <input type="text" className=' form-control' value={name} placeholder='enter name' onChange={(e) => { setname(e.target.value) }} required /> <br />
            <label for="Email">Email address</label> <br /> <br />
            <input type="email" className=' form-control' value={email} placeholder='email' onChange={(e) => { setemail(e.target.value) }} required />   <br />
            <label for="password">Password</label> <br /> <br />
            <input type="password" className=' form-control' value={password} placeholder='password' onChange={(e) => { setpassword(e.target.value) }} required /> <br />
            <button className="btn btn-outline-secondary" onClick={signUp}> Sign Up </button>
          </form>
        </div>

      </Container>

    </>
  )
}

export default Register;