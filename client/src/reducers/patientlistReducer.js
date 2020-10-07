import { GET_PATIENT, PATIENT_ERRORS } from "../actions/types";

const initialState = {
  list: {},
  diseases: [],
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PATIENT:
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
