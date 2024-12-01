"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ReadMoreProps {
    src: string;
}

function ReadMore({ src }: ReadMoreProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <Link href={src} onMouseOver={()=>{
            setIsHovered(true)
        }} onMouseLeave={()=>{
            setIsHovered(false)
        }} className='cursor-pointer rounded-full relative w-[135px] h-[45px]'>
            <div className='flex w-full h-full relative'>
                <div className='flex justify-center items-center gap-3 w-full h-full absolute z-10'>
                    <div>
                        <Image src='/images/arrow_right.svg' alt='Arrow Icon' width={20} height={20} />
                    </div>
                    <button className={`text-base font-normal text-black duration-500`}>
                        Read More
                    </button>
                </div>
                <div className={`absolute ${isHovered?"w-full":"w-[33%]"} h-full bg-[#AEFEFF] rounded-full z-1 duration-500 shadow-sm`}></div>
            </div>
        </Link>
    )
}

export default ReadMore