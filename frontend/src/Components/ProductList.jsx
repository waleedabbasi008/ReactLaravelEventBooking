import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
const Container = styled.div`
tbody tr td img{
     width: 250px;
     height: 250px;
     

}
`
const ProductList = () => {
    const [data, setdata] = useState([]);
    const [error, seterror] = useState(null);
    const fetchdata = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/productlist');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setdata(result);
        } catch (error) {
            seterror(error);
        }
    }
    useEffect(() => {
        fetchdata();
    }, [])
    // ************************** function for Delete operation ******************************
    const deleteItems = async (id) => {
        let result = await fetch('http://127.0.0.1:8000/api/delete/' + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.log(result);
        fetchdata();
    }
    const renderFunc = () => {
        if (setdata('')) {
            setdata('data is empty');
        }
    }
    return (
        <>
            <Header />
            <h1 className=' text-center header mb-10'> Our Products </h1>
            <Container className='container'>
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
                            data.length === 0 ? <p className=' text-center text-primary'>  <NavLink to='/add' className=' nav-link nav-item'>   No element in the list click here to add </NavLink>  </p> :
                                data.map((item) => {
                                    return (

                                        <tr key={item.id}>
                                            <td> {item.name} </td>
                                            <td> {item.price} </td>
                                            <td> {item.description} </td>
                                            <td> <img src={"http://127.0.0.1:8000/" + item.file_path} alt="sam" /> </td>
                                            <td> <button className="btn btn-outline-danger" onClick={() => deleteItems(item.id)}> Delete </button> </td>
                                            <td> <NavLink to={"update/" + item.id}> <button className="btn btn-outline-primary"> Edit </button> </NavLink>  </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
                <NavLink to='/add'>   <button className="btn btn-outline-primary"> Add  items </button> </NavLink>
            </Container>
        </>
    )
}

export default ProductList;