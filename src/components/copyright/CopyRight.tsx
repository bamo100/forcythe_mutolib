import React from 'react'

const CopyRight = () => {
    const year = new Date().getFullYear()
  return (
    <div className='px-[1.25rem] mb-10 md:px-[2.5rem] xl:px-[7rem]'>
        <div className='border-t-[1px] border-[#60a6e7]'>
            <p className='text-[#60a6e7] text-sm mt-5 text-center md:text-left'>
                Copyright © {year} Forcythe. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default CopyRight