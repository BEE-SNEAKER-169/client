import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CustomerInformationSlice = createSlice({
    name: "customerInformation",
    initialState,
    reducers: {
        AddCustomerInformation: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateCustomerInformation: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutCustomerInformation: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteCustomerInformation: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetCustomerInformation: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdCustomerInformation: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetCustomerInformation = (state) => state.customerInformation;
export const { AddCustomerInformation, UpdateCustomerInformation, DeleteCustomerInformation, SetCustomerInformation, PutCustomerInformation, FindByIdCustomerInformation } = CustomerInformationSlice.actions;
export default CustomerInformationSlice.reducer;
