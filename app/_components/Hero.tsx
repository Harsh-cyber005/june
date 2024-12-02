import React from 'react';
import { Company_Overview } from '../constants/texts';
import Image from 'next/image';
import HeroClient from './HeroClient';

function Hero() {
    return (
        <div id='about' className='w-full flex flex-col lg:flex-row justify-center items-center p-10 lg:p-20 gap-5'>
            <section className='w-full flex flex-col gap-2 p-5 lg:p-0'>
                <h1 className='text-2xl font-bold'>{Company_Overview.title}</h1>
                <p>
                    {Company_Overview.description}
                </p>
            </section>
            <section className='w-full p-5 rounded-2xl relative'>
                <Image src={Company_Overview.image} alt={Company_Overview.alt} width={1920} height={1080} className='rounded-2xl shadow-2xl' />
                <HeroClient/>
            </section>
        </div>
    )
}

export default Hero;