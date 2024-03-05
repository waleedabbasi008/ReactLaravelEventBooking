import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
const Container = styled.div`
#contact-form .container form{
  width: 50%;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  margin-top: 3rem;  
  height: max-content;
  padding: 2rem;
  background: #ffffff05;
    backdrop-filter: blur(10px);
  border-radius: 30px;
  box-shadow: 0px 0px 16px 9px rgba(0,0,0,0.5);
  color: rgba(245, 245, 220, 0.356);

}
.container input, .container textarea{
  background: black;
  color: aliceblue;
  border-radius: 10px;
}
.container textarea{
  height: 25vh;
  margin-top: 1rem;
}
#contact-form .container form .message-box{
  padding-top: 1.5rem;
}
#contact-form .container .personel-detail{  
  width: 75%;
}
#contact-form .container .personel-detail .name{
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem;
}
#contact-form .container .personel-detail input{
     width: 100%;
}
#contact-form .container .personel-detail .name input{
  width: 100%;
}
@media screen and (max-width: 1200px) {
  #contact-form .container .personel-detail .name{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    }
    #contact-form .container form{
      width: 75%;
    }
  
}
@media screen and (max-width: 768px) {

  #contact-form .container form{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 0rem;
    place-items: center;
  }
}
`
const ContactForm = () => {
  const [data, setdata] = useState({ user_name: "", user_email: "", phone: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
  }
  // ************************************* Function to send email *******************************************
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oaqnz4b', 'template_4pcs4oy', form.current, 'HlVSf-C8o7SCagUkh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // *****************************************  to clear the data after clicking on submit ********************
    e.target.reset()
    alert(` 👏 ${data.user_name} your Message has been sent`);
  };
  return (
    <div>
      <Container>
        <section id="contact-form">
          <div className="container form-container">
            <form className=" container form-group" ref={form} onSubmit={sendEmail}>
              <div className="personel-detail">
                <h3 className=' form-label' data-aos="fade-up"> Name </h3>
                <div className="name">
                  <div className="fname" data-aos="fade-up">
                    <input type="text" required data-aos="fade-up" /> <br />
                    <label htmlFor="fname" data-aos="fade-up">first name</label>
                  </div>
                  <div className="lname" data-aos="fade-up">
                    <input type="text" data-aos="fade-up" onChange={handleChange} value={data.name} name='user_name' /> <br />
                    <label htmlFor="lname" data-aos="fade-up">last name</label>
                  </div>
                </div>
                <br />
                <h3 className=' form-label' data-aos="fade-up"> Contact </h3>
                <input type="number" required data-aos="fade-up" onChange={handleChange} value={data.number} name='phone' /> <br />
                <br />
                <h3 className=' form-label' data-aos="fade-up" onChange={handleChange} value={data.email} name='user_email'> Email </h3>
                <input type="email" required data-aos="fade-up" /> <br />
                <label htmlFor="email" className=' form-label' data-aos="fade-up">example@example.com</label>
              </div>
              <div className="message-box">
                <textarea name="message" id="" cols="30" rows="10" placeholder='write message' data-aos="fade-up" onChange={handleChange} value={data.message} ></textarea>
              </div>
              <input type="submit" className=' btn btn-secondary w-50' value="submit" data-aos="fade-up" />

            </form>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default ContactForm;