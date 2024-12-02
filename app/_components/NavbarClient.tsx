"use client";

import React from 'react'
import HamburgerMenu from './Hamburger'
import NavItem from './NavItem'

function NavbarClient() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <section className='w-full h-full justify-center items-center md:hidden flex relative'>
            <div className='w-full h-full flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-[200]'>
                <HamburgerMenu setIsOpen={setIsOpen}/>
            </div>
            <div id='' className={`w-[80%] min-w-[200px] flex flex-col justify-center items-start absolute bottom-0 right-0 bg-[#ffffffe4] shadow-2xl z-[100] ${isOpen?"translate-y-[100%] opacity-100":"opacity-0"} duration-200`}>
                <div className='hover:bg-[white] w-full p-5'>
                    <NavItem text='About Us' href='/about' />
                </div>
                <div className='hover:bg-[white] w-full p-5'>
                    <NavItem text='Products' href='/products' />
                </div>
                <div className='hover:bg-[white] w-full p-5'>
                    <NavItem text='Contact Us' href='/contact' />
                </div>
            </div>
        </section>
    )
}

export default NavbarClient