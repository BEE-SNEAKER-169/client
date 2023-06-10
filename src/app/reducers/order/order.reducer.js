import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        AddOrder: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateOrder: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutOrder: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteOrder: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetOrder: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdOrder: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetOrder = (state) => state.order;
export const { AddOrder, UpdateOrder, DeleteOrder, SetOrder, PutOrder, FindByIdOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
