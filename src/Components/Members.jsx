import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../Styles/Members.css"
import React, { useState, useEffect, useRef } from 'react';
import {
    Link
} from "react-router-dom"
import { ArrowReturnRight, ArrowRightCircle } from 'react-bootstrap-icons';



function Members() {
    const committeeMembers = [
        {
            name: 'Dr. N. Venkateswaran',
            role: 'Chairman',
            department: 'Professor,Dept. of ECE',
            institution: 'Sri Siva Subramaniya Nadar College Of Engineering',
            email: 'venkateswaran.iete@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/a.jpg'
        }, {
            name: 'Dr. Tata Sudhakar',
            role: 'Immd Post Chairman',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Siva Subramaniya Nadar College Of Engineering',
            email: 'tatasudhakar@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/b.jpeg'
        }, {
            name: 'Mr. Shakthi Murugan',
            role: 'Honarary Secretary',
            department: 'Assistant Professor / ECE',
            institution: 'Jeppiaar Maamallan Engineering College',
            email: 'shakthimuruganece@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/bla.png'
        }, {
            name: 'Mrs T J Jeyaprabha',
            role: 'Honarary Treasurer',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'jprabha@svce.ac.in',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/c.jpg'
        }, {
            name: 'Dr C Udayakumar',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'cukumar@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/bla.png'
        }, {
            name: 'Dr V Thulasibai',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'thulasi9840@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/bla.png'
        }, {
            name: 'Mr D Vijendrababu',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'dvijendrababu@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/d.jpg'
        }, {
            name: 'Shri Ganapathy Suresh',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'lovechennai@yahoo.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/bla.png'
        }, {
            name: 'Shri S Arun Kumar',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'arunsundar.s@cvrde.drdo.in',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/e.jpeg'
        }, {
            name: 'Shri S Madivaanan',
            role: 'EC Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'madivaanan.s@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/bla.png'
        }, {
            name: 'Dr Vaishali D',
            role: 'Co-opted Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'vaishali.b@vdp.srmuniv.ac.in',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/f.jpg'
        }, {
            name: 'Mr Arun',
            role: 'Co-opted Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'snatarajan1967@gmail.com',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/g.jpeg'
        }, {
            name: 'Dr. K. Sumathi',
            role: 'Co-opted Member',
            department: 'Assistant Professor / ECE',
            institution: 'Sri Venkateswara College of Engineering',
            email: 'sumathi.ece@sairam.edu.in',
            linkedin: 'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=...',
            imageSrc: '/h.jpeg'
        },

    ];
    const [scrolling, setScrolling] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (scrolling) {
            const scrollInterval = setInterval(() => {
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0; // Reset to the beginning
                } else {
                    container.scrollLeft += 2; // Adjust the scrolling speed as needed
                }
            }, 50); // Adjust the scrolling interval as needed

            return () => {
                clearInterval(scrollInterval);
            };
        }
    }, [scrolling]);




    const handleCardHover = () => {
        setScrolling(false);
    };

    const handleCardLeave = () => {
        setScrolling(true);
    };



    return (
        <>
            <Container><br />
                <Card className='text-center'>
                    <Card.Header style={{ fontWeight: 'bolder' }}>EXECUTIVE COMMITTEE</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0" style={{ fontWeight: 'bold' }}>
                            <p>
                                {' '}
                                "Great leaders are willing to sacrifice their own interests for the good of the team{' '}
                            </p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">John C.Maxwell</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <div className="members-container" ref={containerRef}>
                    <div className="members-scrollable">
                        {committeeMembers.map((member, index) => (
                            <Card style={{ width: "12rem" }} key={index} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
                                <Card.Img variant="top" src={member.imageSrc} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '14px', whiteSpace: 'normal', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0' }}>
                                        <strong> {member.name}</strong>
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: '12px', whiteSpace: 'normal' }}>
                                        {member.department}<br />
                                        {member.institution}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{member.role}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href={`mailto:${member.email}`} className="btn btn-primary">Mail ID</Card.Link>
                                    <Card.Link href={member.linkedin} className='linh'>LinkedIn</Card.Link>
                                </Card.Body>
                            </Card>


                        ))}
                    </div>
                </div>< br/> 
                <Card className="text-center">
                    <Card.Header as="h3" >GET MEMBERSHIP</Card.Header>
                    <Card.Body>
                        <Card.Text>The IETE membership is available at different levels based on the applicants' academic qualifications and practical experience in electronics, telecommunications, computers, information technology and related areas. Applicants are invited to seek the highest membership grade they are qualified for.
                        </Card.Text>
                        <Link to="/Membership" className='linh'>
                 
                  <ArrowRightCircle size={50} />
                </Link>
                    </Card.Body>
                </Card>
            </Container>
        </>

    );

}

export default Members;
