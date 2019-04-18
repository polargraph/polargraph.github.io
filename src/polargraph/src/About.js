import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col, Image} from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <Container className="About">
      <Row className="mt-5">
        <Col md={6}>
          <h1>About</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <p> Photographs are shot and shared rapidly over social media sites with no intention on the quality of the image itself. Also, countless images are created by machines for machines only that leaves behind human awareness outside of the loop, using CCTV, computer vision algorithms and other automated, networked technologies. As a matter with drawing & chalk: it is a perfect contrast for these hegemonies, where the act of drawing (thus image creation) is extremely limited in terms of colours and line qualities, so we decided to automate the process of chalk drawing, by building polargraphs that are drawing algorithmically formalised thoughts on the wall. </p>
        </Col>
        <Col md={6}>
          <Image src="http://www.binaura.net/assets/images/polargraph/004.jpg" fluid/>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default About;
