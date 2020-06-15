import React, { Component } from 'react';
import CategoryModel from '../models/CategoryModel';
import { Link } from 'react-router-dom';
// import CategoryCard from '../components/CategoryCard';

class CategoryList extends Component {
  state = {
    categories : []
  }

  componentDidMount(){
    this.fetchData()
  }

 
  fetchData = () => {
    CategoryModel.all()
    .then(data =>{
      console.log(data)
      this.setState({ categories: data.categories })})
    .catch(err => console.log(err))
  }
  handleDelete = async (id) => {
    try{ CategoryModel.delete(id)
      this.props.history.push('/categories');
  }catch(err){
    console.log(err)
  }
  this.fetchData();
}
// componentDidUpdate(prevProps, prevState) {
// if (prevState.categories !== this.state.categories){
//   this.fetchData()
// }
// }

  render(){
    let categoryList = this.state.categories.map((category, index) => {
    return( 
     <>
      {/* <Link key={index} to={`/categories/${ category._id }`}> */}
        <CategoryCard key={index} { ...category} fetchData={this.fetchData}/>
      {/* </Link> */}
      {/* <button onClick={()=>this.handleDelete(category._id)}> Delete </button> */}
      {/* <Link to={{ pathname:`/categories/edit/${category._id}`, state: { genre: category.genre }}}>
      <button>Update</button>
      </Link> */}
     </>

    )
    })
    return(
      <div>
        {this.state.categories ?  categoryList :'Looding'}
      </div>
    )
  }
}

export default CategoryList;

