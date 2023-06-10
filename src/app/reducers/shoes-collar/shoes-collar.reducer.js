import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ShoesCollarSlice = createSlice({
    name: "shoesCollar",
    initialState,
    reducers: {
        AddShoesCollar: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateShoesCollar: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutShoesCollar: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteShoesCollar: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetShoesCollar: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdShoesCollar: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetShoesCollar = (state) => state.shoesCollar;
export const { AddShoesCollar, UpdateShoesCollar, DeleteShoesCollar, SetShoesCollar, PutShoesCollar, FindByIdShoesCollar } = ShoesCollarSlice.actions;
export default ShoesCollarSlice.reducer;
