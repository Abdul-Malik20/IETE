import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TabsExample from './TabsExample';
import Counts from './Counts';
import Colleges from './Colleges';

function Main() {
    return (
        <Container>
            <br />
            <Row className='text-center'>
                <Col>
                    <h2 style={{ textAlign: 'start' }}>
                        IETE
                    </h2>
                    <p style={{ textAlign: 'start',fontWeight:'bold', fontSize: '20px'}}>
                        Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO). The Institution has also been notified as an Educational Institution of National Eminence by the Government of India. IETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive. The Institution is managed through various Committees and Boards nominated by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed by respective Executive Committees. To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members.
                    </p>
                </Col>
            </Row>
            <br/>
            <TabsExample />
            <Counts/>
            
            <Colleges />
        </Container>
    );
}

export default Main;