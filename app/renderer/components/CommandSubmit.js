import React, { Component } from 'react'
import { connect } from "react-redux";
import uuidv1 from "uuid";
import {sendCommand} from '../actions/houston-actions'

function mapDispatchToProps(dispatch) {
    return {
      sendCommand: command => dispatch(sendCommand(command))
    };
}

class CommandSubmitter extends Component {
    constructor() {
      super();
      this.state = {
        title: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
      event.preventDefault();
      const { title } = this.state;
      const id = uuidv1();
      this.props.sendCommand({ title, id });
      this.setState({ title: "" });
    }
    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="secondary" className="btn btn-secondary btn-lg">
            SUBMIT
          </button>
        </form>
      );
    }
  }
  const CommandSubmitForm = connect(null, mapDispatchToProps)(CommandSubmitter);
  export default CommandSubmitForm;




