import { OBC_SERIAL_RX } from "./action-types"; // snag the action type string
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

export const obcSerialRX = obcdata_in => ({ type: OBC_SERIAL_RX, payload: {receivedStr: obcdata_in} });
