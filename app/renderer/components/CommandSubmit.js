import React, { Component } from 'react'
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {sendCommand} from '../actions/houston-actions'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

function mapDispatchToProps(dispatch) {
    return {
      sendCommand: command => dispatch(sendCommand(command))
    };
}

class CommandSubmitter extends Component {
    constructor() {
      super();
      this.state = {
        command_input: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      const { command_input } = this.state;
      const id = uuidv1();
      this.props.sendCommand({ command_input, id });
      this.setState({ command_input: "" });
    }
    render() {
      const { command_input } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
        <Row>
        <Col xs={8} md={10}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                id="command_input"
                value={command_input}
                onChange={this.handleChange}
                />
            </div>
        </Col>
        <Col xs={4} md={2}>
            <button type="secondary" className="btn btn-secondary btn-md">
            Send
            </button>
        </Col>
        </Row>
        </form>
      );
    }
  }
  const CommandSubmitForm = connect(null, mapDispatchToProps)(CommandSubmitter);
  export default CommandSubmitForm;




