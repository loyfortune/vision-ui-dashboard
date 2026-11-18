'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa6';
import { FiChevronRight, FiSearch } from 'react-icons/fi'
import { IoMdSettings } from 'react-icons/io';
//import MobileNavlinks from '../ui/MobileNavlinks';
import { useState } from 'react';
import MobileSidebar from '../ui/MobileSidebar';

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const pathname = usePathname();

  return (
    <nav className='mb-6 bg-transparent flex items-center
    justify-between z-25'>    
      <div>
        <div className={`text-sm flex items-center gap-2
        font-semibold mb-3 text-white`}>
            <span className='text-gray-300 font-normal'>
              Pages
            </span>
            <span>/</span>
            <span>
              {pathname === '/' && 'Dashboard'}
              {pathname === '/tables' && 'Tables'}
              {pathname ===  '/billing' && 'Billing'}
              {pathname === '/profile' && 'Profile'}
            </span>
            <button className={`cursor-pointer lg:hidden
            text-white text-xl`}
            onClick={() => setHidden(!hidden)}>
              <FiChevronRight />
            </button>
        </div>
        <h1 className='text-xl font-bold text-white'>
          {pathname === '/' && 'Dashboard'}
          {pathname === '/tables' && 'Tables'}
          {pathname ===  '/billing' && 'Billing'}
          {pathname === '/profile' && 'Profile'}
        </h1>
      </div>
      <div className='flex items-center gap-4 text-gray-400'>
        <FiSearch className='text-xl sm:hidden text-white'/>
        <div className='bg-[#0F1535] px-2.5 py-3 rounded-[15px]
        items-center gap-2 shadow-sm border-[#E2E8F0]/30
        border hidden sm:flex'>
          <FiSearch className='text-gray-500'/>
          <input type="text"
          placeholder='Type here...'
          className='outline-none placeholder:text-sm
          placeholder:text-gray-400 text-gray-300'/>
        </div>
        <div className='flex items-center gap-1
        font-semibold'>
            <FaUser className='hidden sm:inline-flex'/>
            <Link href='/sign-in'>Sign In</Link>
        </div>
        <IoMdSettings/>
        <BsBellFill />
      </div>
      <div className='lg:hidden'>
        <MobileSidebar hideSidebar={() => setHidden(true)}
        hidden={hidden}/>
      </div>
    </nav>
  )
}
export default Navbar