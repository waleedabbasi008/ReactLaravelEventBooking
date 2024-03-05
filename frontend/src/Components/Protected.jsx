import React from 'react'
import { useNavigate } from 'react-router-dom';
const Protected = (props) => {
    const navigate = useNavigate();
    let Cmp = props.Cmp;
    if (!localStorage.getItem('user-info')) {
        navigate('/register');

    }
    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected;