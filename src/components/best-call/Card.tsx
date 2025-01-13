import { cardDataType } from '@/constants/card'
import TypewriterEffect from '@/hooks/TypewriterEffect'
import Image from 'next/image'
import React from 'react'

const Card = ({text, description}: cardDataType) => {
  return (
    <div 
        className='relative flex border-0 transition duration-500
        items-center flex-col flex-nowrap gap-10 h-min justify-center 
        overflow-visible p-px decoration-clone w-fit rounded-2xl text-left'
    >
        <div className='w-full bg-[#030516] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-[#60A6E7] transition-all'>
            <div className='w-fit bg-[#60A6E7] p-2 bg-opacity-60 rounded-md mb-5'>
                <Image src='https://forcythe.com/images/layers-three.svg' alt='three_icon' width={30} height={30} />
            </div>
            <h4 className='text-2xl text-white font-medium mb-5'><TypewriterEffect text={text} wordDelay={0.3} initialDelay={0} /></h4>
            <div>
                <p className='mb-0 text-[#AEA9B1] text-[1.093rem]'>
                    <TypewriterEffect text={description} wordDelay={0.3} initialDelay={0} />
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card