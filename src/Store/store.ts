import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});
const devTools = process.env.NODE_ENV == "production" && composeWithDevTools();

export const store = createStore(reducer, devTools);
