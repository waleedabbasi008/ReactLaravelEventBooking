import React, { useState } from 'react'
import ServicesNav from './ServicesNav';
import data from './ServicesApi';
import Card from './Card';
const uniquelist = [...new Set(data.map((currele) => { //we have created the unique list here
    return currele.name;
})), "All"]
console.log(uniquelist);
const ServicesDetail = () => {
    const [items, setitems] = useState(data);
    const [list, setlist] = useState(uniquelist);  //we have passed unique list inside the list
    console.log(items);
    const filterItems = (category) => {
        if (category === "All") {
            setitems(data);
            return;

        }
        const updatedList = data.filter((currele) => {
            return currele.name === category;
        })
        setitems(updatedList);
    }
    return (
        <>
            <ServicesNav filterItems={filterItems} list={list} />
            <Card ServiceData={items} />
        </>
    )
}

export default ServicesDetail;