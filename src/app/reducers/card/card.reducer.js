import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        AddCard: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateCard: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutCard: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteCard: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetCard: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdCard: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetCard = (state) => state.card;
export const { AddCard, UpdateCard, DeleteCard, SetCard, PutCard, FindByIdCard } = CardSlice.actions;
export default CardSlice.reducer;
