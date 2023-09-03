import { Card, Container, ListGroup, Dropdown } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ArrowRight, ArrowRightCircle, CaretRightFill } from 'react-bootstrap-icons';

function Category() {
    return (
        <><Container>
            <Tabs
                defaultActiveKey="Corporate Members"
                id="Category"
                className="mb-3 justify-content-center mx-auto"
                style={{ gap: '50px' }}
            >
                <Tab eventKey="Corporate Members" title="Corporate Members">
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">Corporate Members</Card.Subtitle>
                                <Card.Text>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item>Honorary fellow (HF) (elected)</ListGroup.Item>
                                        <ListGroup.Item>Distinguished Fellow (DF) (elected)</ListGroup.Item>
                                        <ListGroup.Item>Fellow(F)</ListGroup.Item>
                                        <ListGroup.Item>Member(m)</ListGroup.Item>
                                        <ListGroup.Item>Associate Member (AM)</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Card.Text>Click Below to learn more about the Eligibility Criteria and other details</Card.Text>
                                <div className="d-flex justify-content-center align-items-center"><a href="https://iete.org/index111.html" className='linh' ><ArrowRightCircle size={50} /></a></div>
                            </Card.Body>
                        </Card></div>
                </Tab>
                <Tab eventKey="Non-Corporate Members" title="Non-Corporate Members" >
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">Non-Corporate Members</Card.Subtitle>
                                <Card.Text>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item>Associate (A)</ListGroup.Item>
                                        <ListGroup.Item>Organisational Member (ORG)</ListGroup.Item>
                                        <ListGroup.Item>Student (AMIETE)</ListGroup.Item>
                                        <ListGroup.Item>DIPIETE Student (DipIETE)</ListGroup.Item>
                                        <ListGroup.Item>Diploma Member (DipIETE Passout) (DIP)</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Card.Text>Click Below to learn more about the Eligibility Criteria and other details</Card.Text>
                                <div className="d-flex justify-content-center align-items-center"><a href="https://iete.org/index111.html" className='linh' ><ArrowRightCircle size={50} /></a></div>
                            </Card.Body>
                        </Card></div>
                </Tab>
            </Tabs>
            <br />
            <hr></hr>
            <br />
            <Dropdown className="d-flex justify-content-center align-items-center">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Click on the link to access the forms:
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item href="https://iete.org/IETE1_CORPUP.pdf">Corporate Member</Dropdown.Item>
                    <Dropdown.Item href="https://iete.org/CE_Formup.pdf">Chartered Engineer</Dropdown.Item>
                    <Dropdown.Item href="https://iete.org/orgmemup.pdf">Organisational Member</Dropdown.Item>
                    <Dropdown.Item href="https://iete.org/AMMEM.pdf">AMIETE</Dropdown.Item>
                    <Dropdown.Item href="https://iete.org/DIPMEM.pdf">DIPIETE</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br />
            <hr></hr>
            <br />
        </Container></>
    );
}

export default Category;