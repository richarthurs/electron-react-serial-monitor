import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import SerialPort from 'serialport';
import Readline from '@serialport/parser-readline'
import {obcSerialRX, obcSerialRXDev, sentCommand, incrementEpoch} from "./actions/houston-actions";
import MainComponent from './components/MainComponent'
import OBCSim from './simulation/obc-sim'

const launchpad = '/dev/tty.usbmodemHL512001';

const use_real_port = false;


// Fake serial port
// var SerialPort = require('serialport');

// if (process.env.NODE_ENV == 'development') {
//   SerialPort = require('virtual-serialport');
// }

const obc = new OBCSim();
var SerialPort = require('serialport').SerialPort;

if (process.env.NODE_ENV == 'development') {
  SerialPort = require('virtual-serialport');
}

var sp = new SerialPort(launchpad, { baudrate: 115200 }); // still works if NODE_ENV is set to development!

sp.on('open', function (err) {

  if(use_real_port){
    real_parser.on("data", function(data) {
      console.log("From serial: " + data);
      store.dispatch(obcSerialRX(data))
    });
  }


  if (process.env.NODE_ENV == 'development') {
    sp.on("dataToDevice", function(data) {
      // sp.writeToComputer(data + " " + data + "!");
      store.dispatch(obcSerialRXDev(data))
    });
  }

  sp.write("Connected!"); 
});

/* OBC Data Simulator */
setInterval(function() {
  sp.write(obc.sayRandom());
}, 15 * 1000); // 60 * 1000 milsec


/* Epoch Tick */
setInterval(function() {
  store.dispatch(incrementEpoch());
}, 1000);

/* State Change Handler */
function stateChange(){
  let _state = store.getState();

  /* Send commands when they are added */
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
