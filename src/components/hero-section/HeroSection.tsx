import React from 'react'
import ClientJourney from '../client-journey/ClientJourney'
import TypewriterEffect from '@/hooks/TypewriterEffect'

const HeroSection = () => {
    const citation = 'We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.'
  return (
    <section className="w-full px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] min-h-screen bg-[url('https://forcythe.com/images/header-background.svg')] bg-no-repeat bg-top">
        {/* <div className=''> */}
            <div className='w-full bg-white bg-opacity-10 p-11 rounded-[3rem] flex flex-col gap-7'>
                {/* <div> */}
                    <h1 className='text-[3.5rem] sm:text-[4rem] lg:text-[5rem] text-white font-normal leading-[1]'>
                        We build <span className='text-[#60A6E7]'>products</span> that shape a better future 
                    </h1>
                    <p className='text-base md:text-lg leading-7 text-[#AEA9B1]'>
                        <TypewriterEffect text={citation} wordDelay={0.3} initialDelay={0} />  
                    </p>
                    <div className='w-fit relative group'>
                        <button className='z-10 relative whitespace-nowrap hover:shadow-md flex gap-[10px] items-center justify-center group-hover:bg-[#064386] group-hover:text-white font-lexend text-black text-base font-[600] py-[12px] px-5 bg-white rounded-full cursor-pointer duration-300 transition-all'>
                            <span>Book a Call</span>
                            {/* <Image src="https://forcythe.com/images/play.svg" className='group-hover:block text-transparent' width="10" height="10" alt="play_icon" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="#000000" aria-hidden="true" id="Play--Streamline-Heroicons" height="16" width="16" className="group-hover:fill-white">
                                <desc>Play Streamline Icon: https://streamlinehq.com</desc>
                                <path fill-rule="evenodd" d="M2.8125 3.5331249999999996c0 -0.891875 0.955625 -1.45625 1.736875 -1.026875l7.2124999999999995 3.9668750000000004c0.809375 0.44499999999999995 0.809375 1.608125 0 2.05375L4.55 12.493749999999999c-0.78125 0.42937500000000006 -1.736875 -0.135625 -1.736875 -1.026875V3.5331249999999996Z" clip-rule="evenodd" stroke-width="1">
                                </path>
                            </svg>
                        </button>
                        <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                    </div>
                {/* </div> */}
            </div>
            <div className='flex flex-col items-center justify-center py-10'>
                <p className='text-[2rem] text-white leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]'>
                    Success in <span className='text-[#60a6e7] capitalize'>Motion</span> – Our clients’ journey
                </p>
                <div className='flex flex-col gap-5 bg-custom-gradient'>
                    <ClientJourney />
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default HeroSection