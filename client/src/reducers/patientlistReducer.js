import { GET_PATIENT,GET_A_PATIENT ,PATIENT_ERRORS,FREE_A_PATIENT } from "../actions/types";

const initialState = {
  list: {},
  diseases: [],
  error: {},
  data:[],
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
    case GET_A_PATIENT:
      return{
        ...state,
        data:payload,
        loading:false
      }
      case FREE_A_PATIENT:
        return{
          ...state,
          data:payload,
          loading:false
        }
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
