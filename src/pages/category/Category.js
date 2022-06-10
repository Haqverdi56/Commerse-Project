import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../../reducers/BasketSlice'
import { BsBasket } from 'react-icons/bs'
import commerce from "../../lib/Ecommerce";
import { Link } from "react-router-dom";
// import Accordion from "../category/Accordion"

const Category = () => {
    const [phones, setPhones] = useState([])
    const [categories,setCategories] = useState([])
    const productAdded = useRef(null);
    const categoryName = useSelector(state=>state.category.value)
    const dispatch = useDispatch();
    let path = window.location.pathname.split('/')

    useEffect(() => {
        if(!phones) {
          commerce.products.list({
              category_slug: [`${categoryName.slug}`],
          }).then(response => setPhones(response.data))
        }else {
            commerce.products.list({
                category_slug: [`${path[path.length-1]}`],
            }).then(response => setPhones(response.data))
        }
      }, [categoryName])

      useEffect(() => {
        commerce.categories.list().then((category) => {
            setCategories(category.data[0].children);
        });
      }, [])

  return (
    <>
    <div className="md:flex container mx-auto px-4 md:mt-20 pb-20 justify">
        <div className="w-72 hidden md:block" style={{minWidth: "220px"}}>
            <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Brend
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex flex-col gap-2">
                                {categories.map((category, i) => {
                                    return (
                                    <div key={i}>
                                        <input type="checkbox" value={category.name}/>
                                        <label className="pl-2 md:text-lg text-base">{category.name}</label>
                                        {/* if(path[path.length-1] === category.name) {
                                                console.log(e.target, "2");
                                                e.target.setAttribute("checked", true)
                                        } */}
                                    </div>
                                    )
                                })}
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Type
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                None
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
            </Accordion>    
        </div>
        <div>
            <div className="flex md:gap-16 gap-5 flex-wrap md:ml-3 mt-7 md:mt-0 ml-5">
                {phones.map((dataItem, index) => {
                    return (
                        <div key={index} className='font-semibold product-background p-3 md:px-3' style={{maxWidth: "150px"}}>
                            <Link to={`/productAbout/${dataItem.id}`} params={{id: dataItem.id}}>
                                <div className='flex w-40 h-40 ml-0'>
                                    <img src={dataItem.image.url} alt="" />
                                </div>
                            </Link>
                            <div className='md:flex text-sm flex-wrap'>
                                <p>{dataItem.name}</p>
                                <p className='pr-2'>{dataItem?.variant_groups[1]?.options[0]?.name}</p>
                                <p>{dataItem.variant_groups[0]?.options[0]?.name}</p>
                            </div>
                            <div className="md:flex items-center justify-between">
                                <span>{dataItem.price.formatted_with_symbol}</span>
                                <button className="pr-4 float-right text-green-500" onClick={() => {
                                    dispatch(addProduct(dataItem));
                                    productAdded.current.className = "product-added fixed right-10 bottom-10 font-normal"
                                    setTimeout(() => {
                                        productAdded.current.className = "hidden"
                                    }, 2000);
                                }}><BsBasket/></button>
                                <p ref={productAdded} className='hidden'>Məhsul əlavə edildi</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
  );
};

export default Category;
