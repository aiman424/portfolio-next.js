import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Projects = () => {
  return (
    <section className="projects" >
        <Header/>
        <div className="project-box">
            <h2 className="heading">Projects</h2>
            
            <div className="wrapper">
                <div className="Project-items">
                    <img src="/countdown-timer.webp" alt="countdown"></img>
                    <h2>Countdown-timer</h2>
                    <p>This is a simple countdown timer using HTML, CSS, and JavaScript.
                     You can customize the countdown time by changing the values in the script tag.</p>
                </div>

                <div className="Project-items">
                    <img src="/download.jpg" alt=""></img>
                    <h2>Weather-widget</h2>
                    <p>This is a weather app using HTML, CSS, and JavaScript.
                     You can enter your city name to see the current weather and forecast.</p>
                </div>

                <div className="Project-items">
                    <img src="/Birthday.jpg" alt=""></img>
                    <h2>Birthday-wish</h2>
                   <p>This is a birthday countdown app using HTML, CSS, and JavaScript.
                   You can enter your birthdate to see when your birthday is.</p>
                </div>
              </div>  
        </div>
        <Footer/>
    </section>
  )
}

export default Projects
