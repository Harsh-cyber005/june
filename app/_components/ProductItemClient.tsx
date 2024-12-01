"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItemClientProps {
    src: string;
}

function ProductItemClient({ src }: ProductItemClientProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <Link href={src} onMouseOver={()=>{
            setIsHovered(true)
        }} onMouseLeave={()=>{
            setIsHovered(false)
        }} className='cursor-pointer rounded-full relative w-[45%] h-[15%]'>
            <div className='flex w-full h-full relative'>
                <div className='flex justify-center items-center gap-3 w-full h-full absolute z-10'>
                    <div>
                        <Image src='/images/arrow_right.svg' alt='Arrow Icon' width={20} height={20} />
                    </div>
                    <button className={`text-base font-normal ${isHovered?"text-black":"text-white"} duration-500`}>
                        Read More
                    </button>
                </div>
                <div className={`absolute ${isHovered?"w-full":"w-[33%]"} h-full bg-[#AEFEFF] rounded-full z-1 duration-500 shadow-2xl`}></div>
            </div>
        </Link>
    )
}

export default ProductItemClient