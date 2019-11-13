import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {

    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/')
    }

  return (
    <nav className="navbar">
      <Link to='/'><h1>Users APP</h1></Link>
      <div className="right-nav">
      <Link to='/'><h1>login</h1></Link>
      <Link to='/register'><h1>register</h1></Link>
      <Link to='/users'><h1>users</h1></Link>
      <Link onClick={logout}><h1>logout</h1></Link>
      </div>
    </nav>
  );
};

export default Navbar;
