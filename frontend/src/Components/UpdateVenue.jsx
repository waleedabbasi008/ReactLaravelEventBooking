import React, { useEffect, useState } from 'react';
import Header from './Header';
import { NavLink, useParams } from 'react-router-dom';

const UpdateVenue = () => {
    const [data, setdata] = useState([]);
    const [location, setlocation] = useState("");
    const [file, setfile] = useState("");
    const [desc, setdesc] = useState("");
    const { id } = useParams();
    const fetchVenue = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/getsinglevenue/' + id);
        let result = await response.json();
        setdata(result);
        setlocation(result.location);
        setfile(result.file_path);
        setdesc(result.description);

    }
    useEffect(() => {
        fetchVenue();
    }, []);
    const editEvent = async () => {
        console.log(location, file, desc);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('location', location);
        formData.append('description', desc);
        let result = await fetch("http://127.0.0.1:8000/api/updatevenue/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert('Data has been updated');
    }
    return (
        <>
            <Header />
            <h2 className=' text-center'> Update Venue </h2> <br />
            <input type="text" defaultValue={data.location} onChange={(e) => setlocation(e.target.value)} /> <br /> <br />
            <input type="text" defaultValue={data.description} onChange={(e) => setdesc(e.target.value)} /> <br /> <br />
            <input type="file" defaultValue={data.file_path} onChange={(e) => setfile(e.target.files[0])} /> <br /> <br />
            <img src={"http://localhost:8000/" + data.file_path} alt="" className=' w-25' /> <br /><br />
            <button className=' btn btn-primary' onClick={() => editEvent(data.id)}> Update Venues  </button>
            <button className="btn btn-outline-success"> <NavLink to='/vanuelist'> Check Out the Updated list </NavLink> </button>
        </>
    )
}

export default UpdateVenue