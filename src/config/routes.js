import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CategoryList from '../pages/CategoryList';
import CategoryShow from '../pages/CategoryShow';
import NewCategory from '../pages/NewCategory';
import CategoryEdit from '../pages/CategoryEdit';
import NewBook from '../pages/NewBook';
import Home from '../pages/Home';

// import CategoryCardShow from '../components/CategoryCardShow';


export default (props) => (
  <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/register' component={ Register } />
      <Route exact path="/login" render={ (routeComponentProps) => {
      return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
               />
               }} />
      <Route exact  path='/categories/new' component={ NewCategory } />
      <Route exact path='/categories/edit/:id' component={ CategoryEdit } />
      <Route exact path='/categories/:id/book/new' component={ NewBook } />
      <Route exact path='/categories/:id' component={ CategoryShow } />
      <Route exact path='/categories' component={ CategoryList } />
  </Switch>
)
