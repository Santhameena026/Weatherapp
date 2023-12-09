import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Components/Header.css';
import { TiWeatherPartlySunny } from "react-icons/ti";


const Header = ({title}) => {
  return (
    <div>
      <Navbar expand="lg" className="navbarbg" style={{backgroundColor:""}}>
      <Container>
        <Navbar.Brand href="#home"><span style={{fontSize:"25px",color:"yellow",marginRight:"8px"}}><TiWeatherPartlySunny /></span><span style={{fontWeight:'700',color:"blue"}}>WEATHER REPORT</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='navitem'><span style={{fontSize:"20px",color:"black",fontWeight:"600",textShadow:"1px 1px cyan"}}>Home</span></Nav.Link>
            <Nav.Link href="/signup" className='navitem'><span style={{fontSize:"20px",color:"black",fontWeight:"600",textShadow:"1px 1px cyan"}}>Signup</span></Nav.Link>
            <Nav.Link href="/login" className='navitem'><span style={{fontSize:"20px",color:"black",fontWeight:"600",textShadow:"1px 1px cyan"}}>Login</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header