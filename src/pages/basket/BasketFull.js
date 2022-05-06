import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BasketFullItem from './BasketFullItem'

const BasketFull = () => {
  const count = useSelector((state) => state.basket.value);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(count);
  
  return (
    <div className='container mx-auto md:px-4 flex justify-between'>
          <div className='flex flex-col gap-5 md:pt-24 md:w-full md:mr-4 '>
            {count.map((item, i) => {
              return <div key={i}>
                <BasketFullItem item={item} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
              </div>
            })}
          </div>
          <div>
          <div className='bg-white rounded-2xl p-5 hidden md:inline-block'> 
            <div className='flex gap-14 justify-between'><p>Ümumi</p><p>50m</p></div>
            <div className='flex gap-14 justify-between'><p>Məbləğ</p><p>50m</p></div>
            <div className='flex gap-14 justify-between'><p>Çatdırılma</p><p>50m</p></div>
            <div className='flex gap-14 justify-between'><p>Hədiyyə paketi</p><p>50m</p></div>
            <div className='flex gap-14 justify-between'><p>Promo kod</p><p>50m</p></div>
            <br />
            <div className='flex gap-14 justify-between'><p>Cəmi</p><p>{totalPrice}m</p></div>
          </div>
          </div>
    </div>
  )
}

export default BasketFull