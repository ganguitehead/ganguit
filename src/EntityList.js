import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class EntityList extends Component {

    render() {
        return (
            <div>
                <h5 className={(this.props.items.length > 0) ? 'd-block' : 'd-none'}>Added Entities</h5>
                <ListGroup>
                    {this.props.items.map((item, index) => (
                        <ListGroupItem key={item.id} className={(index > 0) ? 'mt-2' : ''}>
                             <FontAwesomeIcon icon="trash" className="float-right icon"/> {item.text}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default EntityList;
