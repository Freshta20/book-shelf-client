import React, { Component } from 'react';
import UserModel from '../models/UserModel';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    }
  
// handle form input change
 handleChange = (event) => {
  this.setState({
    [ event.target.name ]: event.target.value
  })
 }

// handle form submission
handleSubmit = (event) => {
  event.preventDefault();
  // 
  UserModel.create(this.state)
  .then(data => {
    console.log('Registered', data);
    // reset the form inputs
    this.setState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })
    this.props.history.push('/login')
  })
}

  // need a form where user can input name email and password
render() {
  return (
    <div>
      Register Page
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          onChange={this.handleChange}
          type="text" 
          id="name"
          name="name" 
          value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
          onChange={this.handleChange}
          type="text" 
          id="email"
          name="email" 
          value={this.state.email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
          onChange={this.handleChange}
          type="password" 
          id="password"
          name="password" 
          value={this.state.password}
          />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input 
          onChange={this.handleChange}
          type="password" 
          id="password2"
          name="password2" 
          value={this.state.password2}
          />
        </div>
        <button type="submit">Register</button>

        </form>
    </div>
  )
}
}

export default Register;