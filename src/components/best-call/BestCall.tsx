import { cardDataType, cardDetails } from '@/constants/card'
import React from 'react'
import Card from './Card'
import TypewriterEffect from '@/hooks/TypewriterEffect'

const BestCall = () => {
    const headTitle = 'Your best call for B2B/B2C product innovation'
  return (
    <section className='w-full px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] min-h-screen py-14 bg-cards-gradient'>
        <div className='mb-10'>
            <p className='text-[2rem] text-[#B3D0F2] leading-[2.5rem] sm:text-[2.2re] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] text-center'>
                <TypewriterEffect text={headTitle} wordDelay={0.3} initialDelay={0} />
            </p>
        </div>
        <div className='flex flex-col md:flex-row gap-7 md:gap-8 justify-center'>
            {
                cardDetails.map(({text, description}: cardDataType, index) => (
                    <Card key={index} text={text} description={description} />
                ))
            }
        </div>
    </section>
  )
}

export default BestCall