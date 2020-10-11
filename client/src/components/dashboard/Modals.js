import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAPatient,freePatientData } from "../../actions/patientlistActions";
import QRCode from "qrcode.react"

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      prescription:"",
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow() {
    console.log("in handle show");
    this.setState({
      show: true,
    });
  }
  handleClose() {
    console.log("in handle close");
    this.setState({
      show: false,
    });
  }
  handleChange(e){
    console.log(e.target.value)
    this.setState({
      prescription : e.target.value
    })
  }
  componentDidMount() {
    console.log("component mounted")
    this.props.getAPatient(this.props.match.params.id);
  }
  componentWillUnmount(){
    console.log("component unmounted")
    this.props.freePatientData();
  }
  render() {

    const { data } = this.props.patients;
    return (
      <>
        <Link to='/dashboard' className='btn-flat waves-effect'>
          <i className='material-icons left'>keyboard_backspace</i> Back to
          patient list
        </Link>
        {console.log("id : ",data)}
        <Form style={{ marginLeft: "2rem" }}>
        <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='1'>
              Name
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.name }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='1'>
              Since
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue={typeof(data.from) === undefined ? "No data available" : data.from}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='1'>
              Disease
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue={data.disease }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='1'>
              Description
            </Form.Label>
            <Col sm='10'>
              { !data.disease ? console.log("Data not available") : console.log("Data available")}
              <Form.Control as='textarea' rows='3' readOnly defaultValue={!data.description?"Not available":data.description} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='1'>
              Prescription
            </Form.Label>
            <Col sm='10'>
              <Form.Control as='textarea' rows='3' defaultValue="Enter the prescription here"
              value={this.state.prescription} onChange={(e)=>this.handleChange(e)} />
            </Col>
          </Form.Group>

          <Button variant='primary' onClick={this.handleShow}>
            Generate QR code.
          </Button>
        </Form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><QRCode value={this.state.prescription}/></Modal.Body>
          <Modal.Footer>
            <Link to="/dasboard">
            <Button variant='secondary' onClick={()=>alert("button clicked")}>
              Finish
            </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

Modals.propTypes = {
  getAPatient: PropTypes.func.isRequired,
  patients: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patients,
});
export default   connect(mapStateToProps, { getAPatient,freePatientData })(Modals)
