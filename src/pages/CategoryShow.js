import React, {Component} from 'react';
import CategoryModel from '../models/CategoryModel';
import CategoryCardShow from '../components/CategoryCardShow'

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
  render(){
    
    let bookList = this.state.category.books.map((book, index) =>{
      return <CategoryCardShow key={index} { ...book}/>
    })
   return (
     <div>
       {this.state.category ? bookList  : 'Loading'}
     </div>
   )
  }
}
export default CategoryShow