import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentClickedUser: "",
};

const clickedUserSlice = createSlice({
  name: "clickedUser",
  initialState,
  reducers: {
    getClickedUserUid(state, action) {
      state.currentClickedUser = action.payload.uid;
    },
  },
});

export const { getClickedUserUid } = clickedUserSlice.actions;
export default clickedUserSlice.reducer;
