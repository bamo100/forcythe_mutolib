'use client'

import { navLinks } from '@/constants/navLink'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



const Header = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarVisible(!isNavbarVisible);
    };
  return (
    <div className='navbar px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] gap-10 py-[1.8rem] w-full fixed z-30 backdrop-blur-md flex items-center justify-between top-0 left-0'>
        <div className='flex items-center gap-20'>
            <Link href='/'>
                <Image src="https://forcythe.com/images/forcythe%20logo.svg" width="150" height="10" alt='Forcythe logo'/>
            </Link>
            <div className='hidden md:flex flex-row items-center gap-4'>
                {
                    navLinks.map(({label, route}, index) => (
                        <Link 
                            href={route} 
                            key={index}
                            className='font-lexend text-base text-[#ffffff]'
                        >
                            {label}
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className='hidden md:block'>
            <div className='w-fit relative group'>
                <button className='z-10 duration-300 transition-all relative whitespace-nowrap hover:shadow-md group-hover:bg-[#064386] group-hover:text-white font-lexend text-black text-base font-[600] py-[12px] px-5 bg-white rounded-full cursor-pointer'>
                    <span>Book a Call</span>
                    {/* <div className="absolute bg-transparent border-[2px] border-dotted border-white -z-20 top-7 right-2 h-full rounded-xl"></div> */}
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
        </div>

        <div className='bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer' onClick={toggleNavbar}>
            <Image src='https://forcythe.com/images/menu.svg' alt='menu-button' width={18} height={18} />
        </div>
            
        {isNavbarVisible && ( 
            <div className='border-0 flex transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[99999999] bg-primaryBg w-60 rounded-2rem fixed md:hidden right-5 top-28'>
                <div className='text-white z-10 bg-black rounded-[inherit] w-full'>
                    <div className='w-full p-5 py-8 rounded-[2rem] bg-navbar-gradient'>
                        <ul className='flex flex-col'>
                            {
                                navLinks.map(({label, route}, index) => (
                                    <li key={label} className='w-full py-2.5 text-white'>
                                        <Link 
                                            href={route} 
                                            key={index}
                                            className='font-lexend text-base text-[#ffffff]'
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Header