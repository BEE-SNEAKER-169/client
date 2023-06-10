import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const OrderDetailSlice = createSlice({
    name: "orderDetail",
    initialState,
    reducers: {
        AddOrderDetail: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateOrderDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutOrderDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteOrderDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetOrderDetail: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdOrderDetail: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetOrderDetail = (state) => state.orderDetail;
export const { AddOrderDetail, UpdateOrderDetail, DeleteOrderDetail, SetOrderDetail, PutOrderDetail, FindByIdOrderDetail } = OrderDetailSlice.actions;
export default OrderDetailSlice.reducer;
