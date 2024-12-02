"use client";
import React, { useEffect, useState } from 'react';
import { arrow_up } from '../constants/images';
import Image from 'next/image';

function GoUpButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div onClick={scrollToTop} className={`fixed bottom-0 right-0 h-[40px] w-[40px] translate-x-[-10px] translate-y-[-10px] bg-black opacity-50 text-white z-[999] flex justify-center items-center cursor-pointer hover:opacity-100 ${isVisible ? "flex" : "hidden"}`}>
            <button>
                <Image src={arrow_up} alt='go to top' width={20} height={20} />
            </button>
        </div>
    )
}

export default GoUpButton