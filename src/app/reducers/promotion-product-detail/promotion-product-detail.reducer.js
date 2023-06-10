import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PromotionProductDetailSlice = createSlice({
    name: "promotionProductDetail",
    initialState,
    reducers: {
        AddPromotionProductDetail: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdatePromotionProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutPromotionProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeletePromotionProductDetail: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetPromotionProductDetail: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdPromotionProductDetail: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetPromotionProductDetail = (state) => state.promotionProductDetail;
export const { AddPromotionProductDetail, UpdatePromotionProductDetail, DeletePromotionProductDetail, SetPromotionProductDetail, PutPromotionProductDetail, FindByIdPromotionProductDetail } = PromotionProductDetailSlice.actions;
export default PromotionProductDetailSlice.reducer;
