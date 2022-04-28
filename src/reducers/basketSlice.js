import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {},
  ],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = basketSlice.actions

export default basketSlice.reducer