import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      console.log(action);
    },
    resetUserData: (state) => {
      state.user = {};
    },
  },
});

export const {setUserData, resetUserData} = userSlice.actions
export default userSlice.reducer;
