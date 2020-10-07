const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Patient model
const Patient = require("../../models/Patient");

// @route   POST api/patient.
// @desc    Take appointment.
// @access Public.
router.post("/", (req, res) => {
  Patient.findOne({ name: req.body.name }).then(patient => {
    if (!req.body.name) {
      console.log(req.body.name);
    }
    console.log({
      name: req.body.name,
      disease: req.body.disease,
      doctor_id: req.body.doctor_id,
      from: req.body.from,
      description: req.body.description,
    });
    if (patient) {
      return res.status(400).json({ email: "Patient already exists." });
    } else {
      const newPatient = new Patient({
        name: req.body.name,
        disease: req.body.disease,
        doctor_id: req.body.doctor_id,
        from: req.body.from,
        description: req.body.description,
      });
      newPatient
        .save()
        .then(patient => res.json(patient))
        .catch(err => console.log(err));
    }
  });
});
// @route   POST api/patient.
//@todo
// @desc    Book appointment and assign doctor.
// @access Public.

// @route   GET api/patient/all
// @desc    List all the patient which doctor need to attend
// @access Public
router.post("/all", (req, res) => {
  try {
    console.log(req.body.headers.authorization.split(" ")[1]);
    decoded = jwt.verify(
      req.body.headers.authorization.split(" ")[1],
      keys.secretOrKey
    );
    const doctor_id = decoded.id;
    console.log("doctor_id : ", doctor_id);
    var query = { doctor_id: doctor_id };
    Patient.find({ doctor_id })
      .then(data => {
        if (data.length === 0) {
          res.json({
            data: "No patients to attend today",
          });
        } else {
          res.json(data);
        }
      })
      .catch(err => {
        res.send(404).json({
          msg: data,
        });
        console.log(data);
      });
  } catch (e) {
    return res.status(401).send("unauthorized");
  }
});

module.exports = router;
