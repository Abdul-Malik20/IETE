import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Main from './Main'; 
import '../Styles/About.css'

function About() {
  const [showMain, setShowMain] = useState(false);

  const handleReadMoreClick = () => {
    setShowMain(true);
  };

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>"INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR NEW INDIA"</Card.Title>
          <Card.Text><br/>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                <cite title="Source Title">NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA</cite>
              </footer>
            </blockquote>
          </Card.Text>
          <Button variant="primary" onClick={handleReadMoreClick}>About Us</Button>
        </Card.Body>
      </Card>

      {showMain && <Main className={showMain ? 'fade-in active' : 'fade-in'} />} 
    </div>
  );
}

export default About;
