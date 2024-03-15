import { createSlice } from "@reduxjs/toolkit";
// to tract authentication
const initialState = {
    status: false,  // user is not authenticated initially
    userData: null
}
const authSlice = createSlice({
    name : "auth", 
    initialState,
    reducers: {
        login: (state, action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer;
