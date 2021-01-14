import React from 'react';
import './comingsoon.css';
import { Form, Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function comingsoon(props) {
  return (
    <div className="App">
      <header className="Comingsoon">
        <img src="https://react-coming-soon.maksv.me/web-development.svg" className="App-logo" alt="logo" />

        <Container >
          <p>
             We are almost there! If you wanat to get notified when the website goes live subscribe to our mailing list!
        </p>
        </Container>
          
        <Row>
          <Form>
          <Form.Row>
            <Col>
              <Form.Control size="lg" placeholder="Email Address" /> </Col>
            <Col xs="auto">
              <Button size="lg" type="submit" className="mb-2">
                Notify Me !
              </Button>
            </Col>
          </Form.Row>
        </Form>
        </Row>
        


        

          <Container>
          <div class="social-container">
            <a href="https://www.youtube.com/c/jamesqquick"
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <a href="https://www.facebook.com/learnbuildteach/"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Copyright : <a href="http://chikkamagaluru.org/"> chikkamagaluru.org </a></p>
          </Container>
      </header>
    </div>
  );
} 

export default comingsoon;