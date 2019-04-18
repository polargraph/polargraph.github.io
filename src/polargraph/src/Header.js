import React, { Component } from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">Polargraph</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
            <Nav.Link href="https://github.com/polargraph/" target="_blank">Git</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
