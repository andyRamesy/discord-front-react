import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer
  },
});

// const rootReducer = combineReducers({});
