import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ProfileDetails from '../../Components/Users/ProfileDetails';
import ProfileDetailsEdit from '../../Components/Users/ProfileDetailsEdit';
function Profile(props) {
    const [key, setKey] = useState('home');
    return (
        <div className="profile-sevtion" id="profile-section">
            <div className="">
                <div className="container">
                    <div className="col-lg-12">
                        <Jumbotron>
                            <div className="content">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">User Details</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Edit Details</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9} className="bg-white">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <ProfileDetails />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <ProfileDetailsEdit />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;