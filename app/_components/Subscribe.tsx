"use client";
import React from 'react';

function Subscribe() {
    return (
        <div className="relative w-[80%] h-full flex items-center bg-red-300 text-xs">
            <div className='border-2 w-full border-black border-solid rounded-md shadow-2xl flex'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-l-md shadow-sm focus:outline-none"
                />
                <button
                    className="px-6 py-3 h-full text-white bg-black hover:bg-[#252525] rounded-r-md font-semibold shadow-md transition-all focus:ring-2 focus:ring-black border-black border-2 border-solid w-[30%] lg:w-max flex justify-center items-center"
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    );
}

export default Subscribe;
