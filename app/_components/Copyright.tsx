import React from 'react';
import { Company_Overview } from '../constants/texts';

function Copyright() {
    return (
        <div className='flex justify-center items-center bg-[#001216] p-5 text-white'>
            Copyright © 2022 {Company_Overview.name} Enterprises. All Rights Reserved.
        </div>
    )
}

export default Copyright