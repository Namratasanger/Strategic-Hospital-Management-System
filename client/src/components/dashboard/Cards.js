import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Modal from "react-bootstrap/Modal";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "react-bootstrap/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPatientLists } from "../../actions/patientlistActions";
import { loginUser } from "../../actions/authActions";

const useCardStyles = theme => ({
  root: {
    minWidth: 275,
    maxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
class SimpleCard extends Component {
  componentDidMount() {
    this.props.getPatientLists();
  }
  render() {
    const { classes } = this.props;
    const { list } = this.props.patients;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "150px",
        }}
      >
        {this.props.patients.list !== null
          ? !this.props.patients.loading
            ? console.log("lists : ", list)
            : ""
          : ""}
        {list.data ? (
          <p>{list.data}</p>
        ) : (
          Object.keys(list).map(key => {
            console.log(list[key].disease.toString().split(","));
            Object.keys(list[key].disease.toString().split(",")).map(index => {
              console.log(list[key].disease.toString().split(",")[index]);
            });
            return (
              <Card
                className={classes.root}
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,rgb(12,194,146),rgb(13, 231, 160),rgb(24, 242, 180))",
                  minWidth: 300,
                  maxWidth: 300,
                  margin: "10px 20px 10px 20px",
                }}
                key={list[key]._id}
              >
                <CardContent>
                  <Typography variant='h4' component='h2'>
                    {list[key].name}
                  </Typography>
                  <Typography className={classes.pos}>
                    Disease
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      {list[key].disease}
                    </Typography>
                  </Typography>

                  <Typography className={classes.pos}>
                    Since
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      {list[key].from}
                    </Typography>
                  </Typography>

                  <Typography className={classes.pos}>
                    Description
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      {list[key].description}
                    </Typography>
                  </Typography>
                </CardContent>
                <div
                  style={{
                    borderColor: "rgb(197, 251, 237)",
                    borderWidth: "1px",
                    border: "1px solid rgb(197, 251, 237)",
                  }}
                ></div>
                <CardActions>
                  <Link to={'/modal/'+list[key]._id}>
                    <Button>Write Presctiption</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })
        )}
      </div>
    );
  }
}
SimpleCard.propTypes = {
  getPatientLists: PropTypes.func.isRequired,
  patients: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patients,
});
export default withStyles(useCardStyles)(
  connect(mapStateToProps, { loginUser, getPatientLists })(SimpleCard)
);