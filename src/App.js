import React, {Component} from 'react';
import './App.css';
import Textbox from './Textbox';
import Entities from './Entities';
import {Jumbotron, Container, Row, Col, FormGroup} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h5>Ganguit Annotation Tool</h5>
                        <hr className="my-2"/>

                        <Row>
                            <FormGroup>
                                <Col>
                                    <Entities/>
                                </Col>
                            </FormGroup>
                        </Row>

                        <Row>
                            <Col>
                                <Textbox/>
                            </Col>
                        </Row>

                    </Jumbotron>
                </Container>
            </div>
        );
    }
}

export default App;
