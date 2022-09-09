import React, { useState } from "react";
import axios from 'axios';
function DeleteReview(){
const [id, setId] = useState("")
const handleSubmit =(e) => {
    e.preventDefault();
  axios.delete(`http://localhost:9292/reviews/${id}`, {
})
.then((response) => {
  console.log(response)
}, (error) => {
  console.log(error);
})
  };

  return(
    <div>
    <form className="review-details-form" onSubmit={handleSubmit}>
  <input placeholder="review id" type="text"
  value={id}
  onChange={(e) => setId(e.target.value)}/>
   <input type="submit" value="delete" className="btn-delete-inpt"/>
</form>
    </div>
)
}

export default DeleteReview;