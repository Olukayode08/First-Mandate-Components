import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
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
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root', // key is required
  storage, // storage engine
  // You can also specify which reducers to persist:
  // whitelist: ['user'] // only user reducer will be persisted
  // blacklist: ['someReducer'] // someReducer will not be persisted
}


const rootReducer = combineReducers({
  user: userSlice,
  // other reducers would go here
})

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
