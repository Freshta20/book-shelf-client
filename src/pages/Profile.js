import React, { Component } from 'react';
import CategoryModel from '../models/CategoryModel';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/categoryCard';

class Profile extends Component {
  state = {
    categories : []
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    CategoryModel.all()
    .then(data => this.setState({ categories: data.categories }))
    .catch(err => console.log(err))
  }

  render(){
    let categoryList = this.state.categories.map((category, index) => {
    return <CategoryCard key={index} { ...category}/>
    })
    return(
      <div>
        {this.state.categories ?  categoryList :'Looding'}
      </div>
    )
  }
}

export default Profile;

// const  Profile = () =>  {
  //   const [categories, setCategories] = useState([]);
  
  //   useEffect(() => {
  //     CategoryModel.index()
  //     .then(res => {
  //       console.log(res.data.categories)
  //     })
  //     .catch(err => console.log(err))
  //   }, [categories]);
   
  //   const categoryGenre = categories.map((element, index) 
  //   => (
  //     <h2 key={index}>{element.genre}</h2>
  //   ))
  //   return (
  //     <div> 
  //     {/* {categoryGenre} */}
  //       Profile
  //     </div>
  //   )
  //   }