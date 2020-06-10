import React, { Component } from 'react';
import CategoryModel from '../models/CategoryModel'

class NewGame extends Component {
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
      <div>
        <h2>New Category</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="genre">Genre</label>
            <input 
              type="text" 
              name="genre" 
              onChange={this.handleChange}
              value={this.state.genre} />
          </div>
          <input type="submit" value="Save!"/>
        </form>
      </div>
    );
  }
}

export default NewGame;