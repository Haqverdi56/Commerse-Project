import React from "react";
import { useSelector } from "react-redux";
import BasketEmpty from "./BasketEmpty";
import BasketFull from "./BasketFull.js";

const Basket = () => {
  const count = useSelector((state) => state.basket.value);
  
  return (
    <div className="bg-slate-50 md:py-10">
      <div className="container mx-auto px-4">Səbət ({count.length} məhsul)</div>
      {count.length > 0 ? <BasketFull /> : <BasketEmpty/>}
    </div>
  );
};

export default Basket;
