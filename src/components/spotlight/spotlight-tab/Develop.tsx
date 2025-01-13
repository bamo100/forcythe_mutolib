import TypewriterEffect from '@/hooks/TypewriterEffect'
import React from 'react'

const Develop = () => {
  const title = 'Turning blueprints into reality.';
  const citation = 'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.'
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

export default Develop