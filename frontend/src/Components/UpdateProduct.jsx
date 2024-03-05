import React, { useEffect, useState } from 'react'
import Header from './Header';
import { NavLink, useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [file, setfile] = useState("");
    const [price, setprice] = useState("");
    const [desc, setdesc] = useState("");
    const { id } = useParams();
    // ************************** function to getting  the single product *********************************
    const fetchApi = async () => {
        try {
            let result = await fetch('http://127.0.0.1:8000/api/product/' + id);
            result = await result.json();
            setdata(result);
            setname(result.name);
            setprice(result.price);
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
    const editProduct = async () => {
        console.log(name, file, price, desc);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', desc);
        let result = await fetch("http://127.0.0.1:8000/api/updateproduct/"+id+"?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert('Data has been updated');
    }

    return (
        <>
            <Header />
            <h1> Update Product </h1>
            <input type="text" defaultValue={data.name} onChange={(e) => setname(e.target.value)} /> <br /> <br />
            <input type="text" defaultValue={data.price} onChange={(e) => setprice(e.target.value)} /> <br /> <br />
            <input type="text" defaultValue={data.description} onChange={(e) => setdesc(e.target.value)} /> <br /> <br />
            <input type="file" defaultValue={data.file_path} onChange={(e) => setfile(e.target.files[0])} /> <br /> <br />
            <img src={"http://localhost:8000/" + data.file_path} alt="" className=' w-25' /> <br /><br />
            <button className=' btn btn-primary' onClick={() => editProduct(data.id)}> Update Product  </button>
            <button className="btn btn-outline-success"> <NavLink to='/'> Check Out the Updated list </NavLink> </button>
        </>
    )
}

export default UpdateProduct;