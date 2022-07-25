import React, { useEffect, useState } from "react";
import axios from "axios";

function Destination(){
    const[destinations, setDestination] = useState([])
    useEffect(() => {
        getAllDestinations();

    }, [])
    const getAllDestinations = () =>{
        axios 
        .get('')
        .then((response) =>{
            console.log(response);
            setDestination(response.data);
        }) 
        .catch((error) =>{
            console.log(err);
        })
    }
    return(
        <div className="travels">
            <div className="">
                {destinations.map((destination) => (
                    <div className="travels-det">
                        <h1>{destination.name}</h1>
                        <h3>{destination.cost}</h3>
                        <p>{destination.description}</p>
                        <div>
                ))}
            </div>
        </div>
    )
}