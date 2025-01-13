import TypewriterEffect from '@/hooks/TypewriterEffect'
import Image from 'next/image'
import React from 'react'

const ExecutivePros = () => {
    const title= 'ExecutivePros'
    const paragraph = 'The team understood the assignment and delivered verywell. One of the things that stood them out was howthey took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!'
    const citation = 'Testimony, Co-founder'
    return (
    <div className='p-[1.7rem] bg-[#0c2645] rounded-[2rem] w-full sm:w-[55%] h-full text-white flex flex-col sm:flex-row gap-2'>
        <div className='flex flex-col items-start gap-4 sm:w-[58%] w-full mb-5 sm:mb-0'>
            <h3 className='text-base font-bold'>
                <TypewriterEffect text={title} wordDelay={0.2} />
            </h3>
            <p className='leading-7text-base'>
                <TypewriterEffect text={paragraph} wordDelay={0.3} />
            </p>
            <h3 className='text-base font-bold'>
                <TypewriterEffect text={citation} wordDelay={0.3} initialDelay={7} />
            </h3>
        </div>
        <div className='sm:w-[42%] w-full h-[20rem] sm:h-auto relative object-top mt-3 sm:mt-0'>
            {/* <div className='bg-[#60a6e7] z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl'></div> */}
            <Image src='https://forcythe.com/images/executive-pro-ceo.svg' alt='john_stark_associate' width={20} height={20} 
                className='w-full h-full rounded-xl object-cover'
             /> 
        </div>
    </div>
  )
}

export default ExecutivePros