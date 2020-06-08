import React, { useState } from 'react'
import UserModel from '../models/UserModel'

const Login = (props) =>  {
  const[userData, setUserData] = useState({
    email: '',
    password: '',
  })

  // handle form input change
const handleChange = (event) => {
  let newState = Object.assign({}, userData);
    newState[event.target.name] = event.target.value;
    setUserData(newState);
}
  
// handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  // 
  UserModel.login(userData)
  .then(data => {
    console.log(data);
    // if(data.status === 200){
    //   props.StoreUser(data.data)
    // }
    // reset the form inputs
    setUserData(
      {
      email: '',
      password: '',

      }
    )
  })
}

  return (
    <div>
      Login Page
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="email">Email</label>
          <input 
          onChange={handleChange}
          type="text" 
          id="email"
          name="email" 
          value={userData.email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handleChange}
          type="password" 
          id="password"
          name="password" 
          value={userData.password}
          />
        </div>
        <button type="submit">Login in</button>
      </form>
    </div>
  )
}


export default Login;