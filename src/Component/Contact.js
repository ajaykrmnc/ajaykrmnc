import React from 'react'
import Footer from './Footer'
import { Container, Row, Col,Alert, Form,Button} from 'react-bootstrap'
import './style/contact-style.css'
import phone from './pic/phone (2).png'
import email from './pic/email (2).png'
import headquarter from './pic/headquarter (1).png'
import headoffice from './pic/headquarter.png'


const Contact = () => {
  return (
    <div>
    <Container fluid  class="touch" style={{marginTop:'40px',padding: '20px', marginBottom:'150px',}}>
    <h1 style={{fontWeight: 'bold',paddingBottom: '40px'}}>Get In Touch<hr style={{width: "80%",marginLeft: '10%'}}></hr></h1>
    
  <Row>
    <Col style={{paddingTop:'20px', borderRadius:'1px solid green'}}><img src={phone}></img>
    <h4>Get Free Farming Advisory</h4>
    <h5>7991106305</h5></Col>
    <Col style={{paddingTop:'30px',borderRadius:'1px solid black'}}><img src={email}></img>
    <h4>Email Us</h4>
    <h5>contact@urbanreach.in</h5></Col>
  </Row>
  </Container>



  <Alert style={{backgroundColor: 'rgb(240 251 240'}}>
  <Container style={{marginTop:'20px', marginBottom:'20px'}}>
  <Row>
    <Col style={{}}><img width='150px' style={{marginTop:'20px'}} src={headquarter} alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',}}><h3>Head Office</h3><p>Zero mile, Ara, Bihar-802301</p>
   </Col>
   <Col style={{}}><img  style={{marginTop:'20px'}} width='150px' src={headoffice} alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',}}><h3>Regional Office</h3><p>Zero Mile, Ara, Bihar-802301</p>
   </Col>
  </Row>
  </Container>
</Alert>


<div style={{backgroundColor:"rgb(240 260 244)",paddingTop: '30px', paddingBottom:'100px', alignContent: 'center'}}>

<Container  >
<h2 style={{color:'green', fontWeight: 'bold', textAlign:'left'}}>Drop An Enquiry</h2>
      <Form  style={{textAlign:'left', color:'green',fontWeight: '500',fontSize: '20px',marginTop: '20px'}}>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control style={{width:"40vw", alignItems: 'center'}} type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width:"40vw"}} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control style={{width:"40vw"}} as="textarea" rows={3} />
        </Form.Group>
        <Button style={{marginTop:'10px',width:"40vw"}} variant="success" type="submit">
    Send a message
  </Button>
      </Form>
      <hr style={{marginTop: '100px',color:'gray'}}></hr>
    </Container>
    
</div>



<Footer/>
    </div>
    
  )
}

export default Contact
//hello