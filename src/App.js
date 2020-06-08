import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Navbar from './components/Navbar';
import UserModel from './models/UserModel';
import './App.css';

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'));
  const storeUser = (userId) => {
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  } 
  return (
    <div className="App">
     <Navbar 
     currentUser={ currentUser } 
     logout={ logout }
     />

      hello
      <Routes
      currentUser={ currentUser }
      storeUser={ storeUser }
      />
    </div>
  );
}

export default withRouter(App);
