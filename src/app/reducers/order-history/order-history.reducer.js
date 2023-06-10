import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const OrderHistorySlice = createSlice({
    name: "orderHistory",
    initialState,
    reducers: {
        AddOrderHistory: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateOrderHistory: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutOrderHistory: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteOrderHistory: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetOrderHistory: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdOrderHistory: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetOrderHistory = (state) => state.orderHistory;
export const { AddOrderHistory, UpdateOrderHistory, DeleteOrderHistory, SetOrderHistory, PutOrderHistory, FindByIdOrderHistory } = OrderHistorySlice.actions;
export default OrderHistorySlice.reducer;
