import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_data: [],
};

const authSlice = createSlice({
  name: "authStatus",
  initialState,
  reducers: {
    loginRequest: (state) => {},
    loginSuccess: (state) => {},
    sessionLoginReq: (state, { payload }) => {
      state.user_data = payload;
    },
  },
});

export const { loginRequest, loginSuccess, sessionLoginReq } =
  authSlice.actions;
export default authSlice.reducer;
