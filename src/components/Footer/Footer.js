
import React from 'react';
import { Container } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-main">
            <hr />
            <Container className="pt-3">
                <div className="row footer-details">
                    <div className="col-md-4">
                        <div className='footer-text'>
                            🔮 ESSENTIALS
                        </div>
                        <p>
                            ESSENTIALS is the one of the biggest home appliances hub located in United State. We serve you as the way you want and promised the best services.
                        </p>
                        <h4 className='fw-bold'>Follow Us:</h4>
                        <div>
                            <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className='fw-bold'>Contact Us</h3>
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
                    </div>
                    {/* <div className="col-md-2">
                        <h3>Support</h3>
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Destination</p>
                        <p>Our Blogs</p>
                        <p>Package</p>
                    </div> */}
                    <div className="col-md-3">
                        <h3 className='fw-bold'>We Accepts:</h3>
                        <div>
                            <img src="https://i.ibb.co/SvXbhhW/download.png" alt="" />
                            <img src="https://i.ibb.co/grwfJ8J/download-1.png" alt="" />
                            <img src="https://i.ibb.co/L0yDDTN/download-2.png" alt="" />
                            <img src="https://i.ibb.co/t2GhpYq/download-3.png" alt="" />
                            <img src="https://i.ibb.co/wcWgw4j/download-4.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <p className="text-center">Copyright 2022 <span className="text-muted">ESSENTIALS</span> | Designed By Hania</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;