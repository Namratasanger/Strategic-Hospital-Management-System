import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

import "./nav.css";

class Nav extends Component {
  render() {
    const authLinks = (
      <Link to='/login' className='links'>
        <li onClick={() => this.props.logoutUser()}>Logout</li>
      </Link>
    );
    const guestLinks = (
      <Link to='/login' className='links'>
        <li>Login</li>
      </Link>
    );
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
          {console.log(this.props.auth.isAuthenticated)}
          {this.props.auth.isAuthenticated ? authLinks : guestLinks}
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Nav);
