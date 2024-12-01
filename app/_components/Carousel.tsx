"use client";

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { slides } from '../constants/slides';
import Image from 'next/image';
import { moveSlide } from '../constants/images';

function Carousel() {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, startIndex: 0}, [Autoplay({delay:5000})]);

    const scrollPrev = useCallback(()=>{
        if(emblaApi) emblaApi.scrollPrev();
    },[emblaApi]);

    const scrollNext = useCallback(()=>{
        if(emblaApi) emblaApi.scrollNext();
    },[emblaApi]);

    useEffect(()=>{
        setActiveSlide(0);
    },[])

    useEffect(()=>{
        if(emblaApi){
            emblaApi.on('select', ()=>{
                setActiveSlide(emblaApi.selectedScrollSnap());
            })
        }
    })

    return (
        <div className='embla relative'>
            <div className={`embla_viewport mx-auto max-h-[600px] bg-slate-800 text-white`} ref={emblaRef}>
                <div className="embla__container h-full">
                    {
                        slides.map((slide, index) => (
                            <div key={index} className="embla__slide flex items-center justify-center">
                                <Image src={slide.src} alt={slide.alt} width={1536} height={600} loading={index===0?"eager":"lazy"} priority={index===0}/>
                            </div>
                        ))
                    }
                </div>
                <button className='embla_prev absolute top-[50%] translate-y-[-50%] left-0 m-5 bg-[black] opacity-20 hover:opacity-100 duration-200 hover:bg-red-950 h-[25px] w-[25px] md:h-[30px] md:w-[30px] rounded-md flex justify-center items-center p-2' onClick={scrollPrev}>
                    <Image src={moveSlide.prev} alt='Previous' width={20} height={20} loading='lazy'/>
                </button>
                <button className='embla_next absolute top-[50%] translate-y-[-50%] right-0 m-5 bg-[black] opacity-20 hover:opacity-100 duration-200 hover:bg-red-950 h-[25px] w-[25px] md:h-[30px] md:w-[30px] rounded-md flex justify-center items-center p-2' onClick={scrollNext}>
                    <Image src={moveSlide.next} alt='Next' width={20} height={20} loading='lazy'/>
                </button>
                <div className='absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[-20px] flex md:gap-4 gap-2'>
                    {slides.map((slide, index) => (
                        <div onClick={()=>{
                            if(emblaApi) emblaApi.scrollTo(index);
                            setActiveSlide(index);
                        }} key={index} className={`w-[18px] h-[6px] md:w-[30px] md:h-[10px] hover:bg-red-900 rounded-md cursor-pointer ${activeSlide === index ? "bg-red-800": "bg-slate-800"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel