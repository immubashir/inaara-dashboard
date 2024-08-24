import Image from 'next/image'
import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='h-screen top-0 left-0 fixed w-1/5 flex flex-col items-center justify-between py-12 bg-[#2A2C32] shadow-md shadow-black/50'>
        <div><h1 className='text-5xl outfit-semibold'>Logo</h1></div>
        <div className='flex flex-col items-center justify-center gap-3'>
            <button className='bg-[#1A1B1F] w-full px-5 py-2 rounded-[12px] flex items-center justify-center gap-2'>
                <Image src="/images/Home.svg" width={25} height={25}/>
                <h1 className='outfit-semibold text-lg'>Home</h1>
            </button>
            <button className='bg-[#1A1B1F] w-full px-5 py-2 rounded-[12px] flex items-center justify-center gap-2'>
                <Image src="/images/AI-logo.svg" width={25} height={25}/>
                <h1 className='outfit-semibold text-lg'>Intelligence</h1>
            </button>
            <button className='bg-[#1A1B1F] w-full px-5 py-2 rounded-[12px] flex items-center justify-center gap-2'>
                <Image src="/images/Settings.svg" width={25} height={25}/>
                <h1 className='outfit-semibold text-lg'>Settings</h1>
            </button>
        </div>
        <div>
            <div className='h-20 w-20 rounded-full bg-black flex items-center justify-center relative'>
                <div className='h-16 w-16 bg-slate-800 rounded-full'/>
                <div className='h-6 w-6 bg-green-500 rounded-full absolute bottom-3 right-3'/>
                {/* <Image/> */}
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar