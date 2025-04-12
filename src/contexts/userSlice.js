import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      console.log(action);
    },
    resetUserData: (state) => {
      state.user = {};
    },
    setProjectionDetails: (state, action) => {
      state.projectionDetails = action.payload;
      console.log(action);
    },
    resetProjectionDetails: (state) => {
      state.projectionDetails = {};
    },
  },
});

export const {setUserData, resetUserData} = userSlice.actions
export default userSlice.reducer;
