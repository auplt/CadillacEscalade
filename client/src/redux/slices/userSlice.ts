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
            state.icon = action.payload.icon;
        },
    },
});

export const selectUser = (state: RootState) => state.user;

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
