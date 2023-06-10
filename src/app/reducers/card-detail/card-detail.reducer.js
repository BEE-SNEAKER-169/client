import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartDetailSlice = createSlice({
    name: "cartDetail",
    initialState,
    reducers: {
        AddCartDetail: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateCartDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutCartDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteCartDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetCartDetail: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdCartDetail: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetCartDetail = (state) => state.cartDetail;
export const { AddCartDetail, UpdateCartDetail, DeleteCartDetail, SetCartDetail, PutCartDetail, FindByIdCartDetail } = CartDetailSlice.actions;
export default CartDetailSlice.reducer;
