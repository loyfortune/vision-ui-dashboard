import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { IoWallet } from 'react-icons/io5'
import { PiFileTextFill } from 'react-icons/pi'

const Stats = () => {
  return (
    <section className='flex lg:items-center gap-4 flex-col
    lg:flex-row'>
      <div className="flex items-center flex-col sm:flex-row
      gap-4 w-full">
        <div className='bg-linear-to-br from-[#060B26]/74 to-[#1A1F37]/50
        rounded-[15px] px-4.5 py-4 flex items-center justify-between w-full'>
          <div>
            <h3 className='text-xs text-gray-300 font-bold
            mb-2'>Today&apos;s Money</h3>
            <h2 className='text-white font-bold inline'>
             $53,000
            </h2>
            <span className='ml-1 text-xs font-bold
            text-green-500'>+55%</span>
          </div>
          <div className='bg-blue-500 p-2.5 rounded-xl text-white'>
            <IoWallet />
          </div>
        </div>
        <div className='bg-linear-to-br from-[#060B26]/74 to-[#1A1F37]/50
        rounded-[15px] px-4.5 py-4 flex items-center justify-between w-full'>
          <div>
            <h3 className='text-xs text-gray-300 font-bold
            mb-2'>Today&apos;s Users</h3>
            <h2 className='text-white font-bold inline'>
             2,300
            </h2>
            <span className='ml-1 text-xs font-bold
            text-green-500'>+5%</span>
          </div>
          <div className='bg-blue-500 p-2.5 text-white rounded-xl'>
            <BsGlobe2 />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row
      gap-4 w-full">
        <div className='bg-linear-to-br from-[#060B26]/74 to-[#1A1F37]/50
        rounded-[15px] px-4.5 py-4 flex items-center justify-between w-full'>
          <div>
            <h3 className='text-xs text-gray-300 font-bold
            mb-2'>New Clients</h3>
            <h2 className='text-white font-bold inline'>
             +3,052
            </h2>
            <span className='ml-1 text-xs font-bold
            text-red-500'>-14%</span>
          </div>
          <div className='bg-blue-500 p-2.5 text-white rounded-xl'>
            <PiFileTextFill />
          </div>
        </div>
        <div className='bg-linear-to-br from-[#060B26]/74 to-[#1A1F37]/50
        rounded-[15px] px-4.5 py-4 flex items-center justify-between w-full'>
          <div>
            <h3 className='text-xs text-gray-300 font-bold
            mb-2'>Total Sales</h3>
            <h2 className='text-white font-bold inline'>
             $173,000
            </h2>
            <span className='ml-1 text-xs font-bold
            text-green-500'>+8%</span>
          </div>
          <div className='bg-blue-500 p-2.5 text-white rounded-xl'>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats