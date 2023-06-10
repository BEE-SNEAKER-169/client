import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PromotionSlice = createSlice({
    name: "promotion",
    initialState,
    reducers: {
        AddPromotion: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdatePromotion: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutPromotion: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeletePromotion: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetPromotion: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdPromotion: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetPromotion = (state) => state.promotion;
export const { AddPromotion, UpdatePromotion, DeletePromotion, SetPromotion, PutPromotion, FindByIdPromotion } = PromotionSlice.actions;
export default PromotionSlice.reducer;
