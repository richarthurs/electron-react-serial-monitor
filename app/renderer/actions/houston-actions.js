import { OBC_SERIAL_RX, OBC_SERIAL_RX_DEV, SEND_COMMAND, SENT_COMMAND, INCREMENT_EPOCH, SWITCH_MOCK_OBC} from "./action-types"; // snag the action type string
import hash from "object-hash";
import store from '../store';

/*  Actions
    - actions return an object with (minimally) a field called "type," which is a string describing the action to take
        - the reducer will switch on the action string to modify the state appropriately
        - we don't use a string directly, we use OBC_SERIAL_RX which is defined in action-types.js to keep things easier to coordinate
    - we also pass some data into the action (obcdata_in), which the reducer can then pull out and append to the state (or whatever)

    - That's all an action does! Spits out an object with a string called "type", and optionally some data that may be used in changing the state. 

This action returns the following object:
{
type: OBC_SERIAL_RX (but turned into a string)
payload: {
        receivedStr: obcdata_in (a string from the serial port)
        // todo: maybe other things in the future?
    }
}
*/

function get_epoch(){
    let state = store.getState();
    return(state.epoch);
}

export function obcSerialRX(obcdata_in){
    return({
        type: OBC_SERIAL_RX,
        payload: {
            data_type: "OBC RX",
            id: hash({text: obcdata_in, timestamp: Date()}), 
            text: obcdata_in,
            epoch_received: get_epoch()  
        }
    });
}

export function obcSerialRXDev(obcdata_in){
    return({
        type: OBC_SERIAL_RX_DEV,
        payload: {
            data_type: "OBC RX - DEV",
            id: hash({text: obcdata_in, timestamp: Date()}), 
            text: obcdata_in,
            epoch_received: get_epoch() 
        }
    });
}


export function sendCommand(cmd_input){
    return({
        type: SEND_COMMAND,
        payload: {
            data_type: "COMMAND",
            id: hash({text: cmd_input.text, timestamp: Date()}),
            text: cmd_input.command_input,
            epoch_sent: get_epoch() 
        }
    });
}

export function sentCommand(command){
    return({type: SENT_COMMAND, payload: command});
}


export function incrementEpoch(){
    return({type: INCREMENT_EPOCH});
}

export function switchMockOBC(mock_en){
    return({type: SWITCH_MOCK_OBC, payload: {enable_mock: mock_en}})

}