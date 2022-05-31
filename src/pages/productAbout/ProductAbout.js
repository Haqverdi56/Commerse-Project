import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRating from 'star-rating-react';
import { useParams } from "react-router-dom";
import commerce from '../../lib/Ecommerce.js';

const ProductAbout = () => {
  const [product, setProduct] = useState();
  const [star, setStar] = useState(0);
  const params = useParams();
  
  useEffect(()=>{
    commerce.products.retrieve(params.id).then((product) => setProduct(product));
  },[params.id])

  return (
    <>
      <div className="container mx-auto px-4 w-full md:mt-12">
        <div className="md:flex w-full">
          <div>
            <Carousel autoPlay>
              <div><img src={product?.image?.url} alt=''/></div>
              <div><img src={product?.image?.url} alt=''/></div>
              <div><img src={product?.image?.url} alt=''/></div>
            </Carousel>
          </div>
          <div className="md:ml-12 w-full">
            <p className="w-96">{product?.name}, {product?.variant_groups[1]?.options[0]?.name}, {product?.variant_groups[0]?.options[0]?.name}, (MJNM) Golden 5G 890604083886</p>
            <div className="hidden md:block"><StarRating size={5} value={star} onChange={function(val){setStar(val)}}/></div>
            <div className="md:flex items-center py-4 gap-1 border-t border-gray md:border-none">
              <p className="line-through text-gray-500 md:font-semibold">3012m</p>
              <p className="md:text-red-500 text-green-500 font-semibold md:text-xl">2089 m</p>
            </div>
            <div className="flex items-center gap-4 border-t border-gray pt-4">
              <p>Reng:</p>
              {product?.variant_groups[0]?.options.map((color,i)=>{
                return (
                  <p key={i} className={`w-8 h-8 rounded-full inline-block`} style={{backgroundColor: color.name}}></p>
                )
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 md:border-b md:border-gray pb-4">
              <p>Yaddaş:</p>
              {product?.variant_groups[1]?.options.map((memory,i)=>{
                return (
                  <p key={i} className="p-1 bg-gray-500 rounded-lg text-white">{memory.name}</p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="h-96">
          <div className="flex border-b border-gray md:gap-24 md:pb-2 md:pl-4 gap-2 justify-between md:justify-start">
            <p className="border-b-4 border-green-500 pb-3 md:border-none w-6/12 md:w-2/12 text-center md:text-left">Texniki xüsusiyətləri</p>
            <p className="border-b-4 border-green-500 pb-3 md:border-none w-6/12 text-center md:w-2/12 md:text-left">Rəylər</p>
          </div>
        </div>
      </div>
    </>
  );
};  

export default ProductAbout;
