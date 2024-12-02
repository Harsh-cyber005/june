import React from 'react';
import { contact_img, dash_icon } from '../constants/images';
import { Company_Overview } from '../constants/texts';
import Logo from './Logo';
import Image from 'next/image';
import { phone_icon } from '../constants/images';
import Link from 'next/link';
import ContactClient from './ContactClient';

function Contact() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contact_img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(0.5)'
            }} className='flex flex-col gap-5 justify-center items-center text-white  font-bold py-10 md:py-12'>
            <div className='w-full px-10 lg:px-20 flex justify-start items-center'>
                <Logo />
            </div>
            <div className='w-full px-10 lg:px-20 flex-col lg:flex-row flex justify-center items-center gap-10 lg:gap-0'>
                <div className='w-full flex flex-col justify-center items-start gap-2'>
                    <div className='text-2xl font-semibold'>{Company_Overview.full_name}</div>
                    <div className='text-base font-light'>{Company_Overview.address}</div>
                    <div className='w-full flex justify-start items-center text-base gap-3 my-5 flex-wrap'>
                        {
                            Company_Overview.phone_numbers.map((phone, index) => (
                                <div
                                    key={index}
                                    className='flex justify-center items-center gap-1 hover:text-[#AEFEFF] cursor-pointer group duration-75'
                                >
                                    <div className="relative w-[15px] h-[15px]">
                                        <Image
                                            src={phone_icon.light}
                                            alt="phone_icon"
                                            width={15}
                                            height={15}
                                            className="absolute inset-0 group-hover:hidden"
                                        />
                                        <Image
                                            src={phone_icon.dark}
                                            alt="phone_icon_hover"
                                            width={15}
                                            height={15}
                                            className="absolute inset-0 hidden group-hover:block"
                                        />
                                    </div>
                                    <div>{phone}</div>
                                </div>
                            ))
                        }
                    </div>
                    <ContactClient email={Company_Overview.email} />
                    <div className='w-full flex justify-start items-center gap-2'>
                        {
                            Company_Overview.social_media.map((social, index) => {
                                return (
                                    <div key={index} className='p-3 cursor-pointer group duration-200 hover:bg-[#aefeff] rounded-md border-[1px] border-solid border-[#aefeff5e]'>
                                        <Link href={social.link}>
                                            <Image className='group-hover:hidden' src={social.icons.light} alt={social.name} width={15} height={15}/>
                                            <Image className='group-hover:block hidden' src={social.icons.dark} alt={social.name} width={15} height={15}/>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <div className='p-3'>
                        Quick Links
                    </div>
                    {
                        Company_Overview.quick_links.map((link, index) => {
                            return (
                                <div key={index} className='flex justify-start items-center p-2 gap-2 group hover:text-[#aefeff]'>
                                    <Image className='group-hover:hidden' src={dash_icon.light} alt={"dash-icon"} width={15} height={15}/>
                                    <Image className='group-hover:block hidden' src={dash_icon.dark} alt={"dash-icon-dark"} width={15} height={15}/>
                                    <Link href={link.link}>
                                        <span>{link.title}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={Company_Overview.catalog_qr} alt='catalog_qr' width={300} height={300} />
                        <span>Scan the QR Code to download the Catalog</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact