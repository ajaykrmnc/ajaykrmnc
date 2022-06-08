/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import img1 from "./pic/fwt.jpg";
import img4 from "./pic/sanjeet.jpg";
import img5 from "./pic/bhusan.jpeg";
import img6 from "./pic/av.jpeg";
import ContactUs from "./Contactus";
import People  from "./people";
import { Problem, Solution, Paragraph } from "./Object";
import Footer from "./Footer";
import './style/About-style.css'
import EmbedsPage from './embed';

const tech = {

  position:" relative",
  width: "50%",
  // Adding media query..
  '@media (max-width: 800px)': {
    height: '800px',
     width: '300px',
  },
};


const About = () => {
  return (
    
    // <>
    <div>
      <div className="container-fluid" style={{ paddingTop: "50px" }}>
        <div>
        <h2
          className="text-center"
          style={{ fontWeight: "bold", paddingBottom: "6%" }}
        >
          We are pioneers in the tech-driven supply chain <br />space for fresh
          produce
        </h2>
        </div>
        <div>
        <img src={img1} alt="tech" style={tech}/>
        </div>




        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(240 251 244)", marginTop: '40px',paddingTop: '40px',paddingBottom: '30px'}}
        >
          <div className="container">
          <h2 className="text-success " style={{fontWeight: 'bold',textAlign: 'left',paddingBottom: "20px"}}>Supply Chain and Tech</h2>

          </div>
          <Paragraph />
          
        </div>





        <div className="container-fluid" style={{paddingLeft: '0',paddingRight: '0'}}>
        <div
          className="card-columns row d-flex justify-content-center ">
          <div class="card col-6" style={{width: '20rem',marginTop: '40px'}}>
            <Problem />
          </div>
          <div class="card col-6" style={{width: '20rem',marginTop: '40px'}}>
            <Solution />
          </div>
          </div>
        </div>


        
        <div class="" style={{marginTop: '50px',marginBottom: '50px', backgroundColor:'rgb(240 251 244)',paddingBottom: "40px",paddingTop: '40px'}}>
          <h2 style={{marginBottom: "30px", fontWeight: 'bold'}}>How Urban Reach Works</h2>
          <EmbedsPage/>
        </div>
  
      
    

       
        <Footer />
      </div>
    </div>
  );
};

export default About;