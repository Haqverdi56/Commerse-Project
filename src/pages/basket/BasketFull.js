import React from 'react'
import { useSelector } from 'react-redux';
import BasketFullItem from './BasketFullItem'

const BasketFull = () => {
  const count = useSelector((state) => state.basket.value);
  const totalPrice = (products) => {
    return products.reduce((acc, cur) => acc + cur.price.raw * cur.count, 0).toFixed(2);
  }
  
  return (
    <div className='md:container md:mx-auto md:px-4 flex justify-center'>
          <div className='flex flex-col gap-5 md:pt-24 md:w-full md:mr-4 '>
            {count.map((item, i) => {
              return <div key={i}>
                <BasketFullItem item={item}/>
              </div>
            })}
          </div>
          <div>
          <div className='bg-white rounded-2xl p-5 hidden md:inline-block'> 
            <div className='flex gap-14 justify-between'><p>Ümumi</p><p>{totalPrice(count)}m</p></div>
            <div className='flex gap-14 justify-between'><p>Çatdırılma</p><p>0m</p></div>
            <div className='flex gap-14 justify-between'><p>Hədiyyə paketi</p><p>0m</p></div>
            <div className='flex gap-14 justify-between'><p>Promo kod</p><p>0m</p></div>
            <br />
            <div className='flex gap-14 justify-between'><p>Cəmi</p>{totalPrice(count)}m<p></p></div>
          </div>
          </div>
    </div>
  )
}

export default BasketFull