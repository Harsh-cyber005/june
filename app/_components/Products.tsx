
import React from 'react';
import { product } from '../constants/images';
import { Product_List } from '../constants/texts';
import ProductItem from './ProductItem';

function Products() {
    return (
        <div 
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${product.bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backdropFilter: 'brightness(0.5)'
        }} className='flex flex-col gap-12 md:gap-32 justify-center items-center text-white text-xl md:text-4xl font-bold py-20 md:py-32'>
            Top Product Categories
            <div className='flex justify-center items-center flex-wrap gap-20 px-3 md:px-8 lg:px-52'>
                {
                    Product_List.map((product, index) => (
                        <ProductItem key={index} product={product}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;
