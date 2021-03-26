import { combineReducers } from "redux";
import user from "./user_reducer";
import log from "./log_reducer";

const rootReducer = combineReducers({
  user,
  log,
});

export default rootReducer;
