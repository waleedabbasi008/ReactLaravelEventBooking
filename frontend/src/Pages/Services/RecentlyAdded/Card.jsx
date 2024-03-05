import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
`
const Card = ({ items }) => {
    const [data, setdata] = useState('');
    useEffect(() => {
        items();
    }, [])
    console.log(items());    
    return (
        <>
            <Container className=' container'>
            </Container>
        </>
    )
}

export default Card;