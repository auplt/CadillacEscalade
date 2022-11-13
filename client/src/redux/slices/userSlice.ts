import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    isAuth: boolean | undefined;
    username: string | undefined;
    name: string | undefined;
    surname: string | undefined;
    icon: string | undefined;
}

const initialState: UserState = {
    isAuth: undefined,
    username: undefined,
    name: undefined,
    surname: undefined,
    icon: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.isAuth = action.payload.isAuth;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.icon = action.payload.img;
        },
        setUserIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export const selectUser = (state: RootState) => state.user;

export const { setUserData, setUserIsAuth } = userSlice.actions;

export default userSlice.reducer;
