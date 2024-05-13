import React, { useState } from 'react'
import styled from 'styled-components';
import data from './ServicesApi';
const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-top: 5rem;
gap: 3rem;
.card {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    padding: 20px 40px;
    /* background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), #333; */
    /* background: #ffffff05; */
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
    height: 200px;        
    border-radius: 10px;
}
.content{
    padding: 10px 20px;
    padding-top: 5rem;
    text-align: center;
    transform: translateY(-100px);
    opacity: 0;
    transition: 0.3s;
    color: #B5C0D0;
}

.card:hover .content{
    opacity: 1;
}
.card h2{
    margin: auto;
    color: #B5C0D0;
    padding-top: -10px;
}
.card:hover h2{
    opacity: 0;
    display: none;
}
.content h2{
    color: #B5C0D0;
}
@media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    .card{
        width: 300px;
        height: 300px;                
    }
    
}
@media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    .card{
        width: 250px;
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
        width: 300px;
        height: 300px;                
    }
    .imgBox {transform: translateY(-100px)};

}
`

const Card = ({ServiceData}) => {
    const [items, setitems] = useState(ServiceData);
    return (
        <>
            <Container className=' container'>
                {
                    ServiceData.map((elem) => {
                        const { id, name, type, image, description } = elem;
                        return (
                            <>
                                <div class="card" key={id}>
                                    <div class="imgBox">
                                        <img src={image} alt="" />
                                    </div>
                                    <h2> {name} </h2>
                                    <div class="content">
                                        <h3> {type} </h3>
                                        <p> {description} </p>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Card;