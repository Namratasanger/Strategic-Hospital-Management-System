import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          minHeight: "10vh",
          backgroundColor: "#3f3d56",
        }}
      >
        <ul className='nav-links'>
          <Link to='/' className='links'>
            <li>Home</li>
          </Link>
          <Link to='/login' className='links'>
            <li>About Us</li>
          </Link>
          <Link to='/login' className='links'>
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
