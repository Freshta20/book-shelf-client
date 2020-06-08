import React from 'react';
// import './Header.scss'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header>
      <div className="links">
        <ul>
             <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;