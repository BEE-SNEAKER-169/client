import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const RoleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        AddRole: (state, action) => {
            state.push(action.payload);
            return state;
        },
        UpdateRole: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
                return state;
            }
        },
        PutRole: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload
            } else {
                state.push(action.payload);
            }
            return state;
        },
        
        DeleteRole: (state, action) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
        SetRole: (state, action) => {
            state = action.payload;
            return state;
        },
        FindByIdRole: (state, action) => { 
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                return state[index]
            }
        }
    }
})

export const GetRole = (state) => state.role;
export const { AddRole, UpdateRole, DeleteRole, SetRole, PutRole, FindByIdRole } = RoleSlice.actions;
export default RoleSlice.reducer;
