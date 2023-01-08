import { createSlice } from "@reduxjs/toolkit";

export const adminInformationSlice = createSlice({
  name: "adminInformation",
  initialState: {
    data: [
      // {
      //   id: "",
      //   first_name: "",
      //   last_name: "",
      //   user_type: "admin",
      // },
    ],
  },
  reducers: {
    setAdminInformation: (state, action) => {
      state.data = [...state.data, ...action.payload.data];
    },
  },
});

export const { setAdminInformation } = adminInformationSlice.actions;
export default adminInformationSlice.reducer;
