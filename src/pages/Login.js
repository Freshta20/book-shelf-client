import React, { Component } from 'react'
import UserModel from '../models/UserModel'

class Login extends Component {
  state = {
    email: '',
    password: '',
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
  
  UserModel.login(this.state)
   .then(data => {
    console.log('logedin', data)
    // fix it
    if(!data.data) {
      return false
    }
     this.props.storeUser(data.data)
     this.props.history.push('/profile')
    })
    .catch(err => console.log(err))
  }
 render(){
  return (
    <div className="container">
      <br/>
      <div className="card">
      <div className="card-body">
      <h3 className="text-center"> Login</h3>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          className="form-control"
          onChange={this.handleChange}
          type="text" 
          id="email"
          name="email" 
          value={this.state.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          className="form-control"
          onChange={this.handleChange}
          type="password" 
          id="password"
          name="password" 
          value={this.state.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </div>
      </div>
    </div>
  )
 }
}


export default Login;