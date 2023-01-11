/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { ACTIONS_TYPES } from "../frameworks/config";

const initialState = {
  userData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
