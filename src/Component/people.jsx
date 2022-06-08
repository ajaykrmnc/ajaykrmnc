import React, { Component } from 'react';
import Card from './CardAjay'
import './style/people-style.css'

class People extends Component {
    state = { 
        
     } 
    render() { 
        return (
        <div className='container justify-content-center'>
            <div className='us' style={{textAlign: "center"}}>
            <h5>Our team</h5>
            <h2>We have a proven track record and vision to succeed</h2>
            </div>
        <div className="row" style={{marginBottom: '60px',paddingTop: "20px"}}>
        
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc="sanjitsir.jpg" img2src="img1.jpg" cardtitle={"Sanjit Kumar / CEO & CTO"}
            cardtext="B.tech (CSE) at IIT Dhanbad.Startup Experience at MBA ITB Indonesia. CCVP Coca-Cola YSF 2k19."/>
        
        </div>
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc="Ajay.png" img2src="img2.jpg" cardtitle={"Ajay Kumar"} 
            cardtext="3 yrs of corporate experience at IQVIA.Founder of 2 successfully running agri-based companies."/>
        </div>
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc="Avinash.jpg" img2src="img3.jpg" cardtitle= {"NHLC"}
            cardtext="Bachelor of Science at VKSU Bihar.4yrs+ of Marketing and Business Development Experience."/>
        </div>
    
        </div>
        </div>
        );
    }
}
 
export default People;