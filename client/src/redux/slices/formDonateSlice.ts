import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FormDonateState {
    sender: string;
    summ: number;
    comment: string;
}

const initialState: FormDonateState = {
    sender: "",
    summ: 100,
    comment: "",
};

export const formDonateSlice = createSlice({
    name: "formDonate",
    initialState,
    reducers: {
        resetFormDonate: () => {
            return initialState;
        },
        setFormDonateSender: (state, action) => {
            state.sender = action.payload;
        },
        setFormDonateSumm: (state, action) => {
            state.summ = action.payload;
        },
        setFormDonateComment: (state, action) => {
            state.comment = action.payload;
        },
    },
});

export const selectFormDonate = (state: RootState) => state.formDonate;

export const { resetFormDonate, setFormDonateSender, setFormDonateSumm, setFormDonateComment } =
    formDonateSlice.actions;

export default formDonateSlice.reducer;
