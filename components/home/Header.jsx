import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='ml-3 mt-2 flex items-center justify-between mb-4'>
      <div>
        <h1 className='text-4xl outfit-bold'>Hi Arjun!</h1>
        <p className='outfit-light text-[#A3ACCB]'>Here's your overview for this month</p>
      </div>
      <div className='flex gap-4 border-2 border-[#A5ADCB] rounded-xl px-4 py-2'>
        <button>Filters</button>
        <Image src = "/images/Filters.svg" width={20} height={20}/>
      </div>
    </div>
  )
}

export default Header