import React, { useState, useEffect } from 'react'
import Headerhover from './Header-hover';
import { Link } from "react-router-dom"
import commerce from '../../lib/Ecommerce';
import { sendCategoryName } from '../../reducers/CategorySlice';
import { useDispatch } from 'react-redux';

const HeaderUl = () => {
  const [hover, setHover] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const dispatch = useDispatch();

  function changeColor(e) {
    e.target.className = 'hover:text-green-500';
    setHover(true)
  }
  
  function removeHover() {
    setHover(false)
  }
  useEffect(() => {
    commerce.categories.list().then((category) => {
      setCategoryName(category.data[0].children);
    });
  }, [])

  return (
    <>
    <div className='border-b-2 border-b-green-500 mt-3 md:mt-0'>
       <div className='hidden sm:block pb-3 container mx-auto px-4'>
        <ul className='flex sm:gap-4 md:gap-8 lg:gap-14 mt-4'>
          {categoryName.map((category, i) => {
            return (
              <Link key={i} to={`category/${category.name}`}>
                <li onMouseOver={changeColor} onClick={() => {
                removeHover();
                dispatch(sendCategoryName(category))
              }}>{category.name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
      {hover && <Headerhover setHover={setHover} removeHover={removeHover} />}
    </>
  )
}

export default HeaderUl