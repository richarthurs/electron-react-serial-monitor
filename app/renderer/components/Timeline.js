import React, { Component } from 'react'
import { connect } from "react-redux";
import Badge from 'react-bootstrap/lib/Badge';
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

/* Timeline component
https://hackernoon.com/how-to-redux-with-react-836ed6d85330
https://reactjs.org/docs/faq-styling.html
https://stackoverflow.com/questions/28567549/how-to-use-if-within-a-map-return/28567644
*/
class Timeline extends Component{
    render(){
        const timelineItems = this.props.timelinedata.map(function (timelinedata,timeline_count){
            let className = "";

            if (timelinedata.data_type == "COMMAND"){
                className += ' command';
                console.log("cmd");
            }
            return(
                <ListGroup.Item key={timelinedata.id} className={className}>

                <Row className="show-grid">
                <Col xs={2} md={1}>
                    <Badge pill variant="primary">{timelinedata.epoch_received}</Badge>
                </Col>
                
                <Col xs={4} md={7}>
                {timelinedata.text} 
                </Col>

                <Col xs={6} md={4}>
                    <Badge pill variant="success">{timelinedata.data_type}</Badge>
                </Col>
                </Row>
                </ListGroup.Item>  
            )
        }.bind(this));
                        
    // Return the layout
    return(
        <div>
        <ListGroup>
            {timelineItems}
        </ListGroup>
        </div>
    )}

}


/* Map State to Props
    - assign variables from state (the redux store) to this component's props
        - allows state information to be used in the layout
*/

const mapStateToProps = state => ({
    timelinedata: state.timelinedata,
});

const mapDispatch = dispatch => ({});

/* Magic to hook up the state to the props */
export default connect(
    mapStateToProps,
    mapDispatch
)(Timeline);
