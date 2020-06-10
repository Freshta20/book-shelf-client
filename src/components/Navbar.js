import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <a className="navbar-brand" href="#">BOOK-SHELF</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        { props.currentUser ? 
          <>
          <li className="nav-item active">
          <a className="nav-link" href="/logout" onClick={ props.logout }>Log Out</a>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/categories'}>CategoriesList</Link>
          </li>
         
          <li className="nav-item">
          <Link className="nav-link disabled" to={'/categories/new'}>New Category</Link>
          </li>
            </>
              :
            <>
          <li className="nav-item">
          <Link className="nav-link disabled" to={'/register'}>Register</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link disabled" to={'/login'}>Login</Link>
          </li>
          </>
        }
        </ul>
       </div>
     </nav>
     </>
  );
}

export default Navbar;

{/* <header>
      <div className="links">
        <ul>
            { props.currentUser ? 
            <>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
              <li><Link to={'/categories'}>CategoriesList</Link></li>
              <li><Link to={'/categories/new'}>New Category</Link></li>

              </>
              :
              <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              </>
            }
        </ul>
      </div>
    </header> */}