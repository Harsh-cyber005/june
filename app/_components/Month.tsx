import Link from 'next/link'
import React from 'react'
import { Month_PD } from '../constants/texts'
import Image from 'next/image'
import ReadMore from './ReadMore'
import TeamCarousel from './TeamCarousel'

function Month() {
    return (
        <div className='relative'>
            <div className='pl-14 lg:pl-24 pt-14 lg:pt-24 pb-14 lg:pb-24 pr-14 lg:pr-10 flex flex-col lg:flex-row gap-14 lg:gap-7 justify-center items-start'>
                <div className='w-full lg:w-[40%] flex flex-col justify-center gap-3'>
                    <h1 className='text-2xl font-bold'>Product of the Month</h1>
                    <Link href={"/product-of-the-month"}>
                        <h1 className='italic text-lg font-normal'>
                            {Month_PD.title}
                        </h1>
                    </Link>
                    <p className='text-slate-700'>
                        {Month_PD.description}
                    </p>
                    <ul className='text-slate-700 flex flex-col justify-center gap-1'>
                        {Month_PD.features.map((feature, index) => (
                            <li key={index}>
                                <input type='checkbox' checked readOnly className='mr-2' />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className='h-[45px] w-[135px] flex flex-col justify-center items-center gap-5'>
                        <ReadMore src='/product-of-the-month' />
                    </div>
                </div>
                <div className='w-full lg:w-[60%] rounded-xl'>
                    <Image src={Month_PD.image} alt='Product of the Month' width={1920} height={1080} className='rounded-xl shadow-2xl' />
                </div>
            </div>
            <div className='h-[200px] hidden 2xl:flex'></div>
            <div className='bg-[#4FBDBA] absolute bottom-0 left-0 xl:w-[750px] w-[700px] px-14 lg:px-24 pt-14 pb-10 flex-col gap-5 translate-y-[-100px] hidden 2xl:flex'>
                <h1 className='text-black text-2xl font-semibold italic'>Happy to be a part of the team</h1>
                <p className='text-white pr-24'>
                    June invests more in human resources for great Team building which is always a priority and getting a good team is like a blessing and feel proud to have such a lovely, energetic and confident team. We try to maintain work culture as fairly free and make sure that every teammate is in a position to take their own decision and we all stand by the same.
                </p>
            </div>
            <div className='bg-[#062226] absolute bottom-0 right-0 xl:w-[950px] w-[900px] max-h-[340px] overflow-hidden px-14 lg:px-24 pt-14 pb-10 gap-5 hidden 2xl:flex flex-col justify-start items-center'>
                <h1 className='text-white text-2xl font-semibold italic'>Our Team</h1>
                <div>
                    <TeamCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Month