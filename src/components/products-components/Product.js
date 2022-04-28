import React from 'react';
// import AznIcon from '../../images/azn.svg'
import "../../css/product.css"

const Product = ({ data }) => {
    console.log(data.variant_groups[0]);

    return (
        <>
        <div className="font-semibold product-background p-1 md:w-52">
            <div className='flex'><img src={data.image.url} alt="" /></div>
            <div className='md:flex text-sm'>
                <p className='pr-1 md:pr-2'>{data.name}</p>
                <span className=''>{data.variant_groups[1].options[0].name}</span>
            </div>
            <p>{data.variant_groups[0].options[0].name}</p>
            <span>{data.price.formatted_with_symbol}</span>
        </div>
        </>
    );
};

export default Product;