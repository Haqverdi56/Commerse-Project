import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Basket = () => {
    const count = useSelector((state) => state.basket.value)

  return (
    <div>
        <div>
            Səbət (count məhsul)
        </div>
        <div className='w-full'>

        </div>
    </div>
  )
}

export default Basket