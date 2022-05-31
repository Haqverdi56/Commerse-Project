import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      const findedIndex = state.value.findIndex(obj=>obj.id === payload.id)

      if(findedIndex === -1){
        state.value.push({...payload,count:1})
      }
      else{
        let product = state.value[findedIndex];
        state.value.splice(findedIndex,1,{...product,count: product.count += 1})
      }
      console.log(current(state.value));
    },
    removeProduct: (state, {payload}) => {
      state.value.splice(state.value.findIndex((product) => product.id === payload), 1);
    }
  },
})

export const { addProduct, removeProduct } = BasketSlice.actions

export default BasketSlice.reducer