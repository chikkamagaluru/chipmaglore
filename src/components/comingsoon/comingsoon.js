import React from 'react';
import './comingsoon.css';
import {Form, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function comingsoon(props) {
    return (
        <div className="App">
        <header className="Comingsoon">
          <img src="https://react-coming-soon.maksv.me/web-development.svg" className="App-logo" alt="logo" />
          <p>
           Coming Soon
          </p>
          <a
            className="App-link"
            href="https://chipmaglore.org"
            target="_blank"
            rel="noopener noreferrer">
            www.chipmaglore.org
          </a>

          <Form>
          <Form.Row>  
            <Col>
              <Form.Control placeholder="Email Address" /> </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>

        </header> 
      </div>
    );
}

export default comingsoon;