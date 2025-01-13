import { blogData, blogDataType } from '@/constants/blog'
import TypewriterEffect from '@/hooks/TypewriterEffect'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
    const title = 'Read our articles, news and product blog'
  return (
    <div className='my-10 lg:mb-24 px-[1.25rem] md:px-[2.5rem] xl:px-[7rem]'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-12'>
            <p className='text-[2rem] text-white leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0'>
                <TypewriterEffect text={title} wordDelay={0.3} initialDelay={0} />
            </p>
            <div className='w-fit relative group'>
                <button className='z-10 relative whitespace-nowrap hover:shadow-md flex gap-[10px] items-center justify-center group-hover:bg-[#064386] group-hover:text-white font-lexend text-black text-base font-[600] py-[12px] px-5 bg-white rounded-full cursor-pointer duration-300 transition-all'>
                    <span>Visit Blog</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="#000000" aria-hidden="true" id="Play--Streamline-Heroicons" height="16" width="16" className="group-hover:fill-white">
                        <desc>Play Streamline Icon: https://streamlinehq.com</desc>
                        <path fill-rule="evenodd" d="M2.8125 3.5331249999999996c0 -0.891875 0.955625 -1.45625 1.736875 -1.026875l7.2124999999999995 3.9668750000000004c0.809375 0.44499999999999995 0.809375 1.608125 0 2.05375L4.55 12.493749999999999c-0.78125 0.42937500000000006 -1.736875 -0.135625 -1.736875 -1.026875V3.5331249999999996Z" clip-rule="evenodd" stroke-width="1">
                        </path>
                    </svg>
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
        </div>
        <div className='flex flex-col justify-center gap-8 md:gap-10 lg:gap-12 lg:flex-row'>
            {
                blogData.map(({url, title, date, description, link}: blogDataType, index) => (
                    <Link key={index} href={link} target='_blank' className='w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-[#60a6e7] transition-all duration-500'> 
                        <div className='h-60 sm:h-56 relative mb-6'>
                            <span className='bg-[#60a6e7] z-0 w-full h-full top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse'></span>
                            <Image src={url} width={20} height={20} alt={description} className='absolute h-full w-full inset-0 object-cover text-transparent' />
                        </div>
                        <div className='pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] group-hover:translate-x-4 animate-customAnimate'>
                            <p className='text-lg font-semibold mb-1 text-white'>Blog</p> 
                            <div className='text-base text-darkGrey flex items-center mb-6'>
                                <span>{title}</span>
                                <div className='h-2 text-white w-2 rounded-full bg-white mx-[0.376rem]'></div>
                                <span>{date}</span>
                            </div>
                            <h6 className='text-xl text-white md:text-2xl font-semibold line-clamp-2'>
                                {description}
                            </h6>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Blog