import axios from "axios";

import { GET_PATIENT, PATIENT_ERRORS,GET_A_PATIENT,FREE_A_PATIENT } from "./types";

//get all patients data
export const getPatientLists = () => async dispatch => {
  try {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.post("/api/patient/all", {
      headers: { authorization: token },
    });
    dispatch({
      type: GET_PATIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERRORS,
      payload: { msg: err.response, status: err.response.status },
    });
  }
};

//get the patient data
export const getAPatient = (id) => async dispatch => {
  try {
    const res = await axios.get("/api/patient", {
      params: {
        id: id
      }
    });
    dispatch({
      type: GET_A_PATIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERRORS,
      payload: { msg: err.response, status: err.response.status },
    });
  }
};

//free the patient data
export const freePatientData = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/patient/${id}`);
    dispatch({
      type: FREE_A_PATIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERRORS,
      payload: { msg: err.response},
    });
  }
};

