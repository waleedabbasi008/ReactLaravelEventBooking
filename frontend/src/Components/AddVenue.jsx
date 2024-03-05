import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Container = styled.div`
`

const AddVenue = () => {
    const [location, setlocation] = useState([]);
    const [file, setfile] = useState([]);
    const [desc, setdesc] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            alert('Login first');
            navigate('/register');
        }
    }, [])
    const addevent = async () => {
        console.log(location, file, desc);
        const formData = new FormData();     //form data instance
        formData.append('file', file);
        formData.append('location', location);
        formData.append('description', desc);
        let result = await fetch('http://127.0.0.1:8000/api/addvenue', {
            method: 'POST',
            body: formData
        });
        alert('Event has been Added');
        setlocation([]);
        setfile([]);
        setdesc([]);
    }
    return (
        <>
            <Header /> <br />
            <Container className="container">
                <h1 className="body-header text-center"> Add Venue </h1>
                <div className="col-sm-6 offset-sm-3">
                    <input type="text" className=' form-control' placeholder='name' onChange={(e) => setlocation(e.target.value)} /> <br />
                    <input type="file" className=' form-control' placeholder='File' onChange={(e) => setfile(e.target.files[0])} /> <br />
                    <input type="text" className=' form-control' placeholder='description' onChange={(e) => setdesc(e.target.value)} />  <br />
                    <button className="btn btn-primary" onClick={addevent} > Add Event </button>
                </div>
            </Container>
        </>
    )
}

export default AddVenue;