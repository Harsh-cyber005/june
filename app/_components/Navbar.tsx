import React from 'react';
import Logo from './Logo';
import { Playfair_Display } from "next/font/google";
import NavItem from './NavItem';

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
                <section className="w-full h-full flex justify-center items-center gap-5">
                    <ul className="flex gap-10">
                        <li>
                            <NavItem text='About Us' href='/about'/>
                        </li>
                        <li>
                            <NavItem text='Services' href='/services'/>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    );
}

export default Navbar;
