import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reducers/BasketSlice"
import categorySlice from './reducers/CategorySlice'
import mobileReducer from "./reducers/MobileReducer"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    mobile: mobileReducer,
    category: categorySlice,
  },
})

