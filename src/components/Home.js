import React from "react";

function Home(){
    const imgSrc = "https://www.awf.org/sites/default/files/2020-01/tourism_Paul_Lampert%20%281%29.jpg";
    //const imgSc= "https://www.serengeti.com/assets/img/lion-serengeti-africa.jpg";
    return(
        <div className="home">
        
            <h2>Home to beautiful scenery in and around Africa </h2>
            <p>Get accurate and reliable tour travel details and costs to the perfect destination.</p>
            <img src={imgSrc} />  
            
        </div>

        
    )
}

export default Home;