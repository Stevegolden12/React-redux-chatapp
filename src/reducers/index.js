import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";

{/* The code below is combining the message and users files */}
const chat = combineReducers({
  messages,
  users
})

export default chat