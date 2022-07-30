import React from "react";

function Home(){
    const imgSrc = "https://www.awf.org/sites/default/files/2020-01/tourism_Paul_Lampert%20%281%29.jpg";
    return(
        <div className="home">
            <p>Get accurate and reliable tour travel details and costs to the perfect destination.</p>
            <img src={imgSrc} />
        </div>
    )
}

export default Home;