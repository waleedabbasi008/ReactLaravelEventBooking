import React, { useState } from 'react';
import Header from './Header';
import UserHeader from '../LayOuts/UserHeader';
import styled from 'styled-components';
const Container = styled.div`
border: 2px solid green;
background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/Book.jpg');
background-position: top;
background-size: cover;
backdrop-filter: blur(10px);
h2{
    color: #EEEEEE;
}
.container{
    
}
.container .form{
    background: #ffffff2c;
    border-radius: 25px;
    width: 50%;
    margin: auto;
    padding: 2rem;
    input{
        background: #31363F;
        color: #EEEEEE;
        height: 5vh;
    border-radius: 25px;
    border-style: groove;
    border-width: 5px;
    }
    label{
        color: #EEEEEE;
    }
    select{
        height: 5vh;
    border-radius: 25px;
    border-style: groove;
    border-width: 5px;
    background: #31363F;
        color: #EEEEEE;
    }
    button{
        width: 50%;
    margin: auto;
    border-radius: 35px;
    margin-top: 2rem ;
    color: #EEEEEE;
    }
}
`

const AddOrder = () => {
    const [host, sethost] = useState([]);
    const [persons, setpersons] = useState([]);
    const [event, setevent] = useState([]);
    const [decore, setdecore] = useState([]);
    const [venue, setvenue] = useState([]);
    //  **************************** Method for saving data in to the database **********************************
    const bookOrder = async () => {
        const formData = new FormData();
        formData.append('hostname', host);
        formData.append('persons', persons);
        formData.append('eventtype', event);
        formData.append('decoretype', decore);
        formData.append('venuetype', venue);
        let result = await fetch('http://127.0.0.1:8000/api/addorder', {
            method: 'POST',
            body: formData
        });
        alert(host, "thanks for booking the order 😀");

    }
    return (
        <>
            <Container>
                {
                    localStorage.getItem('user-info') ?
                        <Header /> && <UserHeader /> :
                        <UserHeader />
                }
                <h2 className=' text-center header'> Book your order right now </h2>
                <div className="container">
                    <form className='form'>
                        <label htmlFor="host" >enter your name</label> <br /><br />
                        <input type="text" className=' form-control input-group' onChange={(e) => sethost(e.target.value)} /> <br /><br />
                        <label htmlFor="persons">enter the number of persons</label> <br /><br />
                        <input type="number" className=' form-control' onChange={(e) => setpersons(e.target.value)} /> <br /><br />
                        <label htmlFor="event">select the type of event you want to book</label> <br /><br />
                        <select onChange={(e) => setevent(e.target.value)} className=' dropdown'>
                            <option> Wedding </option>
                            <option> Birthday </option>
                            <option> mehndi </option>
                            <option> walima </option>
                            <option> Nikkah </option>
                            <option> engaggement </option>
                            <option> anniversary </option>ٖ
                            <option> others </option>ٖ
                        </select> <br /><br />
                        <label htmlFor="decore">select the type of decoration</label> <br /><br />
                        <select onChange={(e) => setdecore(e.target.value)}>
                            <option> outdoor </option>
                            <option> indoor </option>
                            <option> fresh flowers </option>
                            <option> other </option>

                        </select> <br /><br />
                        <label htmlFor="venue">select your venue</label> <br /><br />
                        <select onChange={(e) => setvenue(e.target.value)}>
                            <option> Mariano </option>
                            <option> Himaliya </option>
                            <option> Margalla </option>
                            <option> Monal </option>
                            <option> Others </option>
                        </select> <br /> <br />
                        <button className='btn btn-outline-secondary' onClick={bookOrder}> Book </button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default AddOrder;