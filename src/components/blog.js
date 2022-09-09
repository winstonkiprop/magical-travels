import React, {useState, useEffect} from "react";
import axios from "axios";
import NewReview from "./NewTravel";
import DeleteReview from "./DeleteReview.js";

const Blog =() =>{
    const[reviews, setReview] = useState([]);
    useEffect(() => {
        getReviews();
    }, [])
    
    const getReviews =()=>{
        axios 
        .get('http://localhost:9292/reviews')
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
                            <p>{review.comment}</p>
                            <h3>rating: {review.rating}</h3>
                            </div>
                    ))}
                </div>
            </div>
            <DeleteReview />
          </div>
    )
}

export default Blog;