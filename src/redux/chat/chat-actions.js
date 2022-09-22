import * as actionTypes from "./chat-types";

export const getClickedUserUid = (uid) => {
  return {
    type: actionTypes.ADD_CLICKED_USER,
    payload: {
      uid: uid,
    },
  };
};
