import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { carReducer } from "./cars/slice"

const rootReducer = combineReducers({
  carData: carReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})