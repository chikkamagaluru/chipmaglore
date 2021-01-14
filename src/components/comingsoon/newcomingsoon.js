
import React from 'react';
import './newcomingsoon.css';
import { Form, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import desktopImage from './images/chikkamagaluru-desktop.jpg';
import mobileImage from './images/chikkamagaluru-mobile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const imageUrl = window.innerWidth >= 1081 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        
        <Container>
          <div class="social-container">
            <Row className="justify-content-center">
            <a href="https://instagram.com/chikkamagaluru?igshid=kj1s78b2ydlz"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </Row>
          </div>
          <Row className="justify-content-center">
          <p align="center" className="copyright">&copy; {new Date().getFullYear()} Copyright : <a href="http://chikkamagaluru.org/"> chikkamagaluru.org </a></p>
          </Row>
        </Container>

        <Container>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control md="auto" size="lg" placeholder="Email Address" />
              </Col>

              <Col xs="auto">
                <Button size="lg" md="auto" type="submit" className="mb-2">
                    Notify Me !
                </Button>
              </Col>

            </Form.Row>
          </Form>
        </Container>

        <Container>
          <Alert variant="danger" >
            We are almost there! If you wanat to get notified when the website goes
            live subscribe to our mailing list!
          </Alert>
        </Container>
      </div>
    </div>
  );
};

export default App;