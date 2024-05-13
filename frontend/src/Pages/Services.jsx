import React, { useEffect } from 'react';
import styled from 'styled-components';
import ServicesDetail from '../Pages/Services/ServicesDetail';
import Header from '../Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './pages.css';
import UserHeader from '../LayOuts/UserHeader';
import Decore from './Services/RecentlyAdded/Decore';
import Event from './Services/RecentlyAdded/Event';
import Venue from './Services/RecentlyAdded/Venue';
import Footer from '../LayOuts/Footer';
const Container = styled.div`
background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('images/event.jpg');
background-position: center;
background-size: cover;
backdrop-filter: blur(15px);
#services-hero{
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#services-hero .section-text .textparent .textchild{
  border-top: 2px solid green;
  border-bottom: 2px solid gray;
}
#services-hero .section-text .textparent .textchild marquee{
  font-size: 1.5rem;
  color: #B5C0D0;

}
#services-hero .section-text .textparent .textchild p{
  color: #B5C0D0;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 5px;

  animation: move 7s linear infinite alternate-reverse;
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
#recently-added{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
h2{
  margin-top: 3rem;
}
`

const Services = () => {
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
        <section id="services-hero">
          <div className="section-text text-center">
            <h2 className=' text-light'> Our Services </h2> <br /> <br />
            <div className="textparent container">
              <div className="textchild container " data-aos="fade-up">
                <marquee> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recus  orem ipsum dolor sit amet consectetur adipisicing elit. Recus </marquee>
              </div>
            </div>
          </div>
        </section>
        <section id="services" data-aos="fade-up">
          <ServicesDetail />
        </section>
        <h2> Recently Added </h2>
        <section id="recently-added" className='container' >
          <div className="decore" data-aos="fade-up">
            <Decore />
          </div>
          <div className="Event" data-aos="fade-up">
            <Event />
          </div>
          <div className="Venue" data-aos="fade-up">
            <Venue />
          </div>
        </section>
        <section className="footer" data-aos="fade-up">
          <Footer />
        </section>
      </Container>
    </>
  )
}

export default Services;