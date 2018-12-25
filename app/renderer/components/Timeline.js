import React, { Component } from 'react'
import { connect } from "react-redux";
import Badge from 'react-bootstrap/lib/Badge';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

/* Map State to Props
    - assign variables from state (the redux store) to this component's props
        - allows state information to be used in the layout
*/
const mapStateToProps = state => {
    return { timelinedata: state.timelinedata};
  };


/* OBCDataList component
    - obcdata prop gets information from the redux store
    - loop through the array, pull out fields, create list items
*/
const OBCDataList = ({ timelinedata }) => (
    <div>
    <ListGroup>
        {timelinedata.map(timelinedata => (
            <ListGroup.Item key={timelinedata.timeline_count}>

            <Row className="show-grid">
            <Col xs={12} md={8}>
                <Badge pill variant="primary">{timelinedata.epoch_received}</Badge>
                {timelinedata.text} 
            </Col>
            <Col xs={6} md={4}>
                <Badge pill variant="success">{timelinedata.data_type}</Badge>
            </Col>
            </Row>
            </ListGroup.Item>
        ))}
    </ListGroup>
    </div>
);

/* Magic to hook up the state to the props */
const Timeline = connect(mapStateToProps)(OBCDataList);
export default Timeline;  /* the name of this component */
