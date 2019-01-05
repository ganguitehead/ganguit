import React, {Component} from 'react';
import './App.css';
import Textbox from './Textbox';
import Entities from './Entities';
import {Jumbotron, Container, Row, Col, FormGroup} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faPlusCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)
library.add(faPlusCircle)

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h5>Ganguit Annotation Tool</h5>
                        <hr className="my-2"/>

                        <Row>
                            <Col>
                                <Entities/>
                            </Col>
                        </Row>

                        <br/>

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
