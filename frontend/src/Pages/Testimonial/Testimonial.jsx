import React, { useState } from 'react';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialApi = [
  {
    id: 1,
    image: " images/c4.jpg",
    name: " Zeeshan",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 2,
    image: " images/c5.jpg",
    name: " Majid ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 3,
    image: " images/c6.jpg",
    name: " Waleed ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },
  {
    id: 4,
    image: " images/Avatar4.jpg",
    name: " Mr. harry ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum magnam est ducimus labore distinctio alias sequi deleniti, adipisci provident. ",
  },

]

const Testimonial = () => {
  const [test, settest] = useState(TestimonialApi);
  return (
    <>

      <section id="Testimonial">        
        <Swiper className="container testimonial__container"
          // Install swiper module
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            test.map((currele) => {
              return (
                <>

                  <SwiperSlide className="testimonial"  >
                    <div className="client__avatar">
                      <img src={currele.image} alt="Mickle " />
                    </div>
                    <div className="client__reviews-detail">
                      <h5> {currele.name} </h5>
                      <small className="review" style={{color: "#B5C0D0"}}> {currele.review} </small>
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial;