import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../reducers/BasketSlice';
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import "../../css/product.css"

const Product = ({ dataItem }) => {
    const dispatch = useDispatch();
    const productAdded = useRef(null)
    
    return (
        <>
        <div className="product-background p-1 pl-4 md:w-52 my-10">
        <Link to={`/productAbout/${dataItem.id}`}><div className='flex md:mx-10'><img src={dataItem.image.url} alt="" /></div></Link>
            <div className='md:flex text-sm'>
                <p className='pr-1 md:pr-2'>{dataItem.name}</p>
                <span className=''>{dataItem.variant_groups[1].options[0].name}</span>
            </div>
            <p>{dataItem.variant_groups[0].options[0].name}</p>
            <span>{dataItem.price.formatted_with_symbol}</span>
            <button className='float-right pr-7' onClick={() => {
                dispatch(addProduct(dataItem));
                productAdded.current.className = "product-added"
                const timerid = setTimeout(() => {
                    productAdded.current.className = "hidden"
                  }, 2000);
            }}><BsBasket className='text-green-500 hover:cursor-pointer'/></button>
            <p ref={productAdded} className='hidden'>Məhsul əlavə edildi</p>
        </div>
        </>
    );
};

export default Product;