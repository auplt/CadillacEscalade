import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dashboardSlice from "./slices/dashboardSlice";
import userSlice from "./slices/userSlice";
import formRegisterSlice from "./slices/formRegisterSlice";
import formLoginSlice from "./slices/formLoginSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        dashboard: dashboardSlice,
        formRegister: formRegisterSlice,
        formLogin: formLoginSlice,
    },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
