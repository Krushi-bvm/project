import { configureStore } from "@reduxjs/toolkit";

import employeeSlice from './employSlice'





export const store = configureStore({
  reducer: {
    employeeKey: employeeSlice,
  },
})

export default store;