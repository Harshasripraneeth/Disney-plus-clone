import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'


const persistConfig = { key: 'root', storage: storage, stateReconciler: autoMergeLevel1, };
  
  const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
const store = configureStore(
    {
        reducer:  persistedReducer,
        middelware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                  ],
            },
        })
    })

export default store

