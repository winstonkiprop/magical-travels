import React, {useState} from "react";
import axios from "axios";

function NewReview(){
    const [comment, setComment] = useState("")
            const [rating, setRating] = useState("")

            const  handleFormSubmit = (e) => {
                e.preventDefault();


                axios.post('http://localhost:9292/reviews',{ 
                comment:comment,
                rating:rating})
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                })

            };
    return(
        <div>
            <form className="new-review-form" onSubmit={handleFormSubmit}>
                <input placeholder="rating" type="text" 
                value={rating} onChange={(e) => setRating(e.target.value)}/>
                <textarea placeholder="add a new review" rows={10} type="text" value={comment}
                onChange={(e) => setComment(e.target.value)}/>
                <input type="submit" value="add review"/>

            </form>
        </div>
    )
}

export default NewReview;