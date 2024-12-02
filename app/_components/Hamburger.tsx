"use client";
import React, { useState } from "react";
import "./styles.css";

interface HamburgerMenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({setIsOpen}:HamburgerMenuProps) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div onClick={()=>{
            setIsOpen((prev)=>!prev)
        }} className="hamburger-menu mr-[-40px]">
            <button
                className={`McButton ${isActive ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};

export default HamburgerMenu;
