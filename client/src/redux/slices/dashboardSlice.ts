import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DashboardState {
    items: any | undefined;
    selectedItem: any | undefined;
}

const initialState: DashboardState = {
    items: undefined,
    selectedItem: undefined,
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardPreview: (state, action) => {
            state.items = action.payload;
        },
        setDashboardSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
});

export const selectDashboard = (state: RootState) => state.dashboard;

export const { setDashboardPreview } = dashboardSlice.actions;

export default dashboardSlice.reducer;
