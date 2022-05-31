import React, { useEffect } from 'react'
import HeaderSlider from '../../components/header-components/HeaderSlider'
import DeliveryGuaranty from '../../components/DeliveryGuaranty.js'
import Categories from '../../components/Categories'
import Companies from '../../components/Companies.js'
import ProductList from "../../components/products-components/ProductList";
import Banner from "../../components/Banner";
import { useDispatch } from 'react-redux';
import commerce from '../../lib/Ecommerce.js';
import {addMobile} from '../../reducers/MobileReducer'


const HomePage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    commerce.products.list({
      category_slug: ['telefonlar'],
    }).then(response => dispatch(addMobile(response.data)));
  }, [dispatch])
  

  return (
    <>
    <HeaderSlider/>
    <div className="App">
        <ProductList  category={"Ən çox satılan məhsullar"} link={"products.html"}/>
        <ProductList  category={"Yeni gələn məhsullar"} link={"new.html"}/>
        <Banner/>
        <ProductList  category={"Yeni gələn aksessuarlar"} link={"newaccs.html"}/>
        <Categories/>
        <DeliveryGuaranty/>
    </div>
    <Companies/>
    </>
  )
}

export default HomePage