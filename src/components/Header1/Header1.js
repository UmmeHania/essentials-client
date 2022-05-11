import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.int';
// import logo from '../Assets/logo11.png'
// import auth from '../../firebase.init';
import './Header1.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        🔮 ESSENTIALS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink
                                className="link"
                                to="/"

                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/blog"

                            >
                                BLOG
                            </NavLink>
                            {/* <NavLink
                                className="link"
                                to="/inventory/:id"

                            >
                                INVENTORY
                            </NavLink> */}

                            {

                                user ?
                                    <>

                                        <NavLink
                                            className="link"
                                            to="/manageitems"

                                        >
                                            MANAGE ITEMS
                                        </NavLink>
                                        <NavLink
                                            className="link"
                                            to="/additem"

                                        >
                                            ADD ITEM
                                        </NavLink>
                                        <NavLink
                                            className="link"
                                            to="/myitems"

                                        >
                                            MY ITEMS
                                        </NavLink>
                                        <button className='btn btn-primary text-decoration-none ' onClick={handleSignOut}>SIGN OUT</button>
                                    </>
                                    :
                                    <NavLink
                                        className="link"
                                        to="/login"

                                    >
                                        LOGIN
                                    </NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;