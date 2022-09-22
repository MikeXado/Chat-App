import { combineReducers } from "redux";
import { chatReducers } from "./chat/chat-reducer";

const rootReducer = combineReducers({
  chat: chatReducers,
});

export default rootReducer;
