import React from "react";
import { useSelector } from "react-redux";
import BasketEmpty from "./BasketEmpty";
import BasketFull from "./BasketFull.js";

const Basket = () => {
  const count = useSelector((state) => state.basket.value);
  
  return (
    <div className="bg-slate-200">
      <div className=" md:pb-20 md:pt-8 container mx-auto px-4 pb-5">
        <div className="pt-2 md:pt-0 pb-3 md:pb-0">Səbət ({count.length} məhsul)</div>
        {count.length > 0 ? <BasketFull /> : <BasketEmpty/>}
      </div>
    </div>
  );
};

export default Basket;
