import React, {Component} from 'react';
import CategoryModel from '../models/CategoryModel';

class CategoryEdit extends Component {
  state = this.props.location.state || { genre: 'default'}

  componentDidMount() {
    // const {genre} = this.props.location.state
    console.log('did mount', this.props.category)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category){
      this.setState({
        genre: this.props.category.genre,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    CategoryModel.update(this.props.match.params.id, this.state)
    .then(data => {
      console.log(data)
      this.props.history.push('/categories');
    })
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
      <br/>
      <br/>
      <div className="card">
      <div className="card-body">
      <h3 className="text-center"> Edit Category</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
            className="form-control"
              type="text"
              name="genre"
              id="genre"
              onChange={this.handleChange}
              value={this.state.genre}
            />
          </div>
          <input type="submit" value="Save!" className="btn btn-primary"/>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default CategoryEdit;