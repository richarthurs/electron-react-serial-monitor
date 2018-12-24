import {
  OBC_SERIAL_RX,
  OBC_SERIAL_RX_DEV,
  SEND_COMMAND,
  SENT_COMMAND
} from "../actions/action-types";

const initialState = {
  obcdata: [],
  commands: [],
  timelinedata: [],
  timeline_count: 0, // A counter of how many data items we've received. 
  command_sent_count: 0,
  command_to_send: false
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
      console.log("Data count:", state.timeline_count)
      return { ...state,
        /* obcdata: append a new object to the existing obcdata list with the following fields: {receivedStr: <string from serial port>, counter: <an integer pulled from the existing state>}*/
        timelinedata: [...state.timelinedata, {
          msgType: "OBC_RAW",
          IOtype: "From OBC",
          receivedStr: action.payload.receivedStr,
          counter: state.timeline_count
        }],
        timeline_count: state.timeline_count + 1
      }; // increment the obcdata_count too, it'll be used next time 

    case OBC_SERIAL_RX_DEV:
      console.log("Data count:", state.timeline_count)
      return { ...state,
        /* obcdata: append a new object to the existing obcdata list with the following fields: {receivedStr: <string from serial port>, counter: <an integer pulled from the existing state>}*/
        timelinedata: [...state.timelinedata, {
          msgType: "OBC_RAW",
          IOtype: "From OBC - DEV",
          receivedStr: action.payload.receivedStr,
          counter: state.timeline_count
        }],
        timeline_count: state.timeline_count + 1
      }; // increment the obcdata_count too, it'll be used next time 

    case SEND_COMMAND:
      console.log("Command", action.payload)
      return { ...state,
        commands: [...state.commands, {
          IOtype: "Command",
          receivedStr: action.payload.title
        }],
        command_to_send: true
      };

      case SENT_COMMAND:
        return {...state, 
          commands: state.commands.slice(1),
          command_to_send: false, 
          timelinedata: [
            ...state.timelinedata,
            {
              msgType: "COMMAND",
              IOtype: "User",
              receivedStr: "sdfsdf",
              counter: state.timeline_count
            }],
            timeline_count: state.timeline_count + 1
        };

      // todo: add other action types here
    default:
      return state;
  }
};
export default rootReducer;
