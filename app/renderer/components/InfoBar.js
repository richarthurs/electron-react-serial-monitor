import React, { Component } from 'react'
import { connect } from "react-redux";
import Badge from 'react-bootstrap/lib/Badge';
import Col from "react-bootstrap/lib/Col"
import Row from "react-bootstrap/lib/Row"

class InfoBar extends Component {
  render() {
    return (
      <div>
        <Row className="info-bar">

        <Col xs={8} md={9}>
        </Col>

        <Col xs={4} md={3}>
            Epoch: <Badge pill variant="primary">{this.props.epoch}</Badge>
        </Col>
        </Row>
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
)(InfoBar);

