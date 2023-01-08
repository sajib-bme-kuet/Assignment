import { configureStore } from "@reduxjs/toolkit";

import adminInformationReducer from "./store/adminInformationSlice";
import employeeInformationReducer from "./store/employeeInformationSlice";
export const store = configureStore({
  reducer: {
    adminInformation: adminInformationReducer,
    employeeInformation: employeeInformationReducer,
  },
});
