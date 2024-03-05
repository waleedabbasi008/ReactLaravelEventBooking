import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
const Container = styled.div`
`
const AddDecore = () => {
    const [name, setname] = useState([]);
    const [desc, setdesc] = useState([]);
    const [file, setfile] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            alert('Login first');
            navigate('/register');
        }
    }, [])
    // *************************** Add Decore Method ***********************************
    const addDecore = async () => {
        console.log(name, file, desc);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', desc);
        let result = await fetch('http://127.0.0.1:8000/api/adddecore', {
            method: 'POST',
            body: formData
        });
        alert('decore has been Added');
        setname([]);
        setfile([]);
        setdesc([]);
    }
    return (
        <>
            <Header /> <br />
            <Container className="container">
                <h1 className="body-header text-center"> Add Decorator </h1>
                <div className="col-sm-6 offset-sm-3">
                    <input type="text" className=' form-control' placeholder='Enter decorator name' onChange={(e) => setname(e.target.value)} /> <br />
                    <input type="file" className=' form-control' placeholder='File' onChange={(e) => setfile(e.target.files[0])} /> <br />
                    <input type="text" className=' form-control' placeholder='description' onChange={(e) => setdesc(e.target.value)} />  <br />
                    <button className="btn btn-primary" onClick={addDecore} > Add Decorator </button>
                </div>
            </Container>
        </>
    )
}

export default AddDecore;