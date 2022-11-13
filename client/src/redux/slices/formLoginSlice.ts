import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FormLoginState {
    username: string;
    password: string;
}

const initialState: FormLoginState = {
    username: "",
    password: "",
};

export const formLoginSlice = createSlice({
    name: "formLogin",
    initialState,
    reducers: {
        resetFormLogin: () => {
            return initialState;
        },
        setFormLoginUsername: (state, action) => {
            state.username = action.payload;
        },
        setFormLoginPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const selectFormLogin = (state: RootState) => state.formLogin;

export const { resetFormLogin, setFormLoginUsername, setFormLoginPassword } = formLoginSlice.actions;

export default formLoginSlice.reducer;
