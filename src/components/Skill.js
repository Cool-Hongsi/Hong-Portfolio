import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/Skill.css';

export default class Skill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render(){
        
        return(
            <div id="skill">
                <div className="skill-data">
                    <Nav tabs className="Nav">
                        <Row>
                            <Col xs="6" sm="3" md="3" lg="3" xl="3">
                                <NavItem className="NavItem">
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    >
                                    Front
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="6" sm="3" md="3" lg="3" xl="3">
                                <NavItem className="NavItem">
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    >
                                    Back & DB
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="6" sm="3" md="3" lg="3" xl="3">
                                <NavItem className="NavItem">
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    >
                                    OOP
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="6" sm="3" md="3" lg="3" xl="3">
                                <NavItem className="NavItem">
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}
                                    >
                                    Other
                                    </NavLink>
                                </NavItem>
                            </Col>
                        </Row>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">HTML (2 Years)</CardTitle>
                                    <CardText className="cardText">Proficient Tag Handling, Jade Template</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">CSS (1 Year)</CardTitle>
                                    <CardText className="cardText">Responsive App (Grid & Media), Bootstrap, Basic Design</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">Javascript (2 Years)</CardTitle>
                                    <CardText className="cardText">ES6, Apply Libraries, DOM, Fetch, Handling JSON, Partial jQuery & Ajax</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">ReactJS (1 Year)</CardTitle>
                                    <CardText className="cardText">Handling Props & State, Lifecycle, Router, Axios, Single-page App, User-interface Component</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">NodeJS (1 Year)</CardTitle>
                                    <CardText className="cardText">Asynchronous (Promise), Combine DB, MVC Design, REST API, Modules (Socket, HandleBar, etc), Partial Webpack & Babel</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">Python ( - )</CardTitle>
                                    <CardText className="cardText">is studying</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">MySQL & PostgreSQL (1 Year)</CardTitle>
                                    <CardText className="cardText">Handling SQL Command, CRUD, Table & Data Structure</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">MongoDB (1 Year)</CardTitle>
                                    <CardText className="cardText">Methods for NoSQL, CRUD, Data Structure</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">Java (1 Year)</CardTitle>
                                    <CardText className="cardText">Class Structure, Inheritance, GUI, Lamda</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">C++ (1 Year)</CardTitle>
                                    <CardText className="cardText">Class Structure, Inheritance, STL, Operator, Pointer</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">AWS (1 Year)</CardTitle>
                                    <CardText className="cardText">EC2, S3, RDS</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">GIT (1 Year)</CardTitle>
                                    <CardText className="cardText">Deploy to Heroku, reset, branch, merge, tag</CardText>
                                    </Card>
                                </Col>
                                <Col xs="12" sm="6" md="6" lg="6" xl="6">
                                    <Card body className="card">
                                    <CardTitle className="cardTitle">Linux (1 Year)</CardTitle>
                                    <CardText className="cardText">Command, Partial Bash Scripting</CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}