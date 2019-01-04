import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class EntityList extends Component {

    render() {
        return (
            <div>
                <ListGroup>
                    {this.props.items.map(item => (
                        <ListGroupItem key={item.id}> {item.text} </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default EntityList;
