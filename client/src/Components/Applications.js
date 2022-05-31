import React, { useState,useEffect } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import CompanyProfile from './CompanyProfile'
import './CompanyProfile.css'
import Application from './Application'
import axios from 'axios'

function Applications() {
  const [data,setData] = useState([]);
const [msg,setMsg] = useState("");
const [updated,setUpdated] = useState(false) ; 
const config = {
  headers:{
    authorization:localStorage.getItem('jwtToken'),
  }
}

function getApplied(){
  console.log(config)
  axios.get("http://localhost:5000/company/viewAppliedCollege",config).then((resp)=>{
    console.log(resp)
    setData(resp.data.user);
    }).catch((err)=>{
      // setMsg(err.response.data.message);
      console.error(err)
    })
}

useEffect(()=>{
  getApplied() 
},[updated]);


  return (
    <React.Fragment>
    <Container fluid>
    <Row>
    <CompanyProfile val = '5'/>
    <Col xl="10" lg="10" md = "9" sm ="12" xs="12" style={{marginTop:"1%",marginBottom:"10%"}}>
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
          <h1 style={{color:"red",fontSize:"150%",textAlign:"center"}}>{msg}</h1>

                  { 
                   data.filter(function (dt) {
                    return dt.status === "Pending";
                }).map((d)=>(
                      <Application setUpdated={setUpdated} key = {d._id} dt = {d}></Application>
                   ))
                  }
      </Col>
      </Row>
  </Container>
  </React.Fragment>
  )
}

export default Applications