import { createSlice } from "@reduxjs/toolkit";

const initialState = [
            {   
                id: "1",
                ma: "ok",
                ten: "ok",
                tuoi: "ok",
            }
        ];

export const DemoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        AddDemo: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
            return state;
        },
        UpdateDemo: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = {
                    ...state[index],
                    ma: action.payload.ma,
                    ten: action.payload.ten,
                    tuoi: action.payload.tuoi
                }
            }
        },
        
        DeleteDemo: (state, action) => {
            const index = state.findIndex((el) => el.ma === action.payload.ma);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetDemo: (state, action) => {
            state = action.payload;
            return state;
        },
    }
})

export const GetDemo = (state) => state.demo;
export const { AddDemo, UpdateDemo, DeleteDemo, SetDemo } = DemoSlice.actions;
export default DemoSlice.reducer;
