import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const navbarCollaps = () => {
    console.log('working');
    document.querySelector('#navbarSupportedContent').classList.remove('show');
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
      <div className="container">
        
      <a className="navbar-brand" href="#">BOOK-SHELF</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon  justify-content-end"></span>
      </button>
   
      <div onClick={navbarCollaps} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">
        { props.currentUser ? 
          <>
          <li className="nav-item ">
          <a className="nav-link" href="/logout" onClick={ props.logout }>Log Out</a>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/categories'}>CategoriesList</Link>
          </li>
         
          <li className="nav-item">
          <Link className="nav-link " to={'/categories/new'}>New Category</Link>
          </li>
            </>
              :
            <>
          <li className="nav-item">
          <Link className="nav-link " to={'/register'}>Register</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " to={'/login'}>Login</Link>
          </li>
          </>
        }
        </ul>
       </div>
       </div>
     </nav>
     </>
  );
}

export default Navbar;

