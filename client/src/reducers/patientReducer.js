import { GET_A_PATIENT, PATIENT_ERRORS } from "../actions/types";

const initialState = {
    data
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_A_PATIENT:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    case PATIENT_ERRORS:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
