import React, {useState, useEffect} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import commerce from '../../lib/Ecommerce.js'

const Category = () => {
    const [data,setData] = useState([])
    useEffect(() => {
      commerce.products.list().then((product) => setData(product.data));
    }, [])

    console.log(data);
  return (
    <>
    <div className="flex container mx-auto px-4 md:mt-20 pb-20">
        <div className="w-72">
        <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Brend
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="checkbox"/>
                                <label className="pl-2 md:text-lg text-base">Apple</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label className="pl-2">Samsung</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label className="pl-2">Xiaomi</label>
                            </div>
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
        <div className="flex gap-20 flex-wrap ml-3 ">
        {data.map((data, index) => {
            return (
                <div key={index} className='font-semibold product-background p-1'>
                    <img src={data.image.url} alt=""/>
                    <div className='md:flex text-sm'>
                        <p className='pr-1 md:pr-2'>{data.name}</p>
                        <span className=''>{data.variant_groups[1].options[0].name}</span>
                    </div>
                    <p>{data.variant_groups[0].options[0].name}</p>
                    <span>{data.price.formatted_with_symbol}</span>
                </div>
            )
        })}
        </div>
    </div>
    </>
  );
};

export default Category;
