import { OBC_SERIAL_RX } from "../actions/action-types";

const initialState = {
  obcdata: [],
  obcdata_count: 0  // A counter of how many data items we've received. 
};

/* Reducer
    - takes in the state (the current state)
    - takes in an action (an action type string + some other data usually)
    - switch on the action, and depending on which action occurred, modify the state appropriately
        - we only ever append to the state
*/
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBC_SERIAL_RX:
        console.log("Data count:", state.obcdata_count)
        return { ...state, 
                /* obcdata: append a new object to the existing obcdata list with the following fields: {receivedStr: <string from serial port>, counter: <an integer pulled from the existing state>}*/
                obcdata: [...state.obcdata, {receivedStr: action.payload.receivedStr, counter: state.obcdata_count}], 
                obcdata_count: state.obcdata_count + 1 };   // increment the obcdata_count too, it'll be used next time 
    
    // todo: add other action types here
    default:
      return state;
  }
};
export default rootReducer;