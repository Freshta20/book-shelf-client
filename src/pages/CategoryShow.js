import React, {Component} from 'react';
import CategoryModel from '../models/CategoryModel';
import CategoryCardShow from '../components/CategoryCardShow'

class CategoryShow extends Component{
  state = {
    category: {},
    categoryId: this.props.match.params.id
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    CategoryModel.show()
    .then(data =>{
      console.log(data)
      this.setState({ category: data.category })})
    .catch(err => console.log(err))
  }
  render(){
   return (
     <div>
       {this.state.category ? <CategoryCardShow { ...this.state.category} /> : 'Looding'}
     </div>
   )
  }
}
export default CategoryShow