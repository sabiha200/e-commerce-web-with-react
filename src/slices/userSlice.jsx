import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem('user'))
    || null,
  },
  reducers: {
    userAccountInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { userAccountInfo } = userSlice.actions
export default userSlice.reducer
