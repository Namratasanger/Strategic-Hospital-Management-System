const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  doctor_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  disease: {
    type: Array,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Patient = mongoose.model("patient", PatientSchema);
