'use client'

import { storiesData } from '@/constants/stories'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Starks from './client-stories/Starks'
import ExecutivePros from './client-stories/ExecutivePros'
import StacAI from './client-stories/StacAI'
import Iwaria from './client-stories/Iwaria'
import Beaupreneur from './client-stories/Beaupreneur'
import './stories.css'

const StartupStories = () => {
    const [active, setActive] = useState('starks');
    const buttons = ['starks', 'executivepros', 'stacai', 'iwaria', 'beaupreneur'];

    useEffect(() => {
        const interval = setInterval(() => {
          setActive((prevActive) => {
            const currentIndex = buttons.indexOf(prevActive);
            const nextIndex = (currentIndex + 1) % buttons.length;
            return buttons[nextIndex];
          });
        }, 25000);
    
        return () => clearInterval(interval);
      }, [buttons]);

  return (
    <section className='min-h-screen w-full flex flex-col py-10 px-[1.25rem] md:px-[2.5rem] xl:px-[7rem]'>
        <div className='w-full flex flex-col text-center mb-12'>
            <p className='sm:leading-[2.5rem] sm:text-[2.2rem] text-[2rem] leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] text-white'>Discover the <span className='text-[#60a6e7]'>transformative stories</span> of</p>
            <p className='sm:leading-[2.5rem] sm:text-[2.2rem] text-[2rem] leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] text-white'>startups that scaled new heights with us</p>
        </div>
        <div className='w-full'>
            <div className='overflow-x-scroll hide-scrollbar'>
                <div className='w-full border-[1px] border-[#06438c] flex rounded-full gap-2 min-w-[750px]'>
 
                    {
                        storiesData.map(({url, text}, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(text)}
                                className={`${
                                active === text ? 'bg-[#0c2645]' : ''
                                } p-[1.1rem] w-full flex justify-center items-center cursor-pointer transition-all duration-300 ${
                                text === 'starks' ? 'rounded-s-full' : ''
                                } ${text === 'beaupreneur' ? 'rounded-e-full' : ''}`}
                            >
                                <span className='w-fit h-full flex justify-center items-center gap-1.5'>
                                <Image
                                    src={`https://forcythe.com/images/${url}.svg`}
                                    alt={`${text}_logo`}
                                    width={20}
                                    height={20}
                                    className={`${
                                        text === 'beaupreneur' ? 'w-36' :
                                        text === 'iwaria' ? 'w-20' :
                                        text === 'executivepros' ? 'w-fit h-fit' :
                                        'w-full'
                                        }`}
                                />
                                {
                                    text === 'starks' && (
                                        <span className='text-white font-[500] text-[17px]'>
                                            {text.charAt(0).toUpperCase() + text.slice(1)}
                                        </span>
                                    )
                                }
                                </span>
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className='mt-[1.5rem]'>
                {
                    active === 'starks' && (
                        <Starks />
                    )
                }
                {
                    active === 'executivepros' && (
                        <div className=''>
                            <ExecutivePros />
                        </div>
                        
                    )
                }
                {
                    active === 'stacai' && (
                        <div className=''>
                            <StacAI />
                        </div>
                        
                    )
                }
                {
                    active === 'iwaria' && (
                        <Iwaria />
                    )
                }
                {
                    active === 'beaupreneur' && (
                        <Beaupreneur />
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default StartupStories