import React, { useEffect, useState } from 'react'
import Header from './Header';
import styled from 'styled-components';
const Booked = styled.div`
background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('images/addevent.jpg');
background-position: center;
background-size: cover;
backdrop-filter: blur(15px);
height: max-content;
.container table{
    background-color: rgba(66, 57, 57, 0.7);
      backdrop-filter: blur(5px);
      width: 100%;
      border-collapse: collapse;
}
th, td {
  white-space: nowrap;
}

@media (max-width: 768px) {
  th, td {
    display: block;
  }
  th {
    text-align: left;
  }
}

`
const ViewOrder = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/getorder');
        if (!response.ok) {
            throw new Error('Response not ok')
        }
        let result = await response.json();
        setdata(result);
    }
    useEffect(() => {
        fetchData();
    }, [])
    // *********************************** for accessing the email of the user ***************************************
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    return (
        <>
            <Booked>


                <Header />
                <div className="container overflow-x-auto">
                    <table className='w-full rounded-lg text px-10 table-auto'>
                        <caption className=' caption-top text-center text-gray-100 pb-20'> <strong> <h2> Total Booked orders </h2>  </strong>  </caption>
                        <thead>
                            <tr>
                                <th className=' px-4 py-2 text-gray-100'> Sr No </th>
                                <th className=' px-4 py-2 text-gray-100'> Host Name </th>
                                <th className=' px-4 py-2 text-gray-100'> No of persons </th>
                                <th className=' px-4 py-2 text-gray-100'> Event Type </th>
                                <th className=' px-4 py-2 text-gray-100'> Decoration Type </th>
                                <th className=' px-4 py-2 text-gray-100'> Venue </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data && data.map((elem) => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.id} </td>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.hostname} </td>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.persons} </td>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.eventtype} </td>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.decoretype} </td>
                                                <td className=' px-4 py-2 border border-spacing-1 border-l-neutral-600 text-gray-400'> {elem.venuetype} </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <p className=' text-light'> Order taken by: {user && user.name} </p>
                </div>
            </Booked>
        </>
    )
}

export default ViewOrder;