import React,{useState,useEffect} from 'react'
import HeaderSlider from '../../components/header-components/HeaderSlider'
import DeliveryGuaranty from '../../components/DeliveryGuaranty.js'
import Categories from '../../components/Categories'
import Companies from '../../components/Companies.js'
import ProductList from "../../components/products-components/ProductList";
import Banner from "../../components/Banner";

import commerce from '../../lib/Ecommerce.js'


const HomePage = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    commerce.products.list({
      category_slug: ['telefonlar'],
    }).then(response => setData(response.data));
  }, [])
  
    
  // console.log(data)

  return (
    <>
    <HeaderSlider/>
    <div className="App">
        <ProductList data={data} category={"Ən çox satılan məhsullar"} link={"products.html"}/>
        <ProductList data={data} category={"Yeni gələn məhsullar"} link={"new.html"}/>
        <Banner/>
        <ProductList data={data} category={"Yeni gələn aksessuarlar"} link={"newaccs.html"}/>
        <Categories/>
        <DeliveryGuaranty/>
    </div>
    <Companies/>
    </>
  )
}

export default HomePage