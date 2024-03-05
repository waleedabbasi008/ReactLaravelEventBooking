import React from 'react'
import Header from './Header';
import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
const SearchDecore = () => {
    const [data, setdata] = useState([])
    async function search(key) {
        let result = await fetch('http://127.0.0.1:8000/api/searchdecore/' + key);
        result = await result.json();
        setdata(result);
    }
    return (
        <>
            <Header />
            <h1 className=' text-center'> Search Decorator </h1> <br /> <br />
            <input type="text" className="form-control w-50 m-auto" placeholder=' search Decorator' onChange={(e) => search(e.target.value)} />
            <Container className="container mt-5">


                {

                    data.length === 0 ? <p className=' text-center text-primary-emphasis'>  No Decorator found  </p> :
                        data.map((elem) => {
                            return (
                                <Card key={elem.id}>
                                    <div className="card">
                                        <img src={"http://127.0.0.1:8000/" + elem.file_path} alt="" className=' card-img m-auto' />
                                        <div className=' card-text' >
                                            <h2> {elem.name} </h2>
                                            <p>{elem.description}</p>
                                            {/* <button className="btn btn-outline-danger" onClick={() => deleteItems(elem.id)}> Delete </button>
                                        <button className="btn btn-outline-primary"><NavLink to={"/updateevent/" + elem.id} className=' text-decoration-none'> Edit </NavLink></button>
                                        <button className="btn btn-outline-primary"><NavLink to='/addevent' className=' text-decoration-none'> Add more </NavLink></button> */}
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
export default SearchDecore;