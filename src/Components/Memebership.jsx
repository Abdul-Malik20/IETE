import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Category from './Category';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Membership() {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Card className="text-center">
        <Card.Header as="h3" >MEMBERSHIP</Card.Header>
        <Card.Body>
          <Card.Text>The IETE membership is available at different levels based on the applicants' academic qualifications and practical experience in electronics, telecommunications, computers, information technology and related areas. Applicants are invited to seek the highest membership grade they are qualified for.
          </Card.Text>
          <div>
            <Button onClick={() => setShow(true)} variant="success">
              WHY JOIN US ?
            </Button>
            
            {show && (
              <Alert variant="success">
                <Alert.Heading>WHY JOIN US ?</Alert.Heading>
                <p>
                  IETE Student Forum arranges frequent meetings of student members together with experts / academic / R & D / industry leaders as well as IETE centre’s executive committee members. Programmers of common interest may also be arranged involving students forum at many institutions in a city, region etc. Students after completing their degrees will become proud corporate members of IETE and can write after their name BE. AMIETE, with less fees (deducting the fee paid for the forum)
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me
                  </Button>
                </div>
              </Alert>
            )}
          </div>
        </Card.Body>
      </Card><br></br>
      <Category />
    </Container>
  );
}

export default Membership;