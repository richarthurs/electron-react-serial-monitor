import { OBC_SERIAL_RX, OBC_SERIAL_RX_DEV, SEND_COMMAND, SENT_COMMAND } from "./action-types"; // snag the action type string
import hash from "object-hash"
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

export function obcSerialRX(obcdata_in){
    return({
        type: OBC_SERIAL_RX,
        payload: {
            data_type: "OBC RX",
            id: hash({text: obcdata_in, time: 23}), // todo: hash the time too
            text: obcdata_in,
            epoch_received: 0   // todo
        }
    });
}

export function obcSerialRXDev(obcdata_in){
    return({
        type: OBC_SERIAL_RX_DEV,
        payload: {
            data_type: "OBC RX",
            id: hash({text: obcdata_in, time: 23}), // todo: hash the time too
            text: obcdata_in,
            epoch_received: 0   // todo
        }
    });
}


export function sendCommand(cmd_input){
    return({
        type: SEND_COMMAND,
        payload: {
            data_type: "COMMAND",
            id: hash({text: cmd_input.text}),
            text: cmd_input.command_input,
            epoch_sent: 0   // todo
        }
    });
}

export function sentCommand(command){

    return({type: SENT_COMMAND, payload: command});
}





export function sendCommand2(payload){
    return({
        type: SEND_COMMAND,
        payload: {
            data_type: "COMMAND",
            id: hash({text: payload}),
            text: payload,
            epoch_sent: 0   // todo
        }
    });
}