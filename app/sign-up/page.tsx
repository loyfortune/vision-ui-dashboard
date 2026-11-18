import React from 'react'
import AuthNavbar from '../components/ui/AuthNavbar'
import Footer from '../components/ui/Footer'
import SignUpMain from '../components/ui/SignUpMain'

const page  = () => {
  return (
    <div className='bg-linear-to-t from-[#020515]
    via-[#090D2E] to-[#0F123B]'>
      <div className="w-full p-5 h-50 rounded-b-[15px]
        bg-[url('@/public/fd9d1149f82b2ead74cabcb8c47273f4713a6493.jpg')]
        bg-cover bg-no-repeat xl:bg-none xl:h-fit relative z-50
        xl:fixed">
       <AuthNavbar />
      </div>
      <div className='xl:ml-150 p-5'>
        <SignUpMain />
        <div className='w-full'>
          <Footer />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-[50%] h-full
      bg-[url('@/public/Group122.png')]
      bg-cover bg-no-repeat hidden xl:block text-center
      bg-center">
        <div className='text-white fixed top-1/2
        -translate-y-1/2 left-1/8 z-25'>
            <span className='text-sm tracking-wide'>
              INSPIRED BY THE FUTURE:
            </span>
            <h1 className='text-2xl font-bold tracking-wide
            text-transparent bg-clip-text bg-linear-to-r
           from-white via-white via-82% to-white/30
           to-100%'>
              THE VISION UI DASHBOARD
            </h1>
        </div>
      </div>
    </div>
  )
}

export default page 