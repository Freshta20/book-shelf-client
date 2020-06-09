import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default (props) => (
  <Switch>
    <Route path='/register' component={ Register } />
    <Route path="/login" render={ (routeComponentProps) => {
      return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    }} />
    <Route  path='/profile' component={ Profile } />
</Switch>
)

