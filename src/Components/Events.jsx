import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import "../Styles/Events.css"
import Tooltip from 'react-bootstrap/Tooltip'; // Import Tooltip
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Events() {
  const eventsData = [
    {
      title: 'PROFESSIONAL RESUME WRITING',
      subtitle: '17/10/20',
      text: 'Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner',
      image: '/1.jpeg', 
    }, {
      title: 'EVOLUTION OF COMPUTING AND SKILL SETS FOR THE FUTURE',
      subtitle: '17/10/20',
      text: 'Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software',
      image: '/2.jpeg', 
    }, {
      title: 'EASE THE ERROR 1.0',
      subtitle: '10-11/10/20',
      text: '24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas',
      image: '/3.jpeg', 
    }, {
      title: '5G AND IT’S HISTORYs',
      subtitle: '20/09/20',
      text: 'Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks',
      image: '/4.jpeg', 
    }, {
      title: 'COVID 19 AND AI SOLUTIONS',
      subtitle: '05/09/20',
      text: 'Quiz on ‘COVID19 and AI Solutions”. The event started with the note on ‘Revering of knowledge',
      image: '/5.jpeg', 
    }, {
      title: 'OCEAN TECHNOLOGY IN NIOT',
      subtitle: '29/08/20',
      text: 'Mr.TATA SUDHAKAR (former IETE Che Chairman) explained about the role of Ocean Technology for society, Coastal Protection',
      image: '/6.jpeg', 
    }, {
      title: 'A REALISTIC APPROACH TOWARDS DATA SCIENCE',
      subtitle: '23/08/20',
      text: 'Mr.Sivasubramanian (Business Intelligence & Data Analyst)covered various topics on data science like the sectors',
      image: '/7.jpeg', 
    }, {
      title: 'MATLAB PROGRAMMING TECHNIQUES',
      subtitle: '22/08/20',
      text: 'DR.Markkandan (Asst. Professor, Anand Institute of Higher Technology) talked about MATLAB Fundamentals, Applications, Sample Matlab',
      image: '/8.jpeg', 
    }, {
      title: 'ELECTRONIC CONTROL UNIT FOR HEAVY DUTY TRUCKS',
      subtitle: '14/08/20',
      text: 'Mr.K.V.Nagesh (Founder and Managing Director of Data Care Systems) talked on speaking about engine cooling, speed & preheat control',
      image: '/1.jpeg', 
    }, {
      title: 'RECENT TRENDS IN OPTICAL COMMUNICATION SYSTEMS',
      subtitle: '08/08/20',
      text: 'Sri A.Sadagopan (Asst. General Manager(Retd.), BSNL talked on Recent Trends in optical Communication',
      image: '/2.jpeg', 
    }, {
      title: 'SOFTWARE DESIGN ASPECTS OF WLAN ACCESS POINTS',
      subtitle: '25/07/20',
      text: 'Mr. Ashok Govindarajan (Head of Wireless Networks, Zilogic) started the session with how WLAN access points',
      image: '/3.jpeg', 
    }, {
      title: 'GPS AND BEYOND: AN INTRODUCTION TO SATELLITE POSTITONING SYSTEM',
      subtitle: '11/07/20',
      text: 'DR.K.M.Sivakholundu (Vice Chancellor, IMU) talked on GPS: Space Segment, Navigation message, GPS Ranging',
      image: '/4.jpeg', 
    }, {
      title: 'AN INTRODUCTION TO IoT AND APPLICATIONS',
      subtitle: '04/07/20',
      text: 'Mr.G.L.GangaPrasad (Senior Director, CFDOAC) talked on Basics of IoT, why IoT, components, communication',
      image: '/5.jpeg', 
    },
  ];


  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const cardContainerRef = useRef(null);

  useEffect(() => {
    const container = cardContainerRef.current;
    const cards = container.querySelectorAll('.card');
    const containerWidth = container.offsetWidth;

    let currentCardIndex = 0;
    let animationInterval;

    const animateScroll = () => {
      if (container.scrollLeft >= currentCardIndex * containerWidth) {
        cards[currentCardIndex].classList.remove('active');
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        cards[currentCardIndex].classList.add('active');
      }

      if (container.scrollLeft >= (cards.length - 1) * containerWidth) {
        container.scrollLeft = 0;
        currentCardIndex = 0;
      } else {
        container.scrollLeft += 1; 
      }
    };

    animationInterval = setInterval(animateScroll, 50); 

    container.addEventListener('mouseenter', () => {
      clearInterval(animationInterval);
    });

    container.addEventListener('mouseleave', () => {
      animationInterval = setInterval(animateScroll, 50);
    });

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const scrollContainer = (scrollValue) => {
    cardContainerRef.current.scrollLeft += scrollValue;
  };

  return (
    <Container><br/>
      <Card body className='text-center' ><h2><strong><i>EVENTS</i></strong></h2></Card><br/>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',border:'2px solid',backgroundColor:'#A1CCD1' }}>
      <h5 className="card-title">Webinar on IoT Security(WISE-2022)</h5>
      <p className="font-italic text-center"> on 30th May, 2022</p>
      <p className="card-text" style={{ textAlign: 'center' }}><b>SETS Chennai &amp; C-DAC Hyderabad in collaboration with ISEA</b></p>
      <hr />
      <p className="text-center">All interested members are requested to register at the following link to participate in the webinar</p>
      <a target="_blank" href="https://infosecawareness.in/wise2022" className="linh">Weblink</a>
      <br />
      <p className="text-center"><b>Participation certificate will be issued to all the registered participants after attending all the sessions.</b></p>
    </div><br/>
    <hr></hr><br/>
    <div className="card-scroll-container">
        <div className="card-container" ref={cardContainerRef}>
          {eventsData.map((event, index) => (
            <OverlayTrigger
              key={index}
              placement="top" 
              overlay={<Tooltip>TAP TO VIEW POSTER</Tooltip>}
            >
              <Card
                className={`card ${index === 0 ? 'active' : ''}`}
                onClick={() => handleCardClick(event)}
                style={{backgroundColor:'#D71313',color:'aliceblue'}}
              >
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 ">{event.subtitle}</Card.Subtitle>
              </Card.Body>
              </Card>
            </OverlayTrigger>
          ))}
        </div>
      </div>

      <div className="scroll-buttons">
        <button className="scroll-left" onClick={() => scrollContainer(-150)}>
          &lt;
        </button>
        <button className="scroll-right" onClick={() => scrollContainer(150)}>
          &gt;
        </button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <Card.Text>{selectedEvent?.text}</Card.Text>
              {selectedEvent?.image && (
                <>
                  <img src={selectedEvent.image} alt="Event Poster" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
                  <Button variant="secondary" onClick={handleCloseModal} style={{ marginTop: '10px' }}>
                    Close
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </Container >
  );
}

export default Events;