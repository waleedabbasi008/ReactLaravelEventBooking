import React, { useEffect } from 'react'
import Header from '../Components/Header';
import UserHeader from '../LayOuts/UserHeader';
import styled from 'styled-components';
import AboutDetail from './AboutDetail';
import Footer from '../LayOuts/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './Testimonial/Testimonial';
const Container = styled.div`
background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/hero-bg.jpg');
#about-hero{
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#about-hero .hero-text .hero-para  p{
  color: #B5C0D0;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 5px;
  animation: move 7s linear infinite alternate-reverse;
  padding-top: 0.5rem;
}
#about-hero .hero-text  .hero-para{
  border-top: 2px solid green;
  border-bottom: 2px solid gray;
}
#about-hero .hero-text  .hero-para marquee{
  color: #B5C0D0;
  font-size: 1.5rem;
}
@keyframes move {
  0%{
    width:0;
    margin-left: 100%;
  }
  100%{
    width: 100%;
    margin-left: 0;
  }
}
#testimonial{
  margin-top: 5rem;
}
`
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <>
      <Container>
        {
          localStorage.getItem('user-info') ?
            <Header /> && <UserHeader /> :
            <UserHeader />


        }
        <section id="about-hero">
          <div className="hero-text container" data-aos="fade-up">
            <h2 className='text-center' style={{color: "#B5C0D0"}}> About us </h2> <br /><br />
            <div className="hero-para" data-aos="fade-up">
              <marquee> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recus  orem ipsum dolor sit amet consectetur adipisicing elit. Recus </marquee>
            </div>
          </div>
        </section>
        <section id="aboutDetails" data-aos="fade-up">
          <AboutDetail />
        </section>
        <section id='testimonial' data-aos="fade-up">
          <h1 className=' header text-center'> Testimonials </h1>
          <Testimonial className='mt-5' />
        </section>
        <section id='footer' data-aos="fade-up">
          <Footer />
        </section>

      </Container>

    </>
  )
}

export default About;