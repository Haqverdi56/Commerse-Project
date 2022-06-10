import React, { useRef, useState, useEffect } from "react";
import logo from '../../images/Tello-logo.png'
import projectX from '../../images/project-x.png'
import commerce from '../../lib/Ecommerce';
import { RiSearch2Line } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { CgShoppingCart } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { sendCategoryName } from "../../reducers/CategorySlice";

const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const searchRef = useRef()
  const dispatch = useDispatch();
  
  const openMyHamburger = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMyHamburger = () => {
    setOpen(false)
    document.body.style.overflow = 'visible'
  }

  const focusSearch = () => {
    closeMyHamburger()
    searchRef.current.focus()
  }

  function changeColor(e) {
    e.target.className = 'hover:text-green-500';
    setHover(true)
  }

  const basketCount = useSelector((state) => state.basket.value);
  useEffect(() => {
    commerce.categories.list().then((category) => setCategoryName(category.data[0].children));
  }, [])

  return (
    <div className="w-full md:container md:mx-auto">
      <div className={`container mx-auto  w-full flex flex-col justify-between bg-white h-screen ${!open && "-mx-96 hidden" } md:hidden z-10  transition`}>
        <div>
          <div className="flex justify-between items-center container mx-auto px-4">
            <div className="flex">
              <span onClick={closeMyHamburger} className="text-3xl mt-4"><GrClose/></span>
              <div className="mt-5 ml-5" >
                <Link to='/'>
                <img onClick={closeMyHamburger} src={projectX} alt="" />
                </Link>
                </div>
            </div>
              <RiSearch2Line onClick={focusSearch} className="mt-3 text-3xl"/>
          </div>
          <div>
            <ul className='flex flex-col gap-3 md:gap-8 lg:gap-14 mt-4 border-t-2 borter-t-gray-400 container mx-auto px-4 pt-3'>
              {categoryName.map((category, i) => {
              return (
                <li key={i} onMouseOver={changeColor} onClick={() => {
                  closeMyHamburger()
                  dispatch(sendCategoryName(category))
                }}><Link to={`category/${category.name}`}>{category.name}</Link></li>
              )
              })}
            </ul>
          </div>
        </div>
          <div className="bg-gray-100 py-6 flex justify-between h-max container mx-auto px-4 pt-3">
            <button className="border-2 bg-white text-green-400 border-green-400 rounded-lg px-12 py-4">Daxil ol</button>
            <button className="border-2 bg-green-400 text-white border-green-400 rounded-lg px-12 ">Qeydiyyat</button>
          </div>
      </div>
      <div className="md:flex justify-between items-center md:mt-2 container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center text-3xl">
            <FiMenu className="sm:hidden font-thin mr-8" onClick={openMyHamburger} />
            <Link to='/'><img onClick={closeMyHamburger} src={logo} alt="" /></Link>
          </div>
          <div className="md:hidden flex">
            <Link to='userInfo'><HiOutlineUser className="inline-block text-xl opacity-70" /></Link>
            <IoMdHeartEmpty className="inline-block text-2xl opacity-70 mx-2" />
            <Link to='/basket'><CgShoppingCart className="inline-block text-2xl opacity-70" /></Link>
            <span className="w-5 h-5 bg-green-500 rounded-[50%] flex justify-center items-center text-xs">{basketCount.length}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg md:flex justify-start items-center md:w-5/12 md:h-10">
          <RiSearch2Line className="inline-block md:m-2 mb-1" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Axtarış..."
            className="bg-inherit focus:outline-none pl-2 md:w-full"
          />
        </div>
        <div className="md:flex items-center hidden">
          <Link to='userInfo'><HiOutlineUser className="inline-block text-xl opacity-70" /></Link>
          {/* <Link to='/login'><HiOutlineUser className="inline-block text-xl opacity-70" /></Link> */}
          <IoMdHeartEmpty className="inline-block text-xl opacity-70 md:mx-3" />
          <Link to='/basket'><CgShoppingCart className="inline-block text-xl opacity-70" /></Link>
          <span className="w-5 h-5 bg-green-500 rounded-[50%] flex justify-center items-center text-sm">{basketCount.length}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
