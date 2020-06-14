import React from 'react';
import CategoryModel from '../models/CategoryModel';
import {Link} from 'react-router-dom';
const CategoryCard = (props) => {
  const handleDelete = async (id) => {
    try{ CategoryModel.delete(id)
  }catch(err){
    console.log(err)
  }
  props.fetchData();
}
  return (
   <>
    <div className="container">
     <br/>
      <div className="card">
       <div className="card-body">
       <Link  to={`/categories/${ props._id }`}>

        <h3 className="text-center"> {props.genre}</h3>
        </Link>
        <div className='text-center'>
        <button onClick={() => handleDelete(props._id)} className="btn btn-primary"> Delete </button>
        <Link to={{ pathname:`/categories/edit/${props._id}`, state: { genre: props.genre }}} >
      <button className="btn btn-primary">Update</button>
      </Link>
        </div>
        
       </div>
      </div>
    </div>
    </>
  );
}

export default CategoryCard;