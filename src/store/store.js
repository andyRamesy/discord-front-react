// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// const rootReducer = combineReducers({});
