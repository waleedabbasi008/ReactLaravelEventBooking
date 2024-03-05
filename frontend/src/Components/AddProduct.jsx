import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setname] = useState("");
  const [file, setfile] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      alert('Login first');
      navigate('/register');
    }
  }, [])
  const addProduct = async () => {
    console.log(name, file, price, desc);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', desc);
    let result = await fetch('http://127.0.0.1:8000/api/addproduct', {
      method: 'POST',
      body: formData
    });
    alert('Product has been Added');
    setname(" ");
    setfile(" ");
    setprice(" ");
    setdesc(" ");
  }
  return (
    <>
      <Header /> <br />
      <h1 className="body-header text-center"> Add products </h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" className=' form-control' placeholder='name' onChange={(e) => setname(e.target.value)} /> <br />
        <input type="file" className=' form-control' placeholder='File' onChange={(e) => setfile(e.target.files[0])} /> <br />
        <input type="text" className=' form-control' placeholder='price' onChange={(e) => setprice(e.target.value)} /> <br />
        <input type="text" className=' form-control' placeholder='description' onChange={(e) => setdesc(e.target.value)} />  <br />
        <button className="btn btn-primary" onClick={addProduct} > Add products </button>

      </div>


    </>
  )
}

export default AddProduct;