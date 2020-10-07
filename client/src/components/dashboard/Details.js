import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPatientLists } from "../../actions/patientlistActions";
import { loginUser } from "../../actions/authActions";

const useStyles = theme => ({
  root: {
    width: "700px",
    margin: "auto",
    color: "black",
  },
});

class Acc extends Component {
  componentDidMount() {
    this.props.getPatientLists();
  }
  render() {
    const { classes } = this.props;
    const { list } = this.props.patients;
    return (
      <div className={classes.root}>
        {!this.props.patients.loading ? console.log("lists : ", list) : ""}

        {Object.keys(list).map(key => {
          console.log(list[key].disease.toString().split(","));
          Object.keys(list[key].disease.toString().split(",")).map(index => {
            console.log(list[key].disease.toString().split(",")[index]);
          });
          return (
            <Accordion style={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label='Expand'
                aria-controls='additional-actions1-content'
                id='additional-actions1-header'
                style={{
                  backgroundColor: "rgb(12,194,146)",
                  color: "white",
                }}
              >
                <Typography className={classes.heading}>
                  {list[key].name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color='textSecondary'>
                  <p>Disease :{list[key].disease}</p>
                  <p>Since : {list[key].from}</p>
                  <p>Description : {list[key].description}</p>
                  <button
                    style={{
                      width: "350px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginLeft: "10rem",
                      right: 0,
                      // marginTop: "1rem",
                      backgroundColor: "",
                    }}
                    type='submit'
                    className=' btn btn-large waves-effect waves-light hoverable accent-3'
                    onClick={() => alert(list[key].name)}
                  >
                    Write Prescription
                  </button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

Acc.propTypes = {
  getPatientLists: PropTypes.func.isRequired,
  patients: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patients,
});
export default withStyles(useStyles)(
  connect(mapStateToProps, { loginUser, getPatientLists })(Acc)
);
