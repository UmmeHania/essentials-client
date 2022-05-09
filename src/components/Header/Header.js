import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo11.png'
import './Header.css'

const Header = () => {
    return (
        <div className='color'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        🔮 ESSENTIALS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='text-black'>
                        <Nav className="ms-auto">
                            <Nav.Link className='text-black fs-5' to='/'>Home</Nav.Link>
                            <Nav.Link className='text-black fs-5' to='/inventory'>Inventory</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;