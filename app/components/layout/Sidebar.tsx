'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiBarChart, BiQuestionMark } from 'react-icons/bi';
import { BsCreditCardFill, BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaFile, FaHouseChimney, FaUser, FaWrench } from 'react-icons/fa6';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className={`bg-linear-to-b from-[#060B26]/50
      to-[#1A1F37]/50 p-6 hidden lg:inline fixed top-0 left-0
      w-[245.5px] rounded-b-[20px] backdrop-blur-lg`}>
         <h1 className='text-nowrap font-bold text-transparent
         mb-5 text-center bg-linear-to-r from-white
         via-white via-65% to-[#757A8C]/10 to-90%
         bg-clip-text text-xl'>
         VISION UI FREE
         </h1>
        <div className="h-px w-full bg-linear-to-r mb-5
        from-gray-800 via-85% via-gray-300 to-gray-800"/>
        <div className='flex flex-col mb-6 gap-y-4.5'>
          <Link href={'/'} className={`flex items-center
          gap-3 px-3.5 ${pathname === '/' &&
            'py-3 bg-[#1A1F37] shadow-sm rounded-[15px]'}`}>
             <div className={`p-2 rounded-xl ${pathname === '/' ?
             'bg-blue-500 text-white' :
             'bg-[#1A1F37] text-blue-500'}`}>
               <FaHouseChimney/>
             </div>
             <span className='text-white text-sm font-bold'>
             Dashboard</span>
          </Link>
          <Link href={'/tables'} className={`flex items-center
          gap-3 px-3.5 ${pathname === '/tables' &&
            'py-3 bg-[#1A1F37] shadow-sm rounded-[15px]'}`}>
             <div className={`p-2 rounded-xl ${pathname ===
             '/tables' ? 'bg-blue-500 text-white' :
             'bg-[#1A1F37] text-blue-500'} text-lg`}>
               <BiBarChart />
             </div>
             <span className='text-white text-sm font-bold'>
             Tables</span>
          </Link>
          <Link href={'/billing'} className={`flex items-center
          gap-3 px-3.5 ${pathname === '/billing' &&
            'py-3 bg-[#1A1F37] shadow-sm rounded-[15px]'}`}>
             <div className={`p-2 rounded-xl ${pathname ===
             '/billing' ? 'bg-blue-500 text-white' :
             'bg-[#1A1F37] text-blue-500'}`}>
               <BsCreditCardFill/>
             </div>
             <span className='text-white text-sm font-bold'>
             Billing</span>
          </Link>
          <div className='flex items-center cursor-pointer
          gap-3 px-3'>
            <div className='p-2 rounded-xl bg-[#1A1F37]
            text-blue-500'>
              <FaWrench />
            </div>
            <span className='text-white text-sm
            font-bold'>
             RTL</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-4.5 mb-9.5'>
          <h3 className='font-medium mb-2 text-white px-3'>
            ACCOUNT PAGES
          </h3>
          <Link href={'/profile'} className={`flex items-center
          gap-3 px-3.5 ${pathname === '/profile' &&
            'py-3 bg-[#1A1F37] shadow-sm rounded-[15px]'}`}>
             <div className={`p-2 rounded-xl ${pathname ===
             '/profile' ? 'bg-blue-500 text-white' :
             'bg-[#1A1F37] text-blue-500'}`}>
               <FaUser />
             </div>
             <span className='text-white text-sm font-bold'>
             Profile</span>
          </Link>
          <Link href={'/sign-in'} className='flex items-center gap-3
          px-3'>
            <div className='p-2 bg-[#1A1F37] rounded-xl'>
              <FaFile className='text-blue-500'/>
            </div>
            <span className='text-white text-sm font-bold'>
             Sign In
            </span>
          </Link>
          <Link href={'sign-up'} className='flex items-center gap-3
          px-3'>
            <div className='p-2 bg-[#1A1F37] rounded-xl'>
              <BsFillRocketTakeoffFill className='text-blue-500'/>
            </div>
            <span className='text-white text-sm font-bold'>
              Sign up
            </span>
          </Link>
        </div>
        <div className='relative isolate overflow-hidden
         rounded-[15px] p-6 bg-[url(@/public/3ba68ebca794d6d97d617807d5448758406dcbad.jpg)]
         bg-center bg-cover'>
            <div className='mb-5 bg-white p-2 rounded-xl w-fit'>
              <BiQuestionMark className='text-white
              bg-blue-500 p-1 rounded-full text-2xl'/>
            </div>
            <h3 className='text-white mb-1 text-sm font-bold'>
              Need help?</h3>
            <span className='block text-white text-xs mb-3'>
              Please check our docs
            </span>
            <button className='bg-linear-to-r w-full text-center
            text-white text-sm rounded-xl cursor-pointer
            font-bold py-3 from-[#060B28]/74 to-[#0A0E23]/71
            backdrop-blur-[10px]'>
              DOCUMENTATION
           </button>
        </div>   
    </section>
  )
}

export default Sidebar