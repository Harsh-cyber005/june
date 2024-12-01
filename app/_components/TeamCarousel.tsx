"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { team } from '../constants/slides';

function TeamCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, startIndex: 0},
        [Autoplay({ delay: 7000 })]
    );

    return (
        <div className="embla relative">
            <div
                className="embla_viewport_unscroll mx-auto max-h-[600px] bg-[#062226] text-white"
                ref={emblaRef}
            >
                <div className="embla__container h-full pt-5">
                    {team.map((member, index) => (
                        <div key={index} className="embla__slide flex items-center justify-center">
                            <div className="w-full h-full flex flex-col gap-3">
                                <p className='sm:text-lg text-xs'>{member.talk}</p>
                                <div className="sm:text-lg text-xs font-bold flex gap-2">
                                    <span>{member.name}</span>
                                    <span>{member.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamCarousel;
