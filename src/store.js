import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reducers/basketSlice"
import mobileReducer from "./reducers/MobileReducer"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    mobile: mobileReducer,
  },
})

