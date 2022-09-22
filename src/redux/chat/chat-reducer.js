import * as actionTypes from "./chat-types";

const INITIAL_STATE = {
  clickedUserUid: "",
};

const chatReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLICKED_USER:
      return {
        ...state,
        clickedUserUid: action.payload.uid,
      };
    default:
      return state;
  }
};

export { chatReducers };
