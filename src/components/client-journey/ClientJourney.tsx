'use client'

import { clientData, clientImages } from '@/constants/clientJourney'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const ClientJourney = () => {
  return (
    <>
     <div className='flex gap-4 items-stretch w-full overflow-hidden'>
      {clientImages.map(({url, alt}: clientData, index) => (
        <motion.div
          key={index}
          className='relative w-auto h-[340px]'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        >
            
          <Image src={url} alt={alt} width={100} 
          height={100} className='w-full h-full overflow-hidden object-cover' />
          
        </motion.div>
      ))} 
    </div>
    <div className='flex gap-4 items-stretch w-full overflow-hidden'>
      {clientImages.map(({url, alt}: clientData, index) => (
        <motion.div
          key={index}
          className='relative w-auto h-[340px] object-fill'
          animate={{ x: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
            
          <Image src={url} alt={alt} width={100} 
          height={100} className='w-full h-full overflow-hidden object-cover' />
          
        </motion.div>
      ))} 
    </div>
    </>
  )
}

export default ClientJourney