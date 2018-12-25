import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Readline from '@serialport/parser-readline'
import {obcSerialRX, obcSerialRXDev, sentCommand} from "./actions/houston-actions";
import MainComponent from './components/MainComponent'

const launchpad = '/dev/tty.usbmodemHL512001';

// // Setup the serial port
// let sp = VirtualSerialPort;
// // SerialPort.Binding = FakePort;

// const OBCport = new sp(launchpad, {baudRate: 115200}, function() {
//     console.log('Connected to OBCPort', arguments); 
//     OBCport.write("BLOOP!");
// });

// // Parser will emit data events when the delimiter is detected
// // const parser = OBCport.pipe(new Readline({delimeter: '\r\n'}));

// // Print connection errors
// OBCport.on('error', function(err) {
//   console.log('Error: ', err.message)
// })

var SerialPort = require('serialport').SerialPort;

if (process.env.NODE_ENV == 'development') {
  SerialPort = require('virtual-serialport');
}

var sp = new SerialPort(launchpad, { baudrate: 115200 }); // still works if NODE_ENV is set to development!

sp.on('open', function (err) {

  sp.on("data", function(data) {
    console.log("From Arduino: " + data);
    store.dispatch(obcSerialRX(data))
  });

  if (process.env.NODE_ENV == 'development') {
    sp.on("dataToDevice", function(data) {
      // sp.writeToComputer(data + " " + data + "!");
      store.dispatch(obcSerialRXDev(data))
    });
  }

  sp.write("BLOOP"); 
});

setInterval(function() {
  sp.write("BLOOP");
}, 15 * 1000); // 60 * 1000 milsec


function stateChange(){
  let _state = store.getState();
  if(_state.commands.length > 0 && _state.command_to_send == true){
    console.log("Sending command: ", _state.commands[0])
    store.dispatch(sentCommand(_state.commands[0]));
  }
}

store.subscribe(stateChange)

// TODO: SerialPort.list will return good ports


// I think this is just an Electron thing
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

// Render the main component, the parent for everything else on the page
// Wrap the app and allow redux store access
ReactDOM.render(
  <Provider store={store}>  
    <MainComponent />
  </Provider>,
  rootElement,
);
