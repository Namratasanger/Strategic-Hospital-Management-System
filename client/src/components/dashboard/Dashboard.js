import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPatientLists } from "../../actions/patientlistActions";
import { loginUser } from "../../actions/authActions";

import Tabs from "./Tabs";
class Dashboard extends Component {
  componentDidMount(){
    console.log("component mounted")
  }
  render() {
    return (
      <div>
        <div className='row'>
          <Tabs></Tabs>
        </div>
      </div>
    );
  }
}

export default Dashboard;
