import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ImageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        AddImage: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateImage: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutImage: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteImage: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetImage: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdImage: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetImage = (state) => state.image;
export const { AddImage, UpdateImage, DeleteImage, SetImage, PutImage, FindByIdImage } = ImageSlice.actions;
export default ImageSlice.reducer;
