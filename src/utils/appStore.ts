import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import noteReducer from "./noteSlice"
export const store=configureStore({
reducer:{
user:userReducer,
note:noteReducer,
}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;