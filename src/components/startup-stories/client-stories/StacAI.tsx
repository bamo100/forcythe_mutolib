import Image from 'next/image'
import React from 'react'
import TypewriterEffect from '@/hooks/TypewriterEffect';

const StacAI = () => {
    const title = "Stac AI"
    const paragraph = "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.";
    const citation = "Edwin, Former CTO";
  return (
   <div 
        className='p-[1.7rem] bg-[#0c2645] rounded-[2rem] w-full sm:w-[55%] h-full text-white flex flex-col sm:flex-row gap-2'>
        <div className='flex flex-col items-start gap-4 sm:w-[58%] w-full mb-5 sm:mb-0'>
            <h3 className='text-base font-bold'>
                <TypewriterEffect text={title} wordDelay={0.2} />
            </h3>
            <p 
            className='leading-7text-base'>
                <TypewriterEffect text={paragraph} wordDelay={0.3} />
            </p>
            <h3 
            className='text-base font-bold'>
                <TypewriterEffect text={citation} wordDelay={0.3} initialDelay={7} />
            </h3>
        </div>
        <div className='sm:w-[42%] w-full h-[20rem] sm:h-auto relative object-top mt-3 sm:mt-0'>
            <Image src='https://forcythe.com/images/edwin.svg' alt='john_stark_associate' width={20} height={20} className='w-full h-full rounded-xl object-cover' /> 
        </div>
    </div>
  )
}

export default StacAI