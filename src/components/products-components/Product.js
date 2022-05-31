import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../reducers/BasketSlice';
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import "../../css/product.css"

const Product = ({ dataItem }) => {
    const dispatch = useDispatch();
    
    return (
        <>
        <div className="font-semibold product-background p-1 md:w-52 bg-">
        <Link to={`/productAbout/${dataItem.id}`}><div className='flex md:mx-10'><img src={dataItem.image.url} alt="" /></div></Link>
            <div className='md:flex text-sm'>
                <p className='pr-1 md:pr-2'>{dataItem.name}</p>
                <span className=''>{dataItem.variant_groups[1].options[0].name}</span>
            </div>
            <p>{dataItem.variant_groups[0].options[0].name}</p>
            <span>{dataItem.price.formatted_with_symbol}</span>
            <button onClick={() => {
                dispatch(addProduct(dataItem));
            }}><BsBasket/></button>
        </div>
        </>
    );
};

export default Product;