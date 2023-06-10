import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const VoucherSlice = createSlice({
    name: "voucher",
    initialState,
    reducers: {
        AddVoucher: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateVoucher: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutVoucher: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteVoucher: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetVoucher: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdVoucher: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetVoucher = (state) => state.voucher;
export const { AddVoucher, UpdateVoucher, DeleteVoucher, SetVoucher, PutVoucher, FindByIdVoucher } = VoucherSlice.actions;
export default VoucherSlice.reducer;
