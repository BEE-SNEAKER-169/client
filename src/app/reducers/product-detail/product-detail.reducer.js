import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ProductDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        AddProductDetail: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetProductDetail: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdProductDetail: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetProductDetail = (state) => state.productDetail;
export const { AddProductDetail, UpdateProductDetail, DeleteProductDetail, SetProductDetail, PutProductDetail, FindByIdProductDetail } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;
