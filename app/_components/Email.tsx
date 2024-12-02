import React from 'react'
import Subscribe from './Subscribe'

function Email() {
    return (
        <div id='contact' className='w-full bg-[#AEFEFF] flex justify-center items-center flex-col lg:flex-row pb-10 lg:pb-0'>
            <div className='w-full h-full flex flex-col justify-end items-center gap-2 px-10 lg:px-20 py-10'>
                <div>
                    <h1 className='lg:text-4xl text-xl font-semibold'>Stay Connected</h1>
                    <p className='lg:text-lg text-base font-normal'>Don&apos;t miss new updates on your email</p>
                </div>
            </div>
            <div className='h-full w-full flex lg:justify-start justify-center items-center'>
                <Subscribe/>
            </div>
        </div>
    )
}

export default Email