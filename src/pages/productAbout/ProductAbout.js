import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRating from 'star-rating-react';
import { useParams } from "react-router-dom";
import commerce from '../../lib/Ecommerce.js';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducers/BasketSlice.js";
import { countProduct } from "../../reducers/BasketSlice.js";
import { CgShoppingCart } from 'react-icons/cg'
import TechnicalParameters from "./TechnicalParameters.js";
import CommentsAreaZona from "./CommentsAreaZona.js";


const ProductAbout = () => {
  const [product, setProduct] = useState();
  const [colorName, setColorName] = useState(null);
  const [memoryName, setMemoryName] = useState(null);
  const [productPrice, setProductPrice] = useState(0);
  const [technicalParamters, setTechnicalParamters] = useState(true);
  const [cartCount, setCartCount] = useState(1)

  const count = useSelector((state) => state.basket.count);
  const params = useParams();
  const productAdded = useRef(null);
  const changeColorTechnical = useRef(null)
  const changeColorComments = useRef(null)
  const dispatch= useDispatch();
  var price = product?.price?.raw;

  useEffect(()=>{
    commerce.products.retrieve(params.id).then((product) => setProduct(product));
  },[params.id])
  
  useEffect(()=>{
    setColorName(product?.variant_groups[0]?.options[0]?.name)
    setMemoryName(product?.variant_groups[1]?.options[0]?.name)
    setProductPrice(price)
  },[product])

  useEffect(()=> {
    if(memoryName === "32 GB") {
      setProductPrice(product?.variant_groups[1]?.options[0]?.price.raw)
    }
    else if(memoryName === "64 GB") {
      setProductPrice(product?.variant_groups[1]?.options[1]?.price.raw)
    }
    else if(memoryName === "128 GB") {
      setProductPrice(product?.variant_groups[1]?.options[2]?.price.raw)
    }
  }, [memoryName])

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
            <p className="">{product?.name}, {memoryName}, {colorName}, (MJNM) Golden 5G 890604083886</p>
            <div className="hidden md:block"><StarRating size={5} value="4" /></div>
            <div className="md:flex items-center py-4 gap-1 border-t border-gray md:border-none">
              <p className="text-green-500 font-semibold md:text-xl">{productPrice} AZN</p>
            </div>
            <div className="flex items-center gap-4 border-t border-gray pt-4">
              <p>Reng:</p>
              {product?.variant_groups[0]?.options.map((color,i)=>{
                return (
                  <p key={i} onClick={() => {
                    setColorName(color.name)
                  }} className={`w-8 h-8 rounded-full inline-block`} style={{backgroundColor: color.name}}></p>
                )
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 md:border-b md:border-gray pb-4">
              <p>Yaddaş:</p>
              {product?.variant_groups[1]?.options.map((memory,i)=>{
                return (
                  <p key={i} onClick={()=> {
                    setMemoryName(memory.name)
                  }} className="p-1 bg-gray-500 rounded-lg text-white">{memory.name}</p>
                )
              })}
            </div>
            <div className="w-64 flex flex-col justify-between gap-6 mt-3">
              <div className="md:flex gap-3 hidden">
                <button onClick={()=>cartCount < 2 ? null : setCartCount(cartCount-1)} className="w-7 h-7 bg-gray-100 text-center rounded-full">-</button>
                <span className="text-xl">{cartCount}</span>
                <button onClick={()=>setCartCount(cartCount+1)} className="w-7 h-7 bg-gray-100 text-center rounded-full">+</button>
              </div>
              <div>
                <button className='flex items-center gap-2 hover:cursor-pointer bg-green-500 text-white rounded-lg px-10 py-2' 
                onClick={() => {
                    dispatch(addProduct(product));
                    dispatch(countProduct(cartCount))
                    productAdded.current.className = "product-added"
                    setTimeout(() => {
                        productAdded.current.className = "hidden"
                    }, 3000);
                }}><CgShoppingCart/>Səbətə at</button>
              </div>
            </div>
              <p ref={productAdded} className='hidden'>Məhsul əlavə edildi</p>
          </div>
        </div>
        {/* Texniki xususiyyetler*/}
        <div className="flex border-b border-gray mt-5 md:gap-24 md:pb-2 md:pl-4 gap-2 justify-between md:justify-start">
            <p ref={changeColorTechnical} onClick={()=>{
              setTechnicalParamters(true)
              changeColorComments.current.style.color="gray";
              changeColorTechnical.current.style.color="black";
              changeColorTechnical.current.className="border-b-4 border-green-500 pb-3 md:border-none w-6/12 md:w-2/12 text-center md:text-left hover:cursor-pointer";
              changeColorComments.current.className="border-gray-200 border-b-4 pb-3 md:border-none w-6/12 text-center md:w-2/12 md:text-left hover:cursor-pointer";
            }} 
              className="border-b-4 border-green-500 pb-3 md:border-none w-6/12 md:w-2/12 text-center md:text-left hover:cursor-pointer">Texniki xüsusiyətləri</p>
            <p ref={changeColorComments} onClick={()=>{
              setTechnicalParamters(false)
              changeColorTechnical.current.style.color="gray";
              changeColorComments.current.style.color="black";
              changeColorComments.current.className="border-green-500 border-b-4 pb-3 md:border-none w-6/12 text-center md:w-2/12 md:text-left hover:cursor-pointer";
              changeColorTechnical.current.className="border-b-4 border-gray-200 pb-3 md:border-none w-6/12 md:w-2/12 text-center md:text-left hover:cursor-pointer";
            }} className="border-b-4 pb-3 md:border-none w-6/12 text-center md:w-2/12 md:text-left hover:cursor-pointer">Rəylər</p>
        </div>
        <div className="h-96 overflow-y-scroll md:overflow-y-visible">
            {technicalParamters ? <TechnicalParameters product={product}/> : <CommentsAreaZona/>}
        </div>
      </div>
    </>
  );
};  

export default ProductAbout;
