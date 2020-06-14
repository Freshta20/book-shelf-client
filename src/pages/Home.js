
import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <div className="container">
     <br/>
     <br/>
     <br/>
      <div className="card">
       <div className="card-body text-center">
        <h1>Book Shelf</h1>
     <h3> This is the place that you can add categories of books.
        Add your favorite books inside each category.  </h3>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>

     </div>
     </div>
     </div>
   
  );
}

export default Home;

