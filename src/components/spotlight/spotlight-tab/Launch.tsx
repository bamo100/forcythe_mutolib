import TypewriterEffect from '@/hooks/TypewriterEffect';
import React from 'react'

const Launch = () => {
  const title = 'Your launchpad to the market.';
  const citation = 'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.'
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

export default Launch