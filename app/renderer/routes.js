import React from 'react';
import { Switch, Route } from 'react-router';

import MainComponent from './components/MainComponent'

/* Routes
    - routes are used to coordinate rendering multiple pages (URLs)
    - we would use this for multiple tabs in a window
*/

export default (
  <Switch>
    <Route exact path="/" component={MainComponent} />
    {/* <Route exact path="/loggedin" component={LoggedInPage} /> */}
  </Switch>
);
