import React from 'react'
import {VscTrash} from "react-icons/vsc"
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../reducers/BasketSlice'

const BasketFullCount = ({item}) => {
  const dispatch = useDispatch()
  const selector = useSelector(state=> state.basket.count)
   

  
  // console.log(selector);
  return (
    <div className='md:flex items-center bg-white md:py-2 justify-between rounded-lg p-5 md:p-0 relative'>
        <div className='md:flex gap-2 md:w-6/12'>
            <div className='flex items-center justify-center md:pl-2 pb-3 md:pb-0'>
              <img src={item.image.url} className="w-40 h-40 md:w-10 md:h-10" style={{width: "43px", height:"42px"}}/>
            </div>
            <div className='flex flex-col font-medium md:text-sm'>
              <p>{item.name}, {item?.variant_groups[1]?.options[0]?.name}, (MJNM) Golden 5G 890604083886</p>
              <div className='md:flex gap-2'>
                <p className='pt-2'>Rəng: {item?.variant_groups[0]?.options[0]?.name},</p>
                <p className='inline-block text-red-500 pt-2'>{item.price.formatted_with_symbol}</p>
                <span className='md:hidden float-right pr-2'>{item.count} ədəd</span>
              </div>
            </div>
        </div>
        <div className='text-2xl md:ml-14 hidden md:block'>
            {/* <button onClick={() => item.count-1}>- </button> */}
            <span>{item.count}</span>
            {/* <button onClick={() => item.count+1}> +</button> */}
        </div>
        <div onClick={()=> {
          dispatch(removeProduct(item.id))}} 
          className='text-2xl md:ml-20 absolute md:static top-4 right-4 text-gray-500'>
          <span><VscTrash/></span>
        </div>
    </div>
  )
}

export default BasketFullCount