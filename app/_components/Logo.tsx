import Link from 'next/link';
import React from 'react';

function Logo() {
    return (
        <div className="text-lg font-bold hover:opacity-70 duration-200 cursor-pointer flex justify-center items-center">
            <h1>
                <Link href="/">
                    LOGO
                    <sup className="text-xs">TM</sup>
                </Link>
            </h1>
        </div>
    )
}

export default Logo