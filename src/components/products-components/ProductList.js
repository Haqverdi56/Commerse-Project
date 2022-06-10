import React, {useState, useEffect} from 'react';
import Product from "./Product";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {MdArrowForwardIos} from 'react-icons/md';
import { useSelector } from 'react-redux';

const ProductList = ({category, link}) => {
    let [mywindow, setMywindow] = useState({});
    const data = useSelector(state=>state.mobile.value);
    
    useEffect(() => {
        let resizeId;
        window.addEventListener("resize", function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);

        });

        function doneResizing() {
            setMywindow({height: window.innerHeight, width: window.innerWidth});
        }
    }, [mywindow]);
    
    return (
        <>
        <div className='container mx-auto px-4'>
            <div className="flex justify-between mt-12">
                <p>{category}</p>
                <a className="items-center hidden md:flex" href={link}>
                <p className="mr-3">Hamısına bax</p>
                <MdArrowForwardIos/>
                </a>
            </div>
            <Swiper
                effect="fade"
                spaceBetween={30}
                slidesPerView={mywindow.width && mywindow.width < 768 ? 2 : 5}
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
                className="center mb-10 md:mb-12"
                >
                {data.map((dataItem, index) => {
                   return <SwiperSlide key={index}><Product dataItem={dataItem} className="md:w-1/5 w-6/12"/></SwiperSlide>
                })}
            </Swiper>

            <a className="flex items-center md:hidden text-center justify-center  mb-8" href={link}>
                <p className="mr-3">Hamısına bax</p>
                <MdArrowForwardIos/>
            </a>   
        </div>
        </>
    );
};

export default ProductList;