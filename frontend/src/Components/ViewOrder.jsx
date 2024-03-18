import React, { useEffect, useState } from 'react'
import Header from './Header';
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
    return (
        <>
            <Header />
            <div className="container">
                <table className=' table'>
                    <caption className=' caption-top text-center'> <strong> <h2> Total Booked orders </h2>  </strong>  </caption>
                    <thead>
                        <tr>
                            <th> Sr No </th>
                            <th> Host Name </th>
                            <th> No of persons </th>
                            <th> Event Type </th>
                            <th> Decoration Type </th>
                            <th> Venue </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data && data.map((elem) => {
                                return (
                                    <>
                                        <tr key={elem.id}>
                                            <td> {elem.id} </td>
                                            <td> {elem.hostname} </td>
                                            <td> {elem.persons} </td>
                                            <td> {elem.eventtype} </td>
                                            <td> {elem.decoretype} </td>
                                            <td> {elem.venuetype} </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewOrder;