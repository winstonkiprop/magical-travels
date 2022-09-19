import React, { useEffect, useState } from "react";
import axios from "axios";
import ChangeRating from "./rating";

function Destination(){
    const[destinations, setDestination] = useState([])
    const[show, setForm] = useState("")
    function handleClick(){
        setForm(true);
    }
    useEffect(() => {
        getAllDestinations();

    }, [])
    const getAllDestinations = () =>{
        axios 
        .get('https://kutembea-kenya.herokuapp.com/destinations')
        .then((response) =>{
            console.log(response);
            setDestination(response.data);
        }) 
        .catch((error) =>{
            console.log(error);
        })
    }
    return(
        <div className="travels">
            <div className="travels-container">
                {destinations.map((destination) => (
                    <div className="travels-det" key={destination.id}>
                        <h1>{destination.name}</h1>
                        <h3>Kshs.{destination.cost}</h3>
                        <p>{destination.description}</p>
                        </div>
                ))} 
                 <button className="add-rating" onClick={handleClick}>Rating</button>
                        {show ? <ChangeRating/> : null}
            </div>
            
        </div>
    )
}

export default Destination;