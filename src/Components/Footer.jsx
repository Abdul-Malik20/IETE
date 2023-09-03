import React from 'react';
import "../Styles/Footer.css"
import { TelephoneFill,EnvelopeAtFill,BuildingFill,Instagram, Facebook, Linkedin, Twitter, CCircle } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container"><br/>
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>IE</span>TE</h3>
                            <p>Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.</p>
                            <div className="footer-icons">
                                <i><Instagram/></i>
                                <i><Facebook/></i>
                                <i><Linkedin/></i>
                                <i><Twitter/></i>
                            </div><br/>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Member">Executive Committee</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>CONTACT</h5>
                            <p><TelephoneFill/> 044 2835 0773</p>
                            <p><EnvelopeAtFill/> ietechennai@gmail.com</p>
                            <p><BuildingFill/> IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters Road, Gopalapuram,Chennai, Tamil Nadu 600086.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p><CCircle/> IETE - Design By MTB</p>
            </div>
        </>
    )
}

export default Footer