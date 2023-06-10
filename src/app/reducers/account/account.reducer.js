import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const AccountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        AddAccount: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateAccount: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutAccount: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteAccount: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetAccount: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdAccount: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetAccount = (state) => state.account;
export const { AddAccount, UpdateAccount, DeleteAccount, SetAccount, PutAccount, FindByIdAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
