import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CategoryList from '../pages/CategoryList';
import CategoryShow from '../pages/CategoryShow';
import NewCategory from '../pages/NewCategory';
import CategoryEdit from '../pages/CategoryEdit';
import NewBook from '../pages/NewBook';
// import CategoryCardShow from '../components/CategoryCardShow';


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
    <Route  path='/categories/new' component={ NewCategory } />
    <Route  path='/categories/edit/:id' component={ CategoryEdit } />
    <Route  path='/categories/:id/book/new' component={ NewBook } />

    <Route  path='/categories/:id' component={ CategoryShow } />
    <Route  path='/categories' component={ CategoryList } />

</Switch>
)
