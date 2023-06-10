import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const SoleHeightSlice = createSlice({
    name: "soleHeight",
    initialState,
    reducers: {
        AddSoleHeight: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateSoleHeight: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutSoleHeight: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        DeleteSoleHeight: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetSoleHeight: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdSoleHeight: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetSoleHeight = (state) => state.soleHeight;
export const { AddSoleHeight, UpdateSoleHeight, DeleteSoleHeight, SetSoleHeight, PutSoleHeight, FindByIdSoleHeight } = SoleHeightSlice.actions;
export default SoleHeightSlice.reducer;
