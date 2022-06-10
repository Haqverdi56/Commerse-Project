import React from 'react'
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from 'react-router-dom';

const basketEmpty = () => {
  return (
    <>
    <div className="bg-white h-full container mx-auto px-4 pb-5 md:pb-0 rounded-lg md:pt-0 pt-1">
        <div className="w-full flex justify-center items-center flex-col md:p-20 mt-4 text-slate-100">
          <img src={shoppingCart} alt="" />
          <p className="text-slate-500 my-5">Səbətiniz halhazırda boşdur</p>
          <Link to='/'><button className="bg-green-500 rounded px-5 py-2">Alış-verişə davam et</button></Link>
        </div>
    </div>
    </>
  )
}

export default basketEmpty