import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import SerialPort from 'serialport';
import Readline from '@serialport/parser-readline'
import {obcSerialRX} from "./actions/houston-actions";
import MainComponent from './components/MainComponent'


// Setup the serial port
const OBCport = new SerialPort('/dev/tty.usbmodemHL512001', {baudRate: 115200}, function() {
    console.log('Connected to OBCPort', arguments); 
});

// Parser will emit data events when the delimiter is detected
const parser = OBCport.pipe(new Readline({delimeter: '\r\n'}));

// Print connection errors
OBCport.on('error', function(err) {
  console.log('Error: ', err.message)
})

// Raw data logging into the console - re-enable if something is funky
// OBCport.on('data', function (data) {
//   console.log('RAW: Data:', data.toString('ascii'))
// })

// TODO: SerialPort.list will return good ports

// When parsed data is emitted, feed the data to the obcSerialRX action, which will cause it to be appended to the store's obcdata
parser.on('data', function (data) {
  console.log('Data:', data)
  store.dispatch(obcSerialRX(data))  // send out the action with the data
})

// I think this is just an Electron thing
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

// Render the main component, the parent for everything else on the page
ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  rootElement,
);
