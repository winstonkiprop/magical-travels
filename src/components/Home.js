import React, {useState} from "react";
import NewDestination from "./NewDestination";
import DeleteReview from "./DeleteReview";
function Home(){
    let [show, setForm] = useState(false);
    function handleClick(){
        setForm(true);
    }
    return(
        <div className="home">
            <h2>Home to beautiful scenery in and around Africa </h2>
            <p>Get accurate and reliable tour travel details and costs to the perfect destination.<br/>
            Our purpose is to give you exquisite tour experiences that will create pleasurable memories for you and your loved ones.
            </p>
            <button className="add-new-dest" onClick={handleClick}>Add a Destination</button>
            {show ? <NewDestination/> : null}
        </div>
    )
}

export default Home;