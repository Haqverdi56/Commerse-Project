import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      state.value.push(payload)
    },
    removeProduct: () => {

    }
  },
})

export const { addProduct, removeProduct } = basketSlice.actions

export default basketSlice.reducer