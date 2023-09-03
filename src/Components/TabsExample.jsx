import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function TabsExample() {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            CHENNAI CENTER
                        </ListGroup.Item><br />
                        <ListGroup.Item action href="#link2">
                            GOALS
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content style={{ fontWeight: 'light', fontSize: '20px' }}>
                        <Tab.Pane eventKey="#link1"><i>Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.
                            <br />The Centre assigns top priority to the basic need for ‘education transformation’ in keeping pace with time, and aims at to develop the highest quality of manpower to cater to the needs & expectations of industry, R&D and educational institutions, with higher degree of employability for today and tomorrow.</i><br />
                        <br/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2"><span style={{ fontWeight: 'bolder' }}>Vision:</span> <i>Reaching the un-reached and empowering the youth through Technical Education and Skill Development.</i>
                            <br /><span style={{ fontWeight: 'bolder' }}>Mission: </span><i>Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.</i>
                            <br /><span style={{ fontWeight: 'bolder' }}>Motives: </span><i>IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme.</i><br /><br></br>
                            <br /></Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabsExample;