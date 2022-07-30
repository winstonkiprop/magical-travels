import React, {useState, useEffect} from "react";
import axios from "axios";
import NewReview from "./NewTravel";

const Blog =() =>{
    const[reviews, setReview] = useState([]);
    useEffect(() => {
        getReviews();
    }, [])
    
    const getReviews =()=>{
        axios 
        .get(' http://localhost:3000/blog')
        .then((response) => {
            console.log(response);
            setReview(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
          <div>
            <div className="blog-details">
                <div className="blog-container">
                    {reviews.map((review) => (
                        <div className="blog-content" key={review.id}>
                            <p>{review.content}</p>
                            <h3>By: {review.user}</h3>
                            </div>
                    ))}
                </div>
            </div>
            <div className="review-form">
            <NewReview />
            </div>
          </div>
    )
}

export default Blog;