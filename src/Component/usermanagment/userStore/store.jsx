import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer, // Provide the persisted user reducer
    // Add other reducers here if you have any
  },
});
export  const persistor = persistStore(store);