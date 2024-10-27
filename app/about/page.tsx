import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <section className="home">
       <Header/>
        <div className="home-content">
            <h1><b>Hi, <span>It's Aiman</span></b></h1>
            <h3 className="text-animation"> I'm a  <span></span></h3>
            <p><b>A Passionate Web Developer With a Strong Foundation in HTML, CSS, and JavaScript.I Want to be a Full-Stack Developer </b></p>
           </div>
  
           <div className="home-img">
            <img src="/girl.jpg" alt=""></img>
           </div>
           <Footer/>
    </section>
  
  )
}

export default About
