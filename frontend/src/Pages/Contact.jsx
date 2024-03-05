import React, { useEffect } from 'react'
import styled from 'styled-components';
import UserHeader from '../LayOuts/UserHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../LayOuts/Footer';
import Header from '../Components/Header';
import ContactForm from '../LayOuts/ContactForm';
const Container = styled.div`
  background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('images/hero-bg.jpg');
#hero{
display: grid;
place-items: center;
margin: auto;
height: 80vh;
}
#map .container{
  margin: auto;
}
iframe{
  width: 100%;
}

`
const Contact = () => {
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
        <section id="hero">

          <div className="hero-text">
            <h1 style={{ color: "#B5C0D0" }}> Contact Us </h1>
          </div>
        </section>
        <section id="map">
          <div className="container" data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.047320150097!2d73.27762931166733!3d33.78527617314711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfdcb2677c6d59%3A0xa3323c7a499b321f!2sMariano%20Restaurant%20%26%20Spa!5e0!3m2!1sen!2s!4v1706512895688!5m2!1sen!2s" width="1200" height="250" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
          </div>
        </section>
        <ContactForm />
        <section className="footer" data-aos="fade-up">
          <Footer />
        </section>



      </Container >
    </>
  )
}

export default Contact;