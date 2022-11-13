import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FormRegisterState {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

const initialState: FormRegisterState = {
    username: "",
    email: "",
    password1: "",
    password2: "",
};

export const formRegisterSlice = createSlice({
    name: "formRegister",
    initialState,
    reducers: {
        resetFormRegister: () => {
            return initialState;
        },
        setFormRegisterUsername: (state, action) => {
            state.username = action.payload;
        },
        setFormRegisterEmail: (state, action) => {
            state.email = action.payload;
        },
        setFormRegisterPassword1: (state, action) => {
            state.password1 = action.payload;
        },
        setFormRegisterPassword2: (state, action) => {
            state.password2 = action.payload;
        },
    },
});

export const selectFormRegister = (state: RootState) => state.formRegister;

export const {
    resetFormRegister,
    setFormRegisterUsername,
    setFormRegisterEmail,
    setFormRegisterPassword1,
    setFormRegisterPassword2,
} = formRegisterSlice.actions;

export default formRegisterSlice.reducer;
