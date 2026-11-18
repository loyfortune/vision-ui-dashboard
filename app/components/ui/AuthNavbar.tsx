'use client';
import { usePathname } from "next/navigation"
import { FaBox, FaKey, FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const AuthNavbar = () => {
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();

  return (
    <section>
    <div className={`py-4 px-5.75 max-w-6xl
     rounded-2xl flex items-center justify-between
     bg-transparent sm:w-[90%] xl:w-full flex-col z-20
     sm:flex-row gap-4 backdrop-blur-md mx-auto border
     sm:fixed xl:relative border-white/15
     shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_20px_40px_0_rgba(0,0,0,0.3)]`}>
        <div className='flex items-center gap-3 sm:mt-3'>
          <h1 className='text-nowrap font-bold text-transparent
         mb-5 text-center bg-linear-to-r from-white
         via-white via-65% to-white/25 to-95%
         bg-clip-text text-xl'>
         VISION UI FREE
         </h1>
          <button className='cursor-pointer lg:hidden
          text-gray-300 text-xl mb-5'
          onClick={() => setHidden(!hidden)}>
              <FiChevronRight />
            </button> 
          </div>
          <div className="items-center gap-8 hidden lg:flex">
           <div
           className='flex items-center text-white
           font-semibold text-sm gap-2'>
            <FaBox />
            <Link href={'/'}>DASHBOARD</Link>
          </div>
          <div
          className={`flex items-center text-white
           font-semibold text-sm gap-2`}>
            <FaUser />
            <Link href={'/profile'}>PROFILE</Link>
          </div>
          <div className={`flex items-center text-white
           font-semibold text-sm gap-2`}>
            <FaUserCircle/>
            <Link href={'/sign-up'}>SIGN UP</Link>
          </div>
          <div className={`flex items-center text-white
           font-semibold text-sm gap-2`}>
            <FaKey />
            <Link href={'/sign-in'}>SIGN IN</Link>
          </div>
        </div>
        <button className={`py-4 px-6 sm:w-37.5 rounded-full
        bg-[#0075FF] font-semibold text-xs text-white`}>
           Free Downlaod
        </button>
       </div>
       <div className='lg:hidden'>
        <MobileSidebar hideSidebar={() => setHidden(true)}
        hidden={hidden}/>
      </div>
    </section>
  )
}

export default AuthNavbar