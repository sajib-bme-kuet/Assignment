import { createSlice } from "@reduxjs/toolkit";

export const employeeInformationSlice = createSlice({
  name: "employeeInformation",
  initialState: {
    data: [
      {
        id: "",
        first_name: "",
        last_name: "",
        user_type: "employee",
        division: "",
        district: "",
      },
    ],
  },
  reducers: {
    setEmployeeInformation: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setEmployeeInformation } = employeeInformationSlice.actions;
export default employeeInformationSlice.reducer;
