/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from 'react'
import { Company_Overview } from '../constants/texts';

function HeroClient() {
    const [isInView, setIsInView] = useState(false);
    const [yearCount, setYearCount] = useState(0);
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        const elem = divRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold: 0.5,
            }
        );
        if (elem) {
            observer.observe(elem);
        }
        return () => {
            if (elem) {
                observer.unobserve(elem);
            }
        };
    }, []);

    useEffect(()=>{
        if(isInView && !isDone){
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setYearCount(count);
                if(count === Company_Overview.years){
                    clearInterval(interval);
                    setIsDone(true);
                }
            }, 50);
            return () => clearInterval(interval);
        }
    },[isInView]);

    const divRef = useRef(null);
    return (
        <div ref={divRef} className='absolute bottom-[30px] left-[40px] w-[150px] h-[100px] sm:w-[30%] sm:min-w-[150px] sm:h-[40%] sm:min-h-[120px] bg-[rgba(0,0,0,0.6)] rounded-2xl text-white flex flex-col justify-center items-center gap-2 duration-200'>
            <h1 className='text-4xl sm:text-6xl font-bold'>
                {yearCount}+
            </h1>
            <span className='text-xs sm:text-sm'>
                Years of Experience
            </span>
        </div>
    )
}

export default HeroClient