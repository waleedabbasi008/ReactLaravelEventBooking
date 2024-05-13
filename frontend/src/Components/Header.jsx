import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserHeader from '../LayOuts/UserHeader';
import './Header.css';
const NavItems = styled.div`
.nav-items .dropDown{    
    margin-left: 2rem;
    color: red;
}

`
const Header = () => {
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const logOut = () => {
        localStorage.clear();
        alert('you logged out');
        navigate('/register');


    }
    {

     }
    return (
        <>
            <Navbar expand="lg" className="text-light navbar">
                <Container>
                    <Navbar.Brand href="/dashboard"> {
                        localStorage.getItem('user-info') ? <h2> Dashboard </h2> : null
                    } </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className=' text-light' /> 

                     
                    <Navbar.Collapse id="basic-navbar-nav" className=' text-light'>

                        <Nav className="me-auto text-light">
                            {/* **************** if user is logged in the don't show the login pages ********************* */}
                            {
                                localStorage.getItem('user-info') ?      //user-info key passed inside registeration page
                                   <>
                                        <NavItems>
                                            <Nav style={{ marginLeft: '5rem' }} className=' nav-items text-gray-100'>
                                                <Nav.Link>
                                                    <NavLink to='/' className=' text-decoration-none font-mono text-slate-200 font-bold' style={{ paddingLeft: '2rem' }}> Home </NavLink>
                                                </Nav.Link>
                                                <NavDropdown title='Events' id="nav-dropdown" className=' dropDown text-light basic-nav-dropdown bg-slate-500 hover:bg-slate-350 rounded-2xl transition-all hover:font-bold'>

                                                    <NavDropdown.Item href="#action/3.1">

                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/eventlist' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Events List </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/addevent' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Add Event </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/searchevent' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Search Event </NavLink>
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown title='Venue' id="basic-nav-dropdown" className=' dropDown text-light basic-nav-dropdown bg-slate-500 hover:bg-slate-350 rounded-2xl transition-all hover:font-bold'>
                                                    <NavDropdown.Item href="#action/3.1" className=' dropDownItem' style={{color: '#fffff'}}>
                                                        <NavLink to='/venuelist' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Venue List </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/addvenue' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Add Venue </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/searchvenue' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Search Venue </NavLink>
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown title='Decoration' className=' dropDown text-light basic-nav-dropdown bg-slate-500 hover:bg-slate-350 rounded-2xl transition-all hover:font-bold'>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/decorelist' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Decorator List </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/adddecore' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Add Decorator </NavLink>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">
                                                        <NavLink to='/searchdecore' className='nav-link text-decoration-none pl-5' style={{ paddingLeft: '2rem' }}> Search Decorator </NavLink>
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                                <Nav.Link>
                                                    <NavLink to='/vieworder' className=' text-decoration-none text-slate-200 font-bold' style={{ paddingLeft: '2rem' }}> Booked Orders </NavLink>
                                                </Nav.Link>
                                            </Nav>
                                        </NavItems>
                                        {/* <NavLink to='/login' className='nav-link text-decoration-none p-4 text-light'> Login </NavLink> */}
                                    </>
                                    :
                                    <>
                                        <div className="user-header">
                                            <UserHeader />
                                        </div>
                                    </>
                            }

                        </Nav>


                    </Navbar.Collapse>
                    {
                        localStorage.getItem('user-info') ?
                            <Nav>
                                <NavDropdown title={user && user.name} id="basic-nav-dropdown" className='  dropDown text-light basic-nav-dropdown bg-slate-500 hover:bg-slate-350 rounded-2xl transition-all hover:font-bold'>
                                    <NavDropdown.Item href="#action/3.1">
                                        <button className="btn" onClick={logOut}> Logout  </button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav> :
                            null
                    }
                </Container>
            </Navbar>
        </>
    )
}

export default Header;