import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 3rem;
button{
    color: #B5C0D0;
    border: 2px solid #ffffff03;
    /* background: #3559E0; */
    background: #ffffff05;
    backdrop-filter: blur(10px);
    border-radius: 25px;
    margin-left: 3rem;
    transition: all 0.5s ease-in-out;
    padding: 0.5rem;
    margin-top: 3rem;
}
button:hover{
    background: transparent;
}
@media screen and (max-width: 768px) {
    flex-wrap: wrap;
    
}
`
const ServicesNav = ({ filterItems, list }) => {
    return (
        <>
            <Container className=' container'>
                {
                    list.map((elem) => {
                        return (
                            <>

                                <button className=' btn' onClick={() => filterItems(elem)} > {elem} </button>
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default ServicesNav;