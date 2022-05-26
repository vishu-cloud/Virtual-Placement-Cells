import React from 'react'
import { Container,Row,Col,Form,Button, FloatingLabel } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import Application from './Application'

function Applications() {
  return (
    <React.Fragment>
    <Container fluid>
    <Row>
    <CompanyProfile val = '5'/>
    <Col xl="10" lg="10" md = "10" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
        <Row  style={{display:"flex",justifyContent:"end"}}>
          <Col sm = {12} xs={12} md={6} lg={6}>
            <Form style={{display:"flex"}}>
          <input placeholder="Search College" className='inp'/>
          <Button style={{marginLeft:"2%",width:"70%",height:"50px",backgroundColor:"black",marginTop:"1%"}}>Search</Button>
          </Form></Col>
          </Row>
          <Row>
            <Col className='Heading'>
              Current Applications
            </Col>
          </Row>
            <Application/>
            <Application/>
            <Application/>
      </Col>
      </Row>
  </Container>
  </React.Fragment>
  )
}

export default Applications