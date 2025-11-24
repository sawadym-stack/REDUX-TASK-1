import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import cartReducer from "./cartReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
