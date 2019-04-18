import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap'

class Contact extends Component {
  render() {
    return (
      <Container className="Contact">
        <Row className="mt-5">
          <Col md={6}>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <p> Binaura © 2019 </p>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
