import Image from 'next/image';
import React from 'react';
import ProductItemClient from './ProductItemClient';

interface ProductItemProps {
    product: {
        title: string;
        image: string;
        alt: string;
        src: string;
    }
}

function ProductItem({ product }: ProductItemProps) {
    return (
        <div className='h-[300px] w-[300px] flex flex-col justify-center items-center gap-5'>
            <Image src={product.image} alt={product.alt} width={70} height={70}/>
            <h1 className='flex justify-center items-center text-center text-[#AEFEFF] text-2xl font-semibold'>
                {product.title}
            </h1>
            <ProductItemClient src={product.src}/>
        </div>
    )
}

export default ProductItem