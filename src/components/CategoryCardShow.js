import React from 'react';
import {Link} from 'react-router-dom';
const CategoryCardShow = (props) => {
  return (
    <>
    <div className="container ">
      <div className="card">
       <div className="card-body">
        <div className="row" >
          <div className="col-sm-4 col-md-3">
     <img className="card-img-top " src={props.cover} alt="Card image cap"/>
     </div>
     
     <div className="col-sm-8 ">
      <div className="card-body">
       <h5 className="card-title">{props.name}</h5>
       <h6 className="card-subtitle mb-2 text-muted">By: {props.author}</h6>
       <p className="card-text">{props.note}</p>
        <button onClick={() => props.handleDelete(props.category, props._id)} className="btn btn-primary">Delete</button>

       </div>
       </div>
      </div>
     </div>
     
     </div>
     </div>
   </>
  );
}

export default CategoryCardShow;