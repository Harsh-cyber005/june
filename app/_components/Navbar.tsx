import React from 'react';
import Logo from './Logo';
import { Playfair_Display } from "next/font/google";
import NavItem from './NavItem';
import NavbarClient from './NavbarClient';

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
    weight: ["400","900"],
});

function Navbar() {
    return (
        <nav className={`h-[80px] shadow-md ${playfairDisplay.className}`}>
            <div className="flex justify-center items-center h-full">
                <section className="w-[90%] h-full flex justify-center items-center">
                    <Logo />
                </section>
                <section className="w-full h-full justify-center items-center gap-5 hidden md:flex">
                    <ul className="flex gap-10">
                        <li>
                            <NavItem text='About Us' href='#about'/>
                        </li>
                        <li>
                            <NavItem text='Products' href='#products'/>
                        </li>
                        <li>
                            <NavItem text='Contact Us' href='#contact'/>
                        </li>
                    </ul>
                </section>
                <NavbarClient/>
            </div>
        </nav>
    );
}

export default Navbar;
