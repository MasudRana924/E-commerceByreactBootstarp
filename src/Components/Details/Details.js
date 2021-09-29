import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {ShirtId}=useParams()
    const[Shirt,setShirt]=useState([])
    useEffect(()=>{
        const url=`./products.JSON/${ShirtId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setShirt(data))
    },[])
    return (
        <div className="container-fluid">
            <img src={Shirt.img} alt="" className="img-fluid" />
            <h1>Details is Comming Soon!</h1>

        </div>
    );
};

export default Details;