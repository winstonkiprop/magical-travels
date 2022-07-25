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
    <div className="">
    {images.map((image) => (
        <div className="travels-det" key={image.id}>
            <h1>{image.caption}</h1>
            <img src={image.imgurl} />
        </div>
    ))}
</div>
    );
}

export default TourGallery;