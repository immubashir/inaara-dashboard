import Image from 'next/image'
import React from 'react'

const Searchbar = () => {
  return (
    <div className='bg-[#1A1B1F] flex items-center justify-center gap-3 px-4 py-3 rounded-3xl'>
            <Image src="/images/AI-logo.svg" width={30} height={30} className='bg-black/40 rounded-full p-1'/>
            <input type="text" placeholder='Ask AI...' className='bg-[#1A1B1F] w-full focus:border-0 focus:outline-none outfit-regular'/>
            <button className='bg-gray-700/50 hover:bg-[#5d21d6] px-6 py-1 rounded-2xl transition-all duration-500 relative flex items-end justify-center overflow-hidden'>
              <h1 className='z-10'>Generate</h1>
              <div className='absolute h-4 w-28 bg-[#b886ff] rounded-t-full -bottom-2 blur-md '/>
            </button>
    </div>
  )
}

export default Searchbar