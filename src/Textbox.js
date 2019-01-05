import React, {Component} from 'react';
import './App.css';
import {FormGroup, Label, Input} from 'reactstrap';

class Textbox extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        let selectedString = window.getSelection().toString();
        if (selectedString.length > 0) {
            var thisText = event.target.value;
            var start = thisText.indexOf(selectedString);
            var end = start + selectedString.length;
            if (start >= 0 && end >= 0) {
                console.log("start: " + start);
                console.log("end: " + end);
            }
        }
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="textbox">Copy your text below:</Label>
                    <Input type="textarea" name="textbox" id="textbox" className="textbox" onSelect={this.handleSelect}/>
                </FormGroup>
            </div>
        );
    }
}

export default Textbox;
