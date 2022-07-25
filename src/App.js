import React from "react";
import './App.css';
import Destination from "./components/destination";
import TourGallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
   <h1>Magical Travels</h1>
   <Destination />
   <TourGallery />
    </div>
  );
}

export default App;
