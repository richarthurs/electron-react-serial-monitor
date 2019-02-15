import {
  OBC_SERIAL_RX,
  OBC_SERIAL_RX_DEV,
  SEND_COMMAND,
  SENT_COMMAND,
  INCREMENT_EPOCH,
  SWITCH_MOCK_OBC
} from "../actions/action-types";
import { strictEqual } from "assert";

const initialState = {
  obcdata: [],
  commands: [],
  timelinedata: [],
  timeline_count: 0, // A counter of how many data items we've received. 
  command_sent_count: 0,
  command_to_send: false,
  epoch: 0,
  mockOBC: false
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
        /* append a new object to the existing timelinedata list */
        timelinedata: [...state.timelinedata, {
          ...action.payload,
          counter: state.timeline_count
        }],
        timeline_count: state.timeline_count + 1
      };

    case OBC_SERIAL_RX_DEV:
      console.log("Data count:", state.timeline_count)
      return { ...state,
        timelinedata: [...state.timelinedata, {
          ...action.payload,
          counter: state.timeline_count
        }],
        timeline_count: state.timeline_count + 1
      };

    case SEND_COMMAND:
      console.log("Command", action.payload)
      return { ...state,
        commands: [...state.commands, {
          ...action.payload
        }],
        command_to_send: true
      };

    case SENT_COMMAND:
      return { ...state,
        commands: state.commands.slice(1),
        command_to_send: false,
        timelinedata: [
          ...state.timelinedata,
          {
            ...action.payload
          }
        ],
        timeline_count: state.timeline_count + 1
      };

    case INCREMENT_EPOCH:
      return { ...state,
        epoch: state.epoch + 1
      }

    case SWITCH_MOCK_OBC:
      return {...state, 
      mockOBC: action.payload.enable_mock
    }

    default:
      return state;
  }
};
export default rootReducer;
