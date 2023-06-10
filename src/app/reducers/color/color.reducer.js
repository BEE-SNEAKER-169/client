import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        AddColor: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateColor: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutColor: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteColor: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetColor: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdColor: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetColor = (state) => state.color;
export const { AddColor, UpdateColor, DeleteColor, SetColor, PutColor, FindByIdColor } = ColorSlice.actions;
export default ColorSlice.reducer;
