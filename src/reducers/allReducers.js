import { combineReducers } from "redux";
import { authenReducer } from "./authenReducer";
import { topicsReducer } from "./topicsReducer";
export const allReducers = combineReducers({
    authenReducer, topicsReducer
})