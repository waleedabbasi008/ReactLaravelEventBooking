import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/about-img1.jpg';
import Aos from 'aos';
const data = [
    {
        id: 1,
        data: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quas accusantium corporis modi. Deserunt, nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quas accusantium corporis modi. Deserunt, nobis. ',
        image: "images/meh1.jpg",
        image2: "images/meh2.jpg",
        data2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quas accusantium corporis modi. Deserunt, nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quas accusantium corporis modi. Deserunt, nobis. ',
    },
]
const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 4rem;
/* display: flex;
justify-content: space-between;
align-items: center; */
.about-image img{
    width: 300px;
    height: 300px;
    aspect-ratio: 4/3;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 10px #42444b0c;
    transition: all 0.5s ease-in-out;
}
.about-image img:hover{
      transform: scale(1.1);
}



.data{
    display: grid;
    grid-template-columns: 1fr;
    padding: 4rem;
}
.data p{
    color: #B5C0D0;
}
.data1 p {
    padding-bottom: 2rem;
}
.data2 p {
    padding-top: 2rem;
}
.data .about-text p{
   text-orientation: sideways-right;
}

@media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    
}
.data{
    padding: 1rem;
}

.about-image img{
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and(max-width: 900px) {
    .data2{
    display: none;
}
    
}
@media screen and (max-width: 768px){
   .data1 .about-text p{
    text-align: center;
   }
}
`
const AboutDetail = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Container className="container">
                {
                    data.map((elem) => {
                        const { id, data, image, data2, image2 } = elem;
                        return (
                            <>
                                <div className="data1 data">
                                    <div className="about-text" key={id}>
                                        <p data-aos="fade-up"> <span data-aos="fade-up">{data}</span>  </p>
                                    </div>
                                    <div className="about-image">
                                        <img src={image} alt="about-image" data-aos="fade-up" />
                                    </div>
                                </div>
                                <div className="data2 data">
                                    <div className="about-image">
                                        <img src={image2} alt="about-image" data-aos="fade-up" />
                                    </div>
                                    <div className="about-text">
                                        <p data-aos="fade-up"> {data2} </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </Container>
        </>
    )
}

export default AboutDetail;