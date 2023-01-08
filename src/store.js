import { configureStore } from "@reduxjs/toolkit";

import adminInformationReducer from "./store/adminInformationSlice";
import employeeInformationReducer from "./store/employeeInformationSlice";
import userDetailsReducer from "./store/userDetailsSlice";
export const store = configureStore({
  reducer: {
    adminInformation: adminInformationReducer,
    employeeInformation: employeeInformationReducer,
    userDetails: userDetailsReducer,
  },
});
