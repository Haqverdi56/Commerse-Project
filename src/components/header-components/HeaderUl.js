import React, { useState } from 'react'
import Headerhover from './Header-hover';
import { Link } from "react-router-dom"

const HeaderUl = () => {
  const [hover, setHover] = useState(false)

  function changeColor(e) {
    e.target.className = 'hover:text-green-500';
    setHover(true)
  }
  
  function removeHover() {
    setHover(false)
  }

  return (
    <>
    <div className='border-b-2 border-b-green-500 mt-3 md:mt-0'>
       <div className='hidden sm:block pb-3 container mx-auto px-4'>
        <ul className='flex sm:gap-4 md:gap-8 lg:gap-14 mt-4'>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to='test'>Hamısı</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Apple</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Samsung</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Xiaomi</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Redmi</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Nokia</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Aksesuarlar</Link></li>
          <li onMouseOver={changeColor} onClick={() => {setHover(false)}}><Link to={'test'}>Endirimler</Link></li>
        </ul>
      </div>
    </div>
      {hover && <Headerhover setHover={setHover} removeHover={removeHover} />}
    </>
  )
}

export default HeaderUl