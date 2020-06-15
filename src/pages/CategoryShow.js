import React, {Component} from 'react';
import BookModel from '../models/BookModel';
import CategoryCardShow from '../components/CategoryCardShow'
import CategoryModel from '../models/CategoryModel';
import {Link} from 'react-router-dom';

class CategoryShow extends Component{
  state = {
    category: {
      books: [],
    },
    categoryId: this.props.match.params.id
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    CategoryModel.show(this.state.categoryId)
    .then(data =>{
      console.log(data)
      this.setState({ category: data.category })})
    .catch(err => console.log(err))
  }

  handleDelete = async (categoryId, bookId) => {
    try{ BookModel.delete(categoryId, bookId)
      this.props.history.push(`/categories/${this.state.categoryId}`);
  }catch(err){
    console.log(err)
  }
  this.fetchData();
}
  render(){
    
    let bookList = this.state.category.books.map((book, index) =>{
      return (
        <>
        {/* we gonna pass the handledelete without paranteces bcs we  dont want to call it */}
      <CategoryCardShow key={index} { ...book} handleDelete={this.handleDelete} fetchData={this.fetchData}/>
      
      </>
      )
    })
   return (
     <>
     <div className="container my-3 py-5 text-center">
      <div className="row mb-5">
        <div className="col">
          <h1 className="head">Your Books</h1>
          <Link to={`/categories/${this.state.categoryId}/book/new`} className="head"> create book </Link>
        </div>
      </div>
       {this.state.category ? bookList  : 'Loading'}
     </div>
     </>
   )
  }
}
export default CategoryShow