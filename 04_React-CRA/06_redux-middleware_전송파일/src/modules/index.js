import { combineReducers } from "redux";
import counter from "./counter";
import article from "./article";
import member from "./member";

const rootReducer = combineReducers({
  counter,
  article,
  member,
});
export default rootReducer;
