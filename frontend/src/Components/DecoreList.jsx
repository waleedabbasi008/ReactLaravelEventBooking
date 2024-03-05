import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;
width: 100%;
@media screen and (max-width:1000px) {    
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
      
}
@media screen and (max-width:768px) {    
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
      
}
`
const Card = styled.div`
.card img{
    width: 100%;
    height: 250px;
    
}
position: relative;
.card-text{
    position: absolute;
    top: 0;
    left: 0;    
    width: 100%;
    height: 100%;    
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: none;
    color: #fff;

}
:hover .card-text{
    display: block;
    animation: move 0.5s ease-in-out ;
    
}
:hover img{
    filter: brightness(50%);
    
}
.card-text button{
    margin: 0.5rem;
}

@keyframes move {
    0%{
        transform: translateY(20px);
        opacity: 0;
    }100%{
        transform: translate(0);
        opacity: 1;
    }
}

`
const DecoreList = () => {
    const [data, setdata] = useState([]);
    //function to get the data
    const fetchData = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/getdecore');
        if (!response.ok) {
            throw new Error('Response not ok')
        }
        let result = await response.json();
        setdata(result);
    }
    useEffect(() => {
        fetchData();
    }, [])
    //function to delete the data
    const deletedecore = async (id) => {
        let result = await fetch('http://127.0.0.1:8000/api/deletedecore/' + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.log(result);
        fetchData();
    }
    return (
        <>
            <Header />
            <h1 className=' text-center'>  Decorator List  </h1>
            <Container className=' container'>
                {

                    data.length === 0 ? <p className=' text-center text-primary-emphasis'>  <NavLink to='/adddecore' className=' nav-link nav-item'>   No decore added yet click here to add </NavLink>  </p> :
                        data.map((elem) => {
                            return (
                                <Card key={elem.id}>
                                    <div className="card">
                                        <img src={"http://127.0.0.1:8000/" + elem.file_path} alt="" className=' card-img m-auto' />
                                        <div className=' card-text' >
                                            <h2> {elem.name} </h2>
                                            <p>{elem.description}</p>
                                            <button className="btn btn-outline-danger" onClick={() => deletedecore(elem.id)}> Delete </button>
                                            <button className="btn btn-outline-primary"><NavLink to={"/updatedecore/" + elem.id} className=' text-decoration-none'> Edit </NavLink></button>
                                            <button className="btn btn-outline-primary"><NavLink to='/adddecore' className=' text-decoration-none'> Add more </NavLink></button>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                }


            </Container>
        </>
    )
}

export default DecoreList;