import React, {useState} from "react";
import axios from "axios";

function NewReview(){
    const [user, setUser] = useState("")
            const [content, setContent] = useState("")

            const  handleFormSubmit = (e) => {
                e.preventDefault();


                axios.post(' http://localhost:3000/blog',{ 
                user:user,
                content:content})
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                })

            };
    return(
        <div>
            <form className="new-review-form" onSubmit={handleFormSubmit}>
                <input placeholder="user" type="text" 
                value={user} onChange={(e) => setUser(e.target.value)}/>
                <textarea placeholder="add a new review" rows={10} type="text" value={content}
                onChange={(e) => setContent(e.target.value)}/>
                <input type="submit" value="add review"/>

            </form>
        </div>
    )
}

export default NewReview;