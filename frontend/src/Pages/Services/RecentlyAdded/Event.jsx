import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-top: 5rem;
gap: 3rem;
.card {
    position: relative;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    padding: 20px 40px;
    background: #1b1b1bb7;
    cursor: pointer;
    margin: auto;
    margin-top: 5rem;
}
.card:hover{
    height: 400px;
}

.imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-80px);
    z-index: 99;
}

.imgBox img {
    width: 100%;
    height: 250px;
    aspect-ratio: 2/3;
    border-radius: 10px;
}
.content{
    padding: 10px 20px;
    padding-top: 5rem;
    text-align: center;
    transform: translateY(-100px);
    opacity: 0;
    transition: 0.3s;
    color: #FFECD6;
}

.card:hover .content{
    opacity: 1;
}
.card h2{
    margin: auto;
    color: #FFECD6;
    padding-top: -10px;
}
.card:hover h2{
    opacity: 0;
    display: none;
}
.content h2{
    color: #7f9ead;
}
@media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    .card{
        width: 400px;
        height: 300px;                
    }
    
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    .card{
        width: 350px;
        height: 300px;                
    }
    

}
@media screen and (max-width: 600px) {
    grid-template-columns: 1fr;    
    .card{
        width: 250px;
        height: 300px;          
    }
    .imgBox {transform: translateY(-60px)};

}
`
const Event = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/getevent');
        if (!response.ok) {
            throw new Error('Response not ok')
        }
        let result = await response.json();
        setdata(result);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <>
            <Container className=' container'>
                {
                    data.map((elem) => {
                        return (
                            <div class="card" key={elem.id}>
                                <div class="imgBox">
                                    <img src={"http://127.0.0.1:8000/" + elem.file_path} alt="" />
                                </div>
                                <h2> {elem.name} Event </h2>
                                <div class="content">
                                    <h3> {elem.name} </h3>
                                    <p> {elem.description} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Event