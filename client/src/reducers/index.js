import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import patientlistReducer from "./patientlistReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  patients: patientlistReducer,
});
