import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentClickedUser: "",
  darkMode: false,
  opened: false,
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
    changeOpened(state, action) {
      state.opened = !state.opened;
    },
  },
});

export const { getClickedUserUid, changeMode, changeOpened } =
  clickedUserSlice.actions;
export default clickedUserSlice.reducer;
