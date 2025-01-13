import { links } from '@/constants/footLinks'
import { socialLinks, SocialLinkType } from '@/constants/socialLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-10 px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] bg-secondarBg'>
        <div className='my-10 gap-10 flex flex-col lg:flex-row'>
            <div className='flex flex-col lg:w-[30%] w-full'>
                <div className='flex w-full'>
                    <input type="text" 
                    placeholder='Your Email Address'
                        className='py-3 w-[75%] rounded-s-full bg-transparent outline-none px-4 text-sm border border-white placeholder:text-[#79767D]'
                    />
                    <button 
                        className='py-3 h-full bg-white text-black
                        hover:bg-[#064386]
                        hover:text-white w-[25%] rounded-e-full text-sm font-medium border border-l-0 border-white'
                    >
                        Subscribe
                    </button>
                </div>
                <div className='w-full mt-5 gap-3 flex items-center'>
                    <div className='w-5 h-5 border-2 rounded-full bg-transparent
                    border-white cursor-pointer flex items-center justify-center'
                    >
                        <input type="checkbox" name='agreement' id='agreement' className='hidden' />
                    </div>
                    <label htmlFor="agreement" className='text-white text-sm cursor-pointer'>
                        I agree to receive other notifications from Forcythe
                    </label>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 lg:w-[70%] w-full'>
                <div className='md:w-[60%] w-full lg:pl-14 md:pr-1'>
                    <Image 
                        src='https://forcythe.com/images/forcythe%20logo.svg' alt='' className='mb-5 md:mb-8' width={130} height={9} />
                    <p className='text-base text-darkGrey font-normal'>
                        We are the growth company for businesses looking to scale.
                        We are dedicated to transforming businesses with bespoke 
                        digital solutions that drive growth.
                    </p>
                    <div className='mt-10 hidden md:flex items-center gap-2'>
                        {
                            socialLinks.map(({url, image}: SocialLinkType, index) => (
                                <Link href={url}
                                    key={index}
                                    target='_blank' 
                                    className='w-9 h-9 cursor-pointer rounded-full border-[1px] flex justify-center items-center border-[#60a6e7]'
                                >
                                    <Image 
                                        src={image}
                                        alt='social'
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='md:w-[40%] w-full lg:pl-10'>
                    <h3 className='mb-8 text-2xl text-white font-bold'>
                        Company
                    </h3>
                    <ul className='flex flex-col gap-2'>
                        {
                            links.map((link) => (
                                <li key={link} className='text-base text-[#B3D0F2] font-medium'>
                                    <Link href={`/${link}`}>
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer