import React from 'react'
import {Container, Form} from 'react-bootstrap'

function Contact () {
    return (
            <Container className="my-5">
                <header className="jumbotron">
                    <h1>Contact Linh</h1>
                </header>
                <div className="contact1">
                    <div className="container-contact1">
                        <div className="contact1-pic js-tilt" data-tilt>
                            <img src="../images/profile.jpg" alt="IMG" />
                            <h5>Hi there, my name is Linh. I come from Vietnam. I have been to Canada since 2016. Right now I am taking Computer Programmer Analyst at Georgian College. I like making new friend, so please feel free to send me a message!</h5>
                        </div>

                    <Form className="contact1-form validate-form">
                        <span className="contact1-form-title">
                            Let's send Linh a message
                        </span>

                        <Form.Group className="wrap-input1">
                        <Form.Control className="input1" type="text" name="name" placeholder="Name" required />
                        <span className="shadow-input1"></span>
                        </Form.Group>

                        <Form.Group className="wrap-input1">
                            <Form.Control className="input1" type="email" name="email" placeholder="Email" required />
                            <span className="shadow-input1"></span>
                        </Form.Group>

                        <Form.Group className="wrap-input1" required>
                            <Form.Control className="input1" type="text" name="subject" placeholder="Subject" />
                            <span className="shadow-input1"></span>
                        </Form.Group>

                        <Form.Group className="wrap-input1" required>
                            <Form.Control as ="textarea" className="input1" name="message" placeholder="Message"></Form.Control>
                            <span className="shadow-input1"></span>
                        </Form.Group>

                        <Form.Group className="container-contact1-form-btn">
                            <button className="contact1-form-btn">
                                <span>
                                    Send
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default Contact