# Electron + React + Redux Serial Monitor
- created from [electron-react-redux boilerplate](github.com:jschr/electron-react-redux-boilerplate)


## Quick start
1. clone this repo
2. `cd electron-react-redux-boilerplate`
3. `npm install`
4. `npm run develop`
5. In `app.js`, change the serial port location on line 12 to a connected device

![alt text](https://github.com/richarthurs/electron-react-serial-monitor/blob/master/doc/screenshot.png "Screenshot")


## Notes From Development
npm install of electron-forge failed due to some dependency wanting python 2.7 for a bloody print statement in the install process ... srsly

solution: npm config set python /usr/bin/python - https://community.particle.io/t/particle-cli-update-fails-on-macos-10-13-6-due-to-python-version/44259

npm install -g electron-forge

Still won't see electron-forge ... arg time to do something else

Started with this boilerplate: https://github.com/jschr/electron-react-redux-boilerplate


---- Installing serialport
- can't require serialport (webpack no like)
- had to add the webpack config here: https://github.com/node-serialport/node-serialport/issues/901
- had to remove node_modules/serialport and npm install again
- serialport can be imported correctly (still not using require though) https://stackoverflow.com/questions/36197282/es2015-import-alternative-for-require

---- Setting up react and redux store
https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_who_this_guide_is_for
- removed a lot of stuff from the boilerplate to get this working

## Troubleshooting 
* `EENOINT` error when running `npm run build`: delete the `build` directory

