import React from 'react';
import Iphone11 from '../images/iphone11banner.png';
import AirTag from '../images/airtagbanner.png';

const Banner = () => {
    return (
        <div className="md:flex justify-between mb-8 container mx-auto px-4">
            <img src={Iphone11} alt=""/>
            <img src={AirTag} alt=""/>
        </div>
    );
};

export default Banner;