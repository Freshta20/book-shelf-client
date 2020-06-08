import React from 'react';
import Register from '../pages/Register';
import { Switch, Route } from 'react-router-dom';

const Routes = (props) => (
  <Switch>
    <Route exact path='/register' component={ Register } />
  </Switch>
)

export default Routes;