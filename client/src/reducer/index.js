import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import {persons} from './persons';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  persons
});