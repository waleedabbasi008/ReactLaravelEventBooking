import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  margin-top: 5rem;
.table{
  background: transparent;
  padding-left: 1.5rem;
  border-spacing: separate;
  border-spacing: 15px;

}
.table thead tr th{
  padding-left: 1rem;
}
.categories ul li, .links ul li, .links ul li a{
  list-style: none;
  text-decoration: none;
  padding-top: 10px;
  color: #B5C0D0;
}
@media screen and (max-width: 768px) {
  table thead tr th.para-heading{
     display: none;
    }
    table tbody tr td.para{
    display: none;

  }
  
}
`
const Footer = () => {
  return (
    <>
      <Container className=' container'>
        <table className=' table-group-divider table-responsive-md'>
          <thead>
            <tr>
              <th className=" para-heading"> About </th>
              <th className=' ml-3'> Categories </th>
              <th> Links </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=' para  w-50' style={{ color: "#B5C0D0" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet possimus magni ea iure cum sed illo dolore! Quidem, dolor distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, excepturi! </td>
              <td className='categories w-25' style={{ color: "#B5C0D0" }}>
                <ul className=''>
                  <li> Decoration </li>
                  <li> Photography </li>
                  <li> Event planning </li>
                  <li> Venues Selection </li>
                </ul>
              </td>
              <td className=' links w-25'>
                <ul className='  p-0'>
                  <li> <a href="/"> Home </a> </li>
                  <li> <a href="/about"> About </a> </li>
                  <li> <a href="/services"> Services </a> </li>
                  <li> <a href="/contact"> Contact </a> </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center col-lg-3 col-md-3 col-sm-1 mt-3 w-100 container" style={{ color: "#B5C0D0" }}>
          <small> Created by Waleed abbasi </small>
          <p>  all rights reserved © </p>
          <a href="www.instsgram.com/waleedabbasi008">  Follow me on Instagram </a>
        </div>
      </Container>
    </>
  )
}

export default Footer;