import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./slices/chatSlice";

const store = createStore(rootReducer, composeWithDevTools());
export default store;
