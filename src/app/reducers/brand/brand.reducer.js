import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const BrandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        AddBrand: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateBrand: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutBrand: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteBrand: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetBrand: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdBrand: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetBrand = (state) => state.brand;
export const { AddBrand, UpdateBrand, DeleteBrand, SetBrand, PutBrand, FindByIdBrand } = BrandSlice.actions;
export default BrandSlice.reducer;
