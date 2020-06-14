import React, { Component } from 'react';
import CategoryModel from '../models/CategoryModel'

class NewCategory extends Component {
  state = {
    genre: '' 
  }

  handleSubmit = (event) => {
    event.preventDefault();

    CategoryModel.create(this.state)
      .then(data => {
        this.props.history.push('/categories')
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
      <br/>
      <br/>
      <div className="card">
      <div className="card-body">
      <h3 className="text-center"> New Category</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input 
            className="form-control"
              type="text" 
              name="genre" 
              onChange={this.handleChange}
              value={this.state.genre} />
          </div>
          <input type="submit" value="Save!" className="btn btn-primary"/>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default NewCategory;