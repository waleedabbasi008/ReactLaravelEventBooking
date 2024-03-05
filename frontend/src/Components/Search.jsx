import React from 'react'
import Header from './Header';
import styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Container = styled.div`
`
const Search = () => {
    const [data, setdata] = useState([])
    async function search(key) {
        let result = await fetch('http://127.0.0.1:8000/api/search/' + key);
        result = await result.json();
        setdata(result);
    }
    return (
        <>
            <Header />
            <h1 className=' text-center'> Search Products </h1> <br /> <br />
            <Container className="container">
                <input type="text" className="form-control w-50 m-auto" placeholder=' search product' onChange={(e) => search(e.target.value)} />
            </Container>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'> Name </th>
                        <th scope='col'> Price </th>
                        <th scope='col'> description </th>
                        <th scope='col'>  </th>
                        <th scope='col'>  </th>
                        <th scope='col'>  </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? <p className=' text-center text-primary'>  Search product to get the result here  </p> :
                            data.map((item) => {
                                return (

                                    <tr key={item.id}>
                                        <td> {item.name} </td>
                                        <td> {item.price} </td>
                                        <td> {item.description} </td>
                                        <td> <img src={"http://127.0.0.1:8000/" + item.file_path} alt="sam" className=' w-25' /> </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>




        </>
    )
}

export default Search;