import React, { Component } from 'react'
import { connect } from "react-redux";
import Badge from 'react-bootstrap/lib/Badge';
import ListGroup from 'react-bootstrap/lib/ListGroup'

/* Map State to Props
    - assign variables from state (the redux store) to this component's props
        - allows state information to be used in the layout
*/
const mapStateToProps = state => {
    return { obcdata: state.obcdata};
  };


/* OBCDataList component
    - obcdata prop gets information from the redux store
    - loop through the array, pull out fields, create list items
*/
const OBCDataList = ({ obcdata }) => (
    <div>
    <ListGroup>
        {obcdata.map(obcdata => (
            <ListGroup.Item key={obcdata.counter}>
                <Badge pill variant="primary">{obcdata.counter}</Badge>
                {obcdata.receivedStr} 
            </ListGroup.Item>
        ))}
    </ListGroup>
    </div>
);

/* Magic to hook up the state to the props */
const SerialData = connect(mapStateToProps)(OBCDataList);
export default SerialData;  /* the name of this component */
