import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { carReducer } from "./cars/slice"
import logger from "redux-logger"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/slice"

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favoriteItems', 'token']
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const rootReducer = combineReducers({
  carData: carReducer,
  auth: persistedReducer,
})

// Logger
const myMiddleware = store => next => action => {
  next(action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(myMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)