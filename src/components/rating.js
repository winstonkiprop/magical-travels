import React, { useState } from "react";
import axios from 'axios';
function ChangeRating(){
    const [id, setId] = useState("")
    const [rating, setRating] = useState("")
    const handleSubmit =(e) => {
        e.preventDefault();
    axios.patch(`http://localhost:9292/reviews/${id}`,{
        id:id,
    rating:rating
    })
    .then((response) => {
        console.log(response)
      }, (error) => {
        console.log(error);
      })
    }
    return(
        <div>
    <form className="del-rating-form" onSubmit={handleSubmit}>
      <input placeholder="id" type="text"
      value={id}
      onChange={(e) => setId(e.target.value)}/>
       <input placeholder="rating" type="text"
      value={rating}
      onChange={(e) => setRating(e.target.value)}/>
       <input type="submit" value="new rating" className="btn-add-rating"/>
    </form>
        </div>
    )
}
export default ChangeRating;