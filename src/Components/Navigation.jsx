import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter, Routes, Route, Link
} from "react-router-dom"
import Home from './Home';
import About from './About';
import Memebership from './Memebership';
import Events from './Events';
import Contact from './Contact';
import C2022 from './C2022';
import Members from './Members';
import { useState } from 'react';
import  "../Styles/Navigation.css"




function Navigation() {
    const [expanded, setExpanded] = useState(false); 

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false); 
    };
    const handleDownload = () => {
        const pdfUrl = '/chencon2021_proceedings.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'chencon2021_proceedings.pdf'; 
        link.click();
    };
    const handleDownload1 = () => {
        const pdfUrl = '/chenlink1_3.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'chenlink1_3.pdf'; 
        link.click();
    };
    const handleDownload2 = () => {
        const pdfUrl = '/chenlink1_2.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'chenlink1_2.pdf'; 
        link.click();
    };
    const handleDownload3 = () => {
        const pdfUrl = '/chenlink1_1.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'chenlink1_1.pdf'; 
        link.click();
    };

    return (
        <BrowserRouter>
             <Navbar
                expand="md"
                 className='navma'
                // bg="light"
                // variant="light"
                sticky="top"
                expanded={expanded}
                onToggle={handleToggle}
            >
                <Container>
                    
                    <Navbar.Brand href="#home">
                        <img src="./iete.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
                        <span className="d-none d-sm-inline-block">IETE</span>
                    </Navbar.Brand>

                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-lg-0">
                            
                            <Nav.Link as={Link} to="/" className="nav-link-hover" activeClassName="active" onClick={handleLinkClick}>HOME</Nav.Link>
                            <Nav.Link as={Link} to="/About" className="nav-link-hover"onClick={handleLinkClick}>ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/Member" className="nav-link-hover"activeClassName="active" onClick={handleLinkClick}>EXECUTIVE COMMITTEE</Nav.Link>

                            
                            <NavDropdown title="CHENCON" id="basic-nav-dropdown" align="end" >
                                <NavDropdown.Item as={Link} to="/2022"onClick={handleLinkClick}>2022</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleDownload}>
                                    2021
                                </NavDropdown.Item>
                            </NavDropdown>

                            
                            <NavDropdown title="CHENCON NEWSLETTER" id="basic-nav-dropdown" align="end" className="nav-link-hover">
                                <NavDropdown.Item onClick={handleDownload1}>VOL 1 , NO.3</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleDownload2}>VOL 1 , NO.2</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleDownload3}>VOL 1 , NO.1</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/Events"className="nav-link-hover" onClick={handleLinkClick}>EVENTS</Nav.Link>
                            <Nav.Link as={Link} to="/Membership" className="nav-link-hover"onClick={handleLinkClick}>MEMBERSHIP</Nav.Link>
                            <Nav.Link as={Link} to="/Contact"className="nav-link-hover">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Membership' element={<Memebership />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/Member' element={<Members />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/2022' element={<C2022 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
