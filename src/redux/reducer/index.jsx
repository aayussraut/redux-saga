import blogReducer from "./blogReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  blog: blogReducer,
});

export default rootReducer;
