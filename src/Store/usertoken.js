import { createSlice } from "@reduxjs/toolkit";

export const usrtoken = createSlice({
  name: 'token',
  initialState: {
     tokens: {}
  },
  reducers: {
    settoken: (state, action) => {
      state.tokens = action.payload;
    },
    removetoken: (state) => {
      state.tokens = {};
    }
  }
});

// Export actions
export const { settoken, removetoken } = usrtoken.actions;

// Export reducer
export default usrtoken.reducer;
