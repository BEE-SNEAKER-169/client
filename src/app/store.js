import { configureStore } from "@reduxjs/toolkit";
import DemoReducer from "./reducers/quan-ly/chuc-nang-1/man-1-demo.reducer";

export const store = configureStore({
  reducer: {
    demo: DemoReducer
  },
});

export const dispatch = store.dispatch;
export const getState = store.getState;
