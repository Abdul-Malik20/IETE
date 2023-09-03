import React, { useEffect } from 'react';
import "../Styles/Home.css";
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Faq from './Faq';
import { ArrowReturnRight, ArrowRightCircle } from 'react-bootstrap-icons';
import { Routes, Link, Route } from 'react-router-dom';
import Events from './Events';
import Members from './Members';


const Home = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const headline = document.querySelector('.headline');

    const tl = new window.TimelineMax();

    tl.fromTo(
      hero,
      1,
      { height: '0%' },
      { height: '80%', ease: window.Power2.easeInOut }
    )
      .fromTo(
        hero,
        1.2,
        { width: '100%' },
        { width: '80%', ease: window.Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: '-100%' },
        { x: '0%', ease: window.Power2.easeInOut },
        '-=1.2'
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      );
  }, []);

  return (
    <Container fluid>
      <header>
        <section>
          <div className="hero">
            <img
              src="/homebg2.jpg"
              alt="biking"
            />
            <h3 className="headline">IETE</h3>
          </div>
        </section>
      </header>

      <div className="slider" />
      <br /><br /><br />< br />

      <Container>
        <Carousel >
          <Carousel.Item >
            <Card className="text-center" >
              <Card.Body style={{backgroundColor:'#FAF3F0'}}>
                <Card.Title><strong>The Institution of Electronics and Telecommunication Engineers</strong></Card.Title>
                <hr /><Card.Text>
                  Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, information Technology & other related disciplines.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Carousel.Item>
          <Carousel.Item>

            <Card className="text-center" >
              <Card.Body style={{backgroundColor:'#FAF3F0'}}>
                <Card.Title><strong>The Institution of Electronics and Telecommunication Engineers,Chennai</strong></Card.Title>
                <hr /><Card.Text>
                  Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.
                </Card.Text><br/>
              </Card.Body>
            </Card>

          </Carousel.Item>
          <Carousel.Item>

            <Card className="text-center" >
              <Card.Body style={{backgroundColor:'#FAF3F0'}}>
                <Card.Title><strong>The Institution of Electronics and Telecommunication Engineers, Chennai</strong></Card.Title>
                <hr /><Card.Text>
                  <strong>Motives: </strong>IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme.
                </Card.Text>
              </Card.Body>
            </Card>
            <br /> <br />
          </Carousel.Item>
        </Carousel>

        <hr />
        <h4>Events</h4>
        
            <Card style={{ width: '100%',backgroundColor:'#FAF3F0' }} className="text-center">
              <Card.Body>
                <Card.Title>PROFESSIONAL RESUME WRITING</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">17/10/20</Card.Subtitle>
                <Card.Text>
                  Mr. M. Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner
                </Card.Text>
                <Link to="/Events" className='linh'>
                  <h5>MORE EVENTS..</h5>
                  <ArrowRightCircle size={50} />
                </Link>
              </Card.Body>
            </Card><br/>
         

          <h4>Executive Committee</h4>
            <Card style={{ width: '100%',backgroundColor:'#FAF3F0' }} className="text-center">
              <Card.Body>
                <Card.Title>"Great leaders are willing to sacrifice their own interests for the good of the team"</Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">- John C. Maxwell</Card.Subtitle>
                <Link to="/Member" className='linh'>
                  <h5>Meet Our Executive Committee</h5>
                  <ArrowRightCircle size={50} />
                </Link>
                <Routes><Route path='/Member' element={<Members />} /></Routes>

              </Card.Body>
            </Card>
            <hr/>
         
<br/>
        <h3>Frequently Asking Questions</h3>
        <Faq />
      </Container>
      <Routes>
        <Route path='/Events '  element={<Events />} />
        
      </Routes>

    </Container>

  );
};

export default Home;