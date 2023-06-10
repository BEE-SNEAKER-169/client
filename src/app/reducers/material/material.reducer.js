import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const MaterialSlice = createSlice({
    name: "material",
    initialState,
    reducers: {
        AddMaterial: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateMaterial: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutMaterial: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteMaterial: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetMaterial: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdMaterial: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetMaterial = (state) => state.material;
export const { AddMaterial, UpdateMaterial, DeleteMaterial, SetMaterial, PutMaterial, FindByIdMaterial } = MaterialSlice.actions;
export default MaterialSlice.reducer;
