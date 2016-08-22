import React, { Component } from 'react';
import { Link } from 'react-router'
import './styles.css';

let styles = { color: '#6EA6EC', textDecoration: 'none' }

class Nav extends Component {
  render() {
    return (
      <nav>
        <label>
          <input type="checkbox" />
          <ul><li className="toggleMenu"><a>&#9776; Menu</a></li></ul>
          <ul id="menu">
            <li><Link style={styles} to="/">Skynet</Link></li>
            <li><Link style={styles} to="/about">About</Link></li>
            <li><Link style={styles} to="/products">Products</Link></li>
            <li><Link style={styles} to="/careers">Careers</Link></li>
            <li><Link style={styles} to="/login">Login</Link></li>
          </ul>
        </label>
      </nav>
    );
  }
}

export default Nav;
