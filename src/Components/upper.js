import React from 'react'
import Navbar from "./ReactNavbar/Navbar";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>Thapa Technical Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};


const upper = () => {
    return (
        <div>

            <Routes>    
                <Route exact path="/" element={  <Home/>} />
                <Route path="/about" element={ <About/>}/>
                <Route path="/service" element={ <Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            
        </div>
    )
}

export default upper;
