import React from 'react';
import Image from 'next/image';
import { email_icon } from '../constants/images';

interface ContactClientProps {
    email: string;
}

function ContactClient({ email }: ContactClientProps) {
    return (
        <div className='w-full flex justify-start items-center gap-2 group cursor-pointer hover:text-[#aefeff] duration-75 mb-3'>
            <Image src={email_icon.light} className='group-hover:hidden' alt='email_icon' width={15} height={15} />
            <Image src={email_icon.dark} className='hidden group-hover:block' alt='email_icon' width={15} height={15} />
            {email}
        </div>
    )
}

export default ContactClient