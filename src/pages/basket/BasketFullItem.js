import React from 'react'
import {VscTrash} from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../reducers/BasketSlice'

const BasketFullCount = ({item}) => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center bg-white md:py-2 justify-between rounded-lg'>
        <div className='flex'>
            <div className='flex items-center'>
            <input type="checkbox" />
            <img src={item.image.url} alt=""  style={{width: "43px", height:"42px"}}/>
            </div>
            <div>
            <p>{item.name}, {item?.variant_groups[1]?.options[0]?.name}, (MJNM) Golden 5G 890604083886</p>
            <p>Rəng {item?.variant_groups[0]?.options[0]?.name}, {item.price.formatted_with_symbol}</p>
            </div>
        </div>
        <div className='text-2xl md:ml-14'>
            <span>- </span>
            <span>{item.count}</span>
            <span> +</span>
        </div>
        <div onClick={()=> {
          dispatch(removeProduct(item.id))
        }} className='text-2xl md:ml-20'><span><VscTrash/></span></div>
    </div>
  )
}

export default BasketFullCount