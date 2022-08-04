import { createSlice } from "@reduxjs/toolkit";

const auth = localStorage.getItem("accessToken");
const info = localStorage.getItem("info");

const initialState = {
    isLoggedIn: auth && info ? true : false,
    accountInfo: info ? {data: JSON.parse(info).account } : {},
    isError: false,
    message: ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginFulfilled: (state, action) => ({
            ...state,
            isLoggedIn : true,
            accountInfo: action.payload.result,
            message: "success"
        }),
        loginRejected: (state, action) => ({
            ...state,
            isLoggedIn : false,
            isError: true,
            accountInfo : null,
            message: 'An error occurred while retrieving data from Azure Cloud, please contact the administrator'
        }),
        logoutFulfilled: (state, action) => ({
            ...state,
            isLoggedIn : false,
        }),
        clearState: (state) => ({
            ...state,
            isLoggedIn: false,
            isError: false,
            accountInfo: null,
            message: ""
        })
    }
});

export default authSlice;
