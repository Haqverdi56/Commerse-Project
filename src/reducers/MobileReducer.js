import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    addMobile: (state, action) => {
        // console.log(action.payload);
        state.value = action.payload
    }
  },
})

export const { addMobile } = mobileSlice.actions

export default mobileSlice.reducer