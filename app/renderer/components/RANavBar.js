import React, { Component } from 'react'
import { connect } from "react-redux";
import Badge from 'react-bootstrap/lib/Badge';
import Col from "react-bootstrap/lib/Col"
import Row from "react-bootstrap/lib/Row"

class RANavBar extends Component {
  render() {
    return (
      <div>
      <p>sdf</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    epoch: state.epoch,
});

const mapDispatch = dispatch => ({});

/* Magic to hook up the state to the props */
export default connect(
    mapStateToProps,
    mapDispatch
)(RANavBar);

