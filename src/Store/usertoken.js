import { createSlice } from "@reduxjs/toolkit";

const userToken = createSlice({
    name: "token",
    initialState: {
        tokens: ""
    },
    reducers: {
        setToken: (state, action) => {
            state.tokens = action.payload;
        },
        removeToken: (state) => {
            state.tokens = {};
        }
    }
});

// Correct export
export const { setToken, removeToken } = userToken.actions;
export default userToken;   // <-- sirf reducer export karna hai
