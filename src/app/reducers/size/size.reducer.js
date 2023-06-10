import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const SizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
        AddSize: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateSize: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutSize: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteSize: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetSize: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdSize: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetSize = (state) => state.size;
export const { AddSize, UpdateSize, DeleteSize, SetSize, PutSize, FindByIdSize } = SizeSlice.actions;
export default SizeSlice.reducer;
