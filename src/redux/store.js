import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { carReducer } from "./cars/slice"
import { filterReducer } from './filters/slice'
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
  whitelist: ['favoriteItems']
}

const rootReducer = combineReducers({
  carData: carReducer,
  filters: filterReducer,
  auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Logger
const myMiddleware = store => next => action => {
  console.log(action)
  next(action)
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(myMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)