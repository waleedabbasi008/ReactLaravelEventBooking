import React, { useEffect } from 'react'
import UserHeader from '../LayOuts/UserHeader';
import styled from 'styled-components';
import img1 from '../assets/hero-img-1.jpg';
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import AboutDetail from './AboutDetail';
import ServicesDetail from './Services/ServicesDetail';
import { ReactTyped } from "react-typed"
import Event from './Services/RecentlyAdded/Event';
import Decore from './Services/RecentlyAdded/Decore';
import Venue from './Services/RecentlyAdded/Venue';
import Testimonial from './Testimonial/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../LayOuts/Footer';
import ContactForm from '../LayOuts/ContactForm';
import './pages.css';
const Hero = styled.div`
/* @import url('https://fonts.googleapis.com/css2?family=Alkatra:wght@400;700&family=Bricolage+Grotesque&family=Cinzel&family=Delicious+Handrawn&family=Gabarito&family=Kablammo&family=Lato:wght@300;400&family=Montserrat:ital,wght@0,300;0,500;0,700;1,400&family=Noto+Sans:wght@300&family=Open+Sans&family=Oswald:wght@200;300;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:wght@300;500;600&family=Roboto+Mono:wght@200;300&family=Roboto:wght@100;400;900&family=Rubik+Spray+Paint&family=Rubik:wght@300;400&family=Sono:wght@800&family=Ysabeau+Infant:wght@300&family=Ysabeau+Office:wght@200;300&display=swap'); */
height: auto;
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/home-bg.jpg');
/* background-position: center;
background-size: cover;
background-repeat: no-repeat; */
backdrop-filter: blur(5px);
font-family: 'Gabarito', sans-serif;
.down-arrow{
  text-align: center;  
  animation: bounce 1s infinite ease-in-out;
 }
 .down-arrow a{
  font-size: 1.5rem;
  color: #FFECD6;
  animation: bounce 1s infinite ease-in-out alternate-reverse;
 }
 #about{
  animation: slide 1s 1 ease-in-out alternate;
 }
 @keyframes slide {
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-5px);
    }
 }
 @keyframes bounce {
   0%{
    transform: translateY(5px);
   }
   100%{
    transform: translateY(-5px);
   }  
 }
 .recently-added{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;       

 }
 @media screen and (max-width: 1000px) {
  .recently-added{
    grid-template-columns: repeat(2, 1fr);
  }
  
 }
 @media screen and (max-width: 768px) {
  .recently-added{
    grid-template-columns: 1fr;
  }
  
 }
`
const Container = styled.div`
#hero-section{  
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.down-arrow{
  position: absolute;
  top: 90%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#hero-section .hero-text{
  color: #F3F3F3;
  text-align: center;
  width: 100%;
  font-family: poppins, sans-serif;
}
#hero-section .hero-text h1{
  padding-bottom: 2rem;
  padding: 10px;
  color: #B5C0D0;
  text-align: center;
}
#hero-section .hero-text p{
  word-spacing: 5px;  
  text-align: left;


}
#hero-section .hero-text .text-animate{
  letter-spacing: 2px;
  overflow: hidden;
  animation: typing 2s infinite ease-in-out, cursor 0.4s step-end infinite alternate;
  border-right: 2px solid;
}
@keyframes typing {
0%{
  width: 0%;  
}100%{
  width: 100%;  
}
}
@keyframes cursor {
50%{
  border-color: transparent;
}
}
  
#hero-section .hero-text button{    
    border: 2px solid #3559E0;
    background: #3559E0;
    color: #B5C0D0;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
}
#hero-section .hero-text button:hover{
  background: transparent;
}
#hero-section .hero-text button a{
  text-decoration: none;
  color: #B5C0D0;
  font-size: 1.2rem;
}
#hero-section .hero-img{
 
  border-radius: 50% 50% 0 0;
  /* background: #F3F8FF; */
}
#hero-section .hero-img img{
   width: 300px;
  height: 300px;
  aspect-ratio: 4/4;
  border-radius: 50% 50% 0 0;
  transform: translateX(5px);
  animation: animate 1s infinite ease-in-out alternate-reverse;
box-shadow: 5px 5px  10px #333;
}
@keyframes animate {
  0%{
     transform: translateY(10px);     
    } 
    100%{
      transform: translateY(-10px);      
   } 
 
}
@media screen and (max-width: 1000px) {
  #hero-section{      
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;    
  }
  
  .hero-img{
    position: relative;
    
  }
  .hero-img img{
    position: absolute;
    top: 0%;
    left: 60%;
    height: 200px;
    width: 200px;
    display: none;
    
  }
  @keyframes animate {
    0%{
       transform: translateX(5px);     
      } 
      100%{
        transform: translateX(-5px);      
     } 
   
  }
  
}
@media screen and (max-width: 768px) {
  #hero-section{
    gap: 1rem;
  }
  .hero-img img{
    position: absolute;
    top: 10%;
    left: 10%;    
    height: 200px;
    width: 200px;
  }
  .hero-text p{
    font-size: 1rem;
  }
  
}


`
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <>
      <Hero className="hero">
        <UserHeader />
        <Container className='container'>
          <section id="hero-section">
            <div className="hero-text" data-aos="fade-up">
              <h1 className=' font-color'> Waleed Events </h1>
              <p className=' font-color'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tempore molestias perspiciatis optio nulla amet delectus, suscipit architecto sequi illum dolorem perferendis animi sint velit dicta dolor eveniet ab blanditiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tempore molestias perspiciatis optio nulla amet delectus, <span>

                <ReactTyped strings={[" suscipit architecto sequi illum dolorem perferendis animi sint velit"]} typeSpeed={20} loop={true} />
              </span> </p>
              <button className="btn text-center font-color"> <NavLink to='/about'> About us </NavLink> </button>
            </div>
            <div className="hero-img">
              <img src={img1} alt="" />
            </div>

            <div className="down-arrow">
              <a href="#about"> <FaAngleDown /> </a>
            </div>
          </section>

        </Container>
        <section id='about' data-aos="fade-up">
          <h1 className=' text-center mt-5  heading font-color'> About Us </h1>
          <AboutDetail />
        </section>
        <section className="services" data-aos="fade-up">
          <h1 className=' text-center mt-5  heading font-color'> Our Services </h1>

          <ServicesDetail />
          <h3 className=' header mt-5 m-5 font-color'> Recently added </h3>
          <div className="recently-added container">
            <div className="event" data-aos="fade-up">
              <Event />
            </div>
            <div className="decore" data-aos="fade-up">
              <Decore />
            </div>
            <div className="venue" data-aos="fade-up">
              <Venue />
            </div>
          </div>
        </section>
        <section id="testimonial mt-5" data-aos="fade-up">
          <h1 className=' text-center header mb-5 font-color mt-5'> Testimonials </h1>
          <Testimonial />
        </section>
        <section id="contact">
          <h1 className=' text-center body-header header mb-5 mt-5'> Contact Us </h1>
          <ContactForm />
        </section>
        <section id="footer" data-aos="fade-up">
          <Footer />
        </section>
      </Hero>
    </>
  )
}

export default Home;