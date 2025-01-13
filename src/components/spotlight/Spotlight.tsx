'use client'
import React, { useState } from 'react'
import Idea from './spotlight-tab/Idea'
import Design from './spotlight-tab/Design'
import Develop from './spotlight-tab/Develop'
import Launch from './spotlight-tab/Launch'
import Image from 'next/image'

const Spotlight = () => {
    const [active, setActive] = useState('idea')
    const buttonTexts = ['idea', 'design', 'develop', 'launch']
  return (
    <section className='w-full px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] min-h-screen py-20'>
        <div className='max-w-[45rem] mb-12'>
            <p className='sm:leading-[2.5rem] sm:text-[2.2rem] text-[2rem] leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] text-white'>
                From <span className='text-[#60a6e7]'>Spark</span> to <span className='text-[#60a6e7]'>Spotlight:</span> we take you every step of the way to success.
            </p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-2'>
            {/* <div className='flex w'> */}
                <div className='flex flex-col md:w-[50%] w-full'>
                    <div className='w-full border-[2px] border-[#06438c] flex justify-center rounded-full gap-1 p-3.5 mb-12'>
                        {
                            buttonTexts.map((buttonText) => (
                                <button 
                                key={buttonText}
                                onClick={() => setActive(buttonText)}
                                className={`${active === buttonText ? 'bg-[#B3D0F2] text-black' : 'text-white bg-transparent'} flex w-full justify-center items-center text-base py-3 px-2 rounded-full cursor-pointer overflow-hidden duration-300 transition-all font-[500] `}
                                >
                                    {buttonText.charAt(0).toUpperCase() + buttonText.slice(1)}
                                </button>
                            ))
                        }
                    </div>
                    <div>
                        {
                            active === 'idea' && (
                                <Idea />
                            )
                        }
                        {
                            active === 'design' && (
                                <Design />
                            )
                        }
                        {
                            active === 'develop' && (
                                <Develop />
                            )
                        }
                        {
                            active === 'launch' && (
                                <Launch />
                            )
                        }
                    </div>
                    <div className='w-fit relative group'>
                        <button className='z-10 relative whitespace-nowrap hover:shadow-md flex gap-[10px] items-center justify-center group-hover:bg-[#064386] group-hover:text-white font-lexend text-black text-base font-[600] py-[12px] px-5 bg-white rounded-full cursor-pointer duration-300 transition-all'>
                            <span>Book a Call</span>
                            {/* <Image src="https://forcythe.com/images/play.svg" className='group-hover:block text-transparent' width="10" height="10" alt="play_icon" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="#000000" aria-hidden="true" id="Play--Streamline-Heroicons" height="16" width="16" className="group-hover:fill-white">
                                <desc>Play Streamline Icon: https://streamlinehq.com</desc>
                                <path fill-rule="evenodd" d="M2.8125 3.5331249999999996c0 -0.891875 0.955625 -1.45625 1.736875 -1.026875l7.2124999999999995 3.9668750000000004c0.809375 0.44499999999999995 0.809375 1.608125 0 2.05375L4.55 12.493749999999999c-0.78125 0.42937500000000006 -1.736875 -0.135625 -1.736875 -1.026875V3.5331249999999996Z" clip-rule="evenodd" stroke-width="1">
                                </path>
                            </svg>
                        </button>
                        <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full flex justify-start md:justify-end'>
                    {
                        active === 'idea' && (
                            <Image src='https://forcythe.com/images/camera-man.svg' alt='camera_man_icon' width={20} height={20} className='w-full h-[350px] md:w-[95%] lg:w-[90%] lg:h-[426px]' />
                        )
                    }
                    {
                        active === 'design' && (
                            <Image src='https://forcythe.com/images/plan-design.svg' alt='plan_design_icon' width={20} height={20} className='w-full h-[350px] md:w-[95%] lg:w-[90%] lg:h-[426px]' />
                        )
                    }
                    {
                        active === 'develop' && (
                            <Image src='https://forcythe.com/images/plan-develop.svg' alt='plan_develop_icon' width={20} height={20} className='w-full h-[350px] md:w-[95%] lg:w-[90%] lg:h-[426px]' />
                        )
                    }
                    {
                        active === 'launch' && (
                            <Image src='https://forcythe.com/images/plan-launch.svg' alt='plan_launch_icon' width={20} height={20} className='w-full h-[350px] md:w-[95%] lg:w-[90%] lg:h-[426px]' />
                        )
                    }
                </div>
            {/* </div> */}
        </div>
    </section>
  )
}

export default Spotlight