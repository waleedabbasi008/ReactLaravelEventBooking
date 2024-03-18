import React, { useState } from 'react'
const AddOrder = () => {
    const [host, sethost] = useState([]);
    const [persons, setpersons] = useState([]);
    const [event, setevent] = useState([]);
    const [decore, setdecore] = useState([]);
    const [venue, setvenue] = useState([]);

    const bookOrder = async () => {
        const formData = new FormData();
        formData.append('hostname', host);
        formData.append('persons', persons);
        formData.append('eventtype', event);
        formData.append('decoretype', decore);
        formData.append('venuetype', venue);
        let result = await fetch('http://127.0.0.1:8000/api/addorder', {
            method: 'POST',
            body: formData
        });
        alert(host, "thanks for booking the order 😀");

    }

    return (
        <>
         <h2 className=' text-center header'> Book your order right now </h2>
            <div className="container">
                <form className=' form-control' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="host">enter your name</label> <br /><br />
                    <input type="text" className=' form-control' onChange={(e) => sethost(e.target.value)} /> <br /><br />
                    <label htmlFor="persons">enter the number of persons</label> <br /><br />
                    <input type="number" className=' form-control' onChange={(e) => setpersons(e.target.value)} /> <br /><br />
                    <label htmlFor="event">select the type of event you want to book</label> <br /><br />
                    <select onChange={(e) => setevent(e.target.value)} className=' dropdown'>
                        <option> Wedding </option>
                        <option> Birthday </option>
                        <option> mehndi </option>
                        <option> walima </option>
                        <option> Nikkah </option>
                        <option> engaggement </option>
                        <option> anniversary </option>ٖ
                        <option> others </option>ٖ
                    </select> <br /><br />
                    <label htmlFor="decore">select the type of decoration</label> <br /><br />
                    <select onChange={(e) => setdecore(e.target.value)}>
                        <option> outdoor </option>
                        <option> indoor </option>
                        <option> fresh flowers </option>
                        <option> other </option>

                    </select> <br /><br />
                    <label htmlFor="venue">select your venue</label> <br /><br />
                    <select onChange={(e) => setvenue(e.target.value)}>
                        <option> Mariano </option>
                        <option> Himaliya </option>
                        <option> Margalla </option>
                        <option> Monal </option>
                        <option> Others </option>
                    </select> <br /> <br />
                    <button className=' btn btn-primary' onClick={bookOrder}> Book </button>
                </form>
            </div>
        </>
    )
}

export default AddOrder;