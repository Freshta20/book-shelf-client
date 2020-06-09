import React from 'react';
// import './Header.scss'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header>
      <div className="links">
        <ul>
            { props.currentUser ? 
            <>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              </>
              :
              <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              </>
            }
        </ul>
      </div>
    </header>
  );
}

export default Navbar;