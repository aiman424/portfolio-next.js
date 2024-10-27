import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className=''>
      <h1 className='text-center justify-center text-green-500 m-6 font-bold text-8xl'>Welcome to My Portfolio</h1>
      <div className='card-container'>
        <div className='card'>
      <div className='card-content'>
      <h4 className='heading'>About Me</h4>
       <p>I'm Aiman Rizwan, a passionate Front-End Developer and Web Developer from Pakistan. I have a keen eye for detail and a strong understanding of user experience.
       My goal is to create engaging and intuitive web experiences that meet the needs of my clients.</p>
       </div>
      </div>
      <div className='about-img'>
        <img src="/images.jpg" alt="" />
       </div>
       
       <section className='Education'>
       <h2 className="heading">Education</h2>
      <div className='time-line-items'>
      <div className="timeline-items">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021
                    <div className="timeline-content">
                        <h3>High School</h3>
                        <p>My school life was a learning experience for sure. In Cosmopolitan Grammer School I Enjoyed My 10 years  
                         Most importantly, it is the place where I have acknowledged my individuality and uniqueness.
                         For me, my school life is no less than a blessing that has given me priceless joys in life..</p>
                    </div>
                </div>
            </div>

            <div className="timeline-tems"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022
                    <div className="timeline-content">
                        <h3>Collage</h3>
                        <p>My College Life teaches to many things and builds our confidence to face the challenges and struggles in our future. 
                         In Sheikh Zaid Collage I enjoyed My Collage life Instead of just focussing on the study, a person must participate in other activities.</p>
                    </div>
                </div>

                <div className="timeline-items"></div>
             <div className="timeline-dot"></div>
                <div className="timeline-date">2024
                    <div className="timeline-content">
                        <h3>University (Ongoing)</h3>
                        <p>Your time is limited, so don’t waste it living someone else’s life.
                        Set a goal so big that you can’t achieve it until you grow into the person who can. 
                         </p>
                    </div>
                </div>
            <div>
        </div>
      </div>
      </section>

    </div>
    </section>
  )
}

export default Hero
