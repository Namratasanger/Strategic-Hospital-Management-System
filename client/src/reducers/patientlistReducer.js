import { GET_PATIENT, PATIENT_ERRORS, FREE_PATIENTS } from "../actions/types";

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
    case FREE_PATIENTS:
      return {
        ...state,
        list: null,
        loading: false,
      };
    default:
      return state;
  }
}
