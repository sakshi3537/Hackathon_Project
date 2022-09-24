import { combineReducers } from "redux";
import objectiveReducer from "./objectiveReducers";
import loadingReducer from "./loadingReducers";

export const reducers= combineReducers({objectiveReducer, loadingReducer});