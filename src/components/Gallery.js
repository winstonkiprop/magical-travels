import React, { useEffect, useState } from "react";
import axios from "axios";

function TourGallery(){
    const [images, setImage] = useState([])
    useEffect(() => {
        getImages();
    }, [])

    const getImages = () => {
        axios
        .get('http://localhost:3000/gallery')
        .then((response) =>{
            console.log(response);
            setImage(response.data);
        }) 
        .catch((error) =>{
            console.log(error);
        })
    }
    return(
    <div className="dest-det">
    {images.map((image) => (
        <div className="travels-det" key={image.id}>
            <img src={image.imgurl} />
            <h4>{image.caption}</h4>
        </div>
    ))}
</div>
    );
}

export default TourGallery;