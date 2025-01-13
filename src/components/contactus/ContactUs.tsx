import React from 'react'

const ContactUs = () => {
  return (
    <section className='py-10 px-[1.25rem] md:px-[2.5rem] xl:px-[7rem] bg-'>
        <div className='flex flex-col items-center w-full'>
            <div className='max-w-[45rem] text-center'>
                <h2 className='text-[2rem] text-white leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6'>
                    <span className='text-[#60a6e7]'>Ready to Scale?</span> <br />
                    Join successful brands that chose us as their
                    <span className='text-[#60a6e7]'>growth accelerator</span>
                </h2>
            </div>
            <div className='w-fit mx-auto mb-5'>
                <div className='w-fit relative group'>
                    <button className='z-10 duration-300 transition-all relative whitespace-nowrap hover:shadow-md group-hover:bg-[#064386] group-hover:text-white font-lexend text-black text-base font-[600] py-[12px] px-5 bg-white rounded-full cursor-pointer'>
                        <span>Book a Call</span>
                    </button>
                    <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs