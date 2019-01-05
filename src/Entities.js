import React, {Component} from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Col,
    FormGroup,
    Input,
    Row,
    Container
} from 'reactstrap';
import EntityList from './EntityList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Entities extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false, entities: []};

        this.addNewEntity = this.addNewEntity.bind(this);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    addNewEntity(e) {
        if (e.key === 'Enter') {
            var entityName = e.target.value;

            const newItem = {
                text: entityName,
                id: Date.now()
            };

            this.setState(state => ({
                entities: state.entities.concat(newItem)
            }));

            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>
                    New Entities
                </Button>
                <Collapse isOpen={this.state.collapse}>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col sm="6" xs="6">
                                            <FormGroup>
                                                <h5>
                                                    <FontAwesomeIcon icon="plus-circle"/> Entity Type
                                                </h5>
                                                <Input type="text" name="newEntityName" id="newEntityName"
                                                       placeholder="Entity Name" onKeyPress={this.addNewEntity}/>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6" xs="6">
                                            <EntityList items={this.state.entities}/>
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        );
    }
}

export default Entities;
