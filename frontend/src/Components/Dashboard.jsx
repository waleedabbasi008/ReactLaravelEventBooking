import React, { useEffect, useState } from 'react';
import Header from './Header';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const DashHome = styled.div`
height: 100vh;
background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('images/outdoor-decor7.jpg');
background-position: center;
background-size: cover;
backdrop-filter: blur(15px);

`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3rem;
place-items: center;
.card{
    padding: 1.5rem;
    text-align: center;
    background: #33333356;
    color: #ECE8DD;    
}
.card a{
    text-decoration: none;
    font-weight: 600;
    color: #ECE8DD;    
}
@media screen and (max-width: 768px) {    
    grid-template-columns: 1fr;    
}

`
const SubTotal = styled.div`
position: relative;
margin-top: 0rem;
.card{
    position: absolute;
    top: 0%;
    left: 80%;
    padding: 1.5rem;
    text-align: center;
    background: #33333356;
    color: #ECE8DD;
}
@media screen and (max-width: 768px) {    
    .card{
        left: 60%;
        padding: 2rem;
    }    
}

`
const Dashboard = () => {
    const [countEvent, setcountEvent] = useState([]);
    const [countVenue, setcountVenue] = useState([]);
    const [countDecorator, setcountDecorator] = useState([]);
    const [countOrders, setcountOrders] = useState([]);
    const [total, settotal] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            alert('Login first to access dashboard');
            navigate('/register');
        }
    }, []);
    // ******************** count Event Method *************************************
    const event = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/countevent');
        if (!response.ok) {
            throw new Error('Response not ok')
        }
        let result = await response.json();
        setcountEvent(result);

    }
    // ***************************************** count Decoration method **************************
    const decore = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/countdecorator');
        if (!response.ok) {
            throw new Error('response not ok')
        }
        let result = await response.json();
        setcountDecorator(result);
    }
    // ***************************************** count Venue method **************************
    const venue = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/countvenue');
        if (!response.ok) {
            throw new Error('response not ok')
        }
        let result = await response.json();
        setcountVenue(result);
    }
    // ***************************************** count Orders method **************************
    const orders = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/countorders');
        if (!response.ok) {
            throw new Error('response not ok')
        }
        let result = await response.json();
        setcountOrders(result);
    }
    // ***************************************** count Sub total **************************
    const subtotal = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/subtotal');
        if (!response.ok) {
            throw new Error('response not ok')
        }
        let result = await response.json();
        settotal(result);
    }
    useEffect(() => {
        event();
        decore();
        venue();
        subtotal();
        orders();
    }, [])

    return (

        <DashHome className='dashboard'>
            <Header  />  <br /> <br />
            <Container className=' container'>
                <div className="eventCard card">
                    <h3> Total Events added </h3>
                    <p> {countEvent} </p>
                    <button className="btn btn-outline-success">
                        <NavLink to='/eventlist'> Check events </NavLink>
                    </button>
                </div>
                <div className="decoreCard card">
                    <h3> Total Decorators added </h3>
                    <p> {countDecorator} </p>
                    <button className="btn btn-outline-success">
                        <NavLink to='/decorelist'> Check Decore </NavLink>
                    </button>
                </div>
                <div className="venueCard card">
                    <h3> Total Venues added </h3>
                    <p> {countVenue} </p>
                    <button className="btn btn-outline-success">
                        <NavLink to='/venuelist'> Check Venue </NavLink>
                    </button>
                </div>
                <div className="ordersCard card">
                    <h3> Total Orders booked </h3>
                    <p> {countOrders} </p>
                    <button className="btn btn-outline-success">
                        <NavLink to='/vieworder'> Check orders </NavLink>
                    </button>
                </div>
            </Container>
            <SubTotal className='container'>
                <div className="card">
                    <h3> Sub Total </h3>
                    <p> {total} </p>
                </div>
            </SubTotal>


        </DashHome>
    )
}

export default Dashboard;