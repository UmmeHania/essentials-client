import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const AboutUs = () => {
    return (
        <div className='container my-5'>
            <CardGroup className='g-3'>
                <Card className='height login-form'>

                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'>Our Motives</Card.Title>
                        <Card.Text className='text-muted'>
                            ESSENTIALS is the one of the prominent home appliances reserve hub and we are actually proud to be the part of the world most famous brand. Product authentication, management and customer satisfaction is our ultimate motive and we are trying to reach it out.
                        </Card.Text>
                    </Card.Body>
                    <hr />
                </Card>
                <Card className='height login-form'>

                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'>Contact Info</Card.Title>
                        <Card.Text>
                            <div className="phone d-flex align-items-center">
                                <div className="me-2">
                                    <LocalPhoneIcon />
                                </div>
                                <div className="number">
                                    <span> +1 732-968-3500</span><br />
                                    <span> +1 732-968-3501</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <DraftsIcon />
                                </div>
                                <div className="number">
                                    <span>info@example.com</span><br />
                                    <span>support@example.com</span>
                                </div>
                            </div>
                            <div className="phone d-flex align-items-center">
                                <div className="me-2">
                                    <AddLocationIcon />
                                </div>
                                <div className="number">
                                    <span>2753 Willison Street</span><br />
                                    <span>Eagan, United State</span>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>

                    <hr />

                </Card>
                <Card className='height login-form'>

                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'>Payment Method</Card.Title>
                        <Card.Text>
                            <div>
                                <img src="https://i.ibb.co/SvXbhhW/download.png" alt="" />
                                <img src="https://i.ibb.co/grwfJ8J/download-1.png" alt="" />
                                <img src="https://i.ibb.co/L0yDDTN/download-2.png" alt="" />
                                <img src="https://i.ibb.co/t2GhpYq/download-3.png" alt="" />
                                <img src="https://i.ibb.co/wcWgw4j/download-4.png" alt="" />
                            </div>
                        </Card.Text>
                    </Card.Body>

                    <hr />

                </Card>
            </CardGroup>
        </div>
    );
};

export default AboutUs;