import React from 'react';
import Register from '../pages/Register';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = (props) => (
  <Switch>
    <Route exact path='/register' component={ Register } />
    <Route path="/login" render={ (routeComponentProps) => {
      return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    }} />

  </Switch>
)

export default Routes;