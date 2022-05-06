import React from 'react'
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from 'react-router-dom';

const basketEmpty = () => {
  return (
    <>
    <div className="border-2 border-green-500 h-full container mx-auto px-4">
        <div className="w-full flex justify-center items-center flex-col p-20 mt-10 text-slate-100">
          <img src={shoppingCart} alt="" />
          <p className="text-slate-500 my-5">Səbətiniz halhazırda boşdur</p>
          <Link to='/'><button className="bg-green-500 rounded px-5 py-2">Alış-verişə davam et</button></Link>
        </div>
    </div>
    </>
  )
}

export default basketEmpty