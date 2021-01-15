import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contact, setContact] = useState({
        email: '',
        subject: 'ContactForm from chikkamagaluru.org',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: '96d52956-8778-4173-8828-ad7a84f5e495' // get your access key from https://www.staticforms.xyz
    });

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: { 'Content-Type': 'application/json' }
            });

            const json = await res.json();
            console.log(json);

            if (json.success) {
                setResponse({
                    type: 'success',
                    message: 'Thank you for reaching out to us.'
                });
            } else {
                setResponse({
                    type: 'error',
                    message: json.message
                });
            }
        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form'
            });
        }
    };
    return (
        <div>
            <div className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column' />
                        <div className='column  is-two-thirds'>

                            <div>
                                {response.type === 'success' ? (<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Body>
                                        <Alert variant="success">
                                            Thank you for reaching out to us.
                                        </Alert>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>) : ''}
                            </div>

                            <div>
                                {response.type === 'error' ? (<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Body>
                                        <Alert variant="danger">
                                            An error occured while submitting the form
                                                                </Alert>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                                                </Button>
                                    </Modal.Footer>
                                </Modal>) : ''}
                            </div>

                            <Form action='https://api.staticforms.xyz/submit' method='post' onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Col>
                                        <Form.Control md="auto" size="lg" placeholder="Email Address" name='email' onChange={handleChange} required />
                                    </Col>
                                    <Col xs="auto">
                                        <Button size="lg" type="submit" className='mb-2' onClick={handleShow}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='column' />
            </div>
        </div>

    );
};

export default Home;
