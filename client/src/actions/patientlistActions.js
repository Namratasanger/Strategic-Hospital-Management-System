import axios from "axios";

import { GET_PATIENT, PATIENT_ERRORS, FREE_PATIENTS } from "./types";

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
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//remove all patient data
export const setPatientLists = () => async dispatch => {
  try {
    const token = localStorage.getItem("jwtToken");
    const res = await axios.post("/api/patient/all", {
      headers: { authorization: token },
    });
    dispatch({
      type: FREE_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PATIENT_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
