import React, {useState} from "react";
import axios from "axios";
function NewDestination(){
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")
    const[description, setDescription] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9292/destinations', {
            name:name,
            cost:cost,
            description:description
        })
        .then((response) => {
            console.log(response)
        }, (error) => {
            console.log(error)
        })
    };

    return (
        <div>
            <form className="new-dest-form"  onSubmit={handleSubmit}>
                <input placeholder="name" type="text"
                value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="cost" type="text" 
                value={cost} onChange={(e) => setCost(e.target.value)}/>
                <textarea placeholder="write a description ..." rows={15} type="text"
                value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="add destination" className="btn-inpt"/>
            </form>
        </div>
    )
} 

export default NewDestination;