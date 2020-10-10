import React, { Component } from "react";
import { Link } from "react-router-dom";
import unlock from "../../images/unlock.svg";
import homeImage from "../../images/home-image.svg";
class Landing extends Component {
  render() {
    return (
      <div style={{ marginTop: "7rem" }} className='container'>
        <img
          style={{
            left: 0,
            marginLeft: "10rem",
            width: 500,
            position: "absolute",
          }}
          src={homeImage}
          alt='avatar'
        />
        <div
          style={{
            top: 0,
            marginTop: "4rem",
            marginLeft: "30rem",
          }}
          className='row'
        >
          <div className='col s12 center-align'>
            <h4 style={{ fontSize: "50px" }}>
              <b>Strategic Hospital</b>
              <span style={{ fontFamily: "monospace" }}></span>
            </h4>
            <p
              style={{ fontSize: "30px" }}
              className='flow-text grey-text text-darken-1'
            >
              Manangement System
            </p>
            <br />
            <div className='col s6'>
              <Link to='/register'>
                <button
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    backgroundColor: "rgb(12,194,146)",
                  }}
                  type='submit'
                  className='btn btn-large waves-effect waves-light hoverable accent-3'
                >
                  Register
                </button>
              </Link>
            </div>
            <div className='col s6'>
              <Link to='/login'>
                {" "}
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    backgroundColor: "rgba(38,166,154)",
                  }}
                  type='submit'
                  className='btn btn-large waves-effect waves-light hoverable accent-3'
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
