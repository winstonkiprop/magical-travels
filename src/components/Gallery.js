import React, { useEffect, useState } from "react";
import axios from "axios";

function TourGallery(){
    const [images, setImage] = useState([])
    useEffect(() => {
        getImages();
    }, [])

    const getImages = () => {
        axios
        .get('https://kutembea-kenya.herokuapp.com/galleries')
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
            <img src={image.img_url1} />
            <img src={image.img_url2} />
            <img src={image.img_url2} />
        </div>
    ))}
</div>
    );
}

export default TourGallery;