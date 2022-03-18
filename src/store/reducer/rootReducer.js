import { combineReducers } from "redux";
import dataRed from "./reducer";

const rootReducer = combineReducers({
  dada: dataRed,
});

export default rootReducer;
