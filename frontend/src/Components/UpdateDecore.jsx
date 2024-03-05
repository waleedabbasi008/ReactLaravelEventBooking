import React, { useEffect, useState } from 'react';
import Header from './Header';
import { NavLink, useParams } from 'react-router-dom';

const UpdateDecore = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [file, setfile] = useState("");
    const [desc, setdesc] = useState("");
    const { id } = useParams();
    // ************************** function to getting  the single product *********************************
    const fetchApi = async () => {
        try {
            let result = await fetch('http://127.0.0.1:8000/api/getsingledecore/' + id);
            result = await result.json();
            setdata(result);
            setname(result.name);
            setdesc(result.description);
            setfile(result.file_path);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApi();
    }, [])
    console.warn(data);
    // ************************** function to update the data *********************************
    const editEvent = async () => {
        console.log(name, file, desc);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', desc);
        let result = await fetch("http://127.0.0.1:8000/api/editdecore/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert('Data has been updated');
    }
    return (
        <>
            <Header />
            <h2 className=' text-center'> Update Decorator </h2> <br />
            <input type="text" defaultValue={data.name} onChange={(e) => setname(e.target.value)} /> <br /> <br />
            <input type="text" defaultValue={data.description} onChange={(e) => setdesc(e.target.value)} /> <br /> <br />
            <input type="file" defaultValue={data.file_path} onChange={(e) => setfile(e.target.files[0])} /> <br /> <br />
            <img src={"http://localhost:8000/" + data.file_path} alt="" className=' w-25' /> <br /><br />
            <button className=' btn btn-primary' onClick={() => editEvent(data.id)}> Update Decorator  </button>
            <button className="btn btn-outline-success"> <NavLink to='/decorelist'> Check Out the Updated list </NavLink> </button>
        </>
    )
}

export default UpdateDecore;