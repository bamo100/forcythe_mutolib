import { projectNumberData, ProjectNumberType } from '@/constants/projectNumber'
import AnimatedCounter from '@/hooks/AnimatedCounter'
import React from 'react'

const ProjectNumber = () => {
  return (
    <div className='py-14 md:py-20 xl:py-28 bg-project-gardient'>
        <div className="bg-[url('https://forcythe.com/images/arc.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat lg:bg-['https://forcythe.com/images/arc-L.svg']">
            <div className='pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5'>
                <div className='mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto'>
                    <p className='text-xl md:text-2xl lg:text-3xl text-white font-medium'>
                        We build solutions that help <span className='text-[#60A6E7]'>businesses</span> of all sizes to <span className='text-[#60A6E7]'>scale</span> 
                    </p>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    {
                        projectNumberData.map(({text, figures}: ProjectNumberType, index) => (
                            <div key={index} className='flex flex-col gap-3 text-left w-fit'>
                                <span className=''>
                                    <AnimatedCounter end={figures} suffix="+" />
                                </span>
                                <span className='text-[0.95rem] text-white sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>
                                    {text}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectNumber