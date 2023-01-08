import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "userDetails",
  // initialState: {
  //   id: "",
  //   first_name: "",
  //   last_name: "",
  //   user_type: "",
  //   division: "",
  //   district: "",
  // },
  initialState: {
    data: {
      id: "",
      first_name: "",
      last_name: "",
      user_type: "",
      division: "",
      district: "",
    },
  },

  reducers: {
    setUserDetails: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
