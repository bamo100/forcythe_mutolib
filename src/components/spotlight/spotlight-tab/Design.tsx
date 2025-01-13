import TypewriterEffect from '@/hooks/TypewriterEffect'
import React from 'react'

const Design = () => {
  const title = 'Crafting the blueprint for success';
  const citation = ' Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.'
  return (
    <div>
        <p className='text-[1.8rem] text-white sm:text-[2rem] font-[500] leading-8 mb-12'> 
            <TypewriterEffect text={title} wordDelay={0.3} initialDelay={0} />
        </p>
        <p className='text-[#AEA9B1] text-base md:text-lg mb-8 leading-7'>
          <TypewriterEffect text={citation} wordDelay={0.3} initialDelay={0} />
        </p>
    </div>
  )
}

export default Design