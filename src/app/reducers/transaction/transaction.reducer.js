import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const TransactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        AddTransaction: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateTransaction: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutTransaction: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteTransaction: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetTransaction: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdTransaction: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetTransaction = (state) => state.transaction;
export const { AddTransaction, UpdateTransaction, DeleteTransaction, SetTransaction, PutTransaction, FindByIdTransaction } = TransactionSlice.actions;
export default TransactionSlice.reducer;
