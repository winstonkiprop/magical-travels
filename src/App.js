import React from "react";
import './App.css';
import Destination from "./components/destination";
import TourGallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import Blog from "./components/blog";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <h1>Magical Travels</h1>
 
 <Router>
   <NavBar/>
   <Routes>
     <Route path="/"
     element={<Home/>}>
     </Route>
     <Route path="destination"
     element={<Destination/>}>
     </Route>
     <Route path="gallery"
     element={<TourGallery/>}>
     </Route>
     <Route path="blog"
     element={<Blog/>}>
     </Route>
   </Routes>
   </Router>   
   </div>
  );
}

export default App;
