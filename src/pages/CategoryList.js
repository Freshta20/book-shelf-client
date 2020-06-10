import React, { Component } from 'react';
import CategoryModel from '../models/CategoryModel';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';

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
  }catch(err){
    console.log(err)
  }
  this.fetchData();
}

  render(){
    let categoryList = this.state.categories.map((category, index) => {
    return( 
      <>
      <Link key={index} to={`/categories/${ category._id }`}>
          <CategoryCard key={index} { ...category}/>
      </Link>
              <button  onClick={()=>this.handleDelete(category._id)}>Delete</button>
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

