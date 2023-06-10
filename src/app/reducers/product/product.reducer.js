import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        AddProduct: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateProduct: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutProduct: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteProduct: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetProduct: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdProduct: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetProduct = (state) => state.product;
export const { AddProduct, UpdateProduct, DeleteProduct, SetProduct, PutProduct, FindByIdProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
