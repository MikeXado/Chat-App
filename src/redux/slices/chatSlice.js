import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentClickedUser: "",
  darkMode: false,
};

const clickedUserSlice = createSlice({
  name: "clickedUser",
  initialState,
  reducers: {
    getClickedUserUid(state, action) {
      state.currentClickedUser = action.payload.uid;
    },
    changeMode(state, action) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { getClickedUserUid, changeMode } = clickedUserSlice.actions;
export default clickedUserSlice.reducer;
