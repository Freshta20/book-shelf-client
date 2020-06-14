import React, { Component } from 'react';
import BookModel from '../models/BookModel'

class NewBook extends Component {
  state ={
  categoryId: this.props.match.params.id ,
    name: '' ,
    author: '',
    cover: '',
    note: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    BookModel.create(this.state.categoryId, this.state)
      .then(data => {
        this.props.history.push(`/categories/${this.state.categoryId}`)
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
      <h3 className="text-center"> New Book</h3>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            className="form-control"
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
            className="form-control"
              type="text"
              name="author"
              id="author"
              onChange={this.handleChange}
              value={this.state.author}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">cover</label>
            <input
            className="form-control"
              type="text"
              name="cover"
              id="cover"
              onChange={this.handleChange}
              value={this.state.cover}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">note</label>
            <textarea
            className="form-control"
              type="text"
              name="note"
              id="note"
              onChange={this.handleChange}
              value={this.state.note}
            />
          </div>
          <input type="submit" value="Save!" className="btn btn-primary"/>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default NewBook;