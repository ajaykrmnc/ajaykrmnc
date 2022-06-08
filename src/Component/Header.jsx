import React, { useState }  from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap'
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Buysell from './buy-sell';
import Blog from './Blog';
import './style/Header-style.css';
import logo from './pic/logo.png'



const Header = ()=> {
  const [colorChange, setColorchange] = useState(false);
  var flag=0;
  const changeNavbarColor = () =>{
     if(window.scrollY >= 20 ){
       setColorchange(true);
       flag=1;
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    
    <BrowserRouter>
    <div className="App" >
      
    <Navbar expand="lg" sticky="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>

    <Container fluid class="topnotch" style={{paddingLeft: "0px",paddingRight:"0px"}}>
      <img src={logo} alt=' ' style={{width: "75px", marginLeft: '5.5%'}}/>
    <Navbar.Brand className="nav-link urban" as={Link} to="/" >Urban Reach</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
    <Nav className="me-auto home">
      <Nav.Link className="nav-link" as={Link} to="/" >Home</Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/about" >About Us</Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/buysell" >Buy/Sell </Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/Blog" >Blog </Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/Contact" >Contact </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>
    
  <div>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route exact path="/" element={<Home />}/>
      <Route path="/buysell" element={<Buysell/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
  </div>
    </div>
    </BrowserRouter>
  );
}

export default Header;
