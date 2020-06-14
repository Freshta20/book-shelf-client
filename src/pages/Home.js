
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
        <p> This is the place that you can add categories of books.
        Add your favorite books inside each category.  </p>
        <div>
        <Link to={'/login'} className="card-link">Login</Link>
        </div>
        <div>
        <Link to={'/register'} className="card-link">Register</Link>
        </div>

       </div>
      </div>
     </div>
   
  );
}

export default Home;

