import React, {useState, useEffect} from 'react';
import UserModel from '../models/UserModel';

const Register = () => {
  const [userData, setUserData] = useState(
    {
    name: '',
    email: '',
    password: '',
    password2: '',
    }
  )
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
  UserModel.register(userData)
  .then(data => {
    console.log('Registered', data);
    // reset the form inputs
    setUserData(
      {
      name: '',
      email: '',
      password: '',
      password2: '',

      }
    )
  })
}

  // need a form where user can input name email and password

  return (
    <div>
      Register Page
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          onChange={handleChange}
          type="text" 
          id="name"
          name="name" 
          value={userData.name}
          />
        </div>

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
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input 
          onChange={handleChange}
          type="password" 
          id="password2"
          name="password2" 
          value={userData.password2}
          />
        </div>
        <button type="submit">Sign in</button>

        </form>
    </div>
  )
}

export default Register;