"use client";

import Link from 'next/link'
import React from 'react'

interface NavItemProps {
    text: string,
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    const [width, setWidth] = React.useState('w-0')
    return (
        <Link href={href}>
            <span onMouseEnter={()=>{
                setWidth('w-full')
            }} onMouseLeave={()=>{
                setWidth('w-0')
            }} className='text-lg text-[rgba(0,0,0,0.63)] hover:text-red-800 duration-200 relative'>
                {text}
                <span className={`absolute h-[2px] bg-black -bottom-1 left-0 ${width} duration-200`}></span>
            </span>
        </Link>
    )
}

export default NavItem