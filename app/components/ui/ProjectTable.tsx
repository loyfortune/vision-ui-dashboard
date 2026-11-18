import Image from "next/image"
import { BsThreeDotsVertical } from "react-icons/bs"
import xdLogo from '@/public/Icon.svg';
import pythonLogo from '@/public/Icon (8).png';
import spotifyLogo from '@/public/Icon (9).png';
import pricingLogo from '@/public/Icon (10).png';
import designLogo from '@/public/invision 1.svg';
import profile1 from '@/public/829b223a519c61d51eb440aff46c5258b749cc2b (1).jpg';
import profile2 from '@/public/79d4f6cc74be928a57c88c53b40db6b2d3cd95de (1).jpg';
import profile3 from '@/public/a70139183377d3b29d32b52ddb5e92d8d08643a1 (1).jpg';
import profile4 from '@/public/b940caf9f3a52bcc9317c793ebc094db911b237b (2).jpg';
import profile5 from '@/public/aefc4dce7d5db174a07347d853fddacb55edbe39 (1).jpg';
import icon from '@/public/Icon (1).svg';
import { FiCheck } from "react-icons/fi"
import ProgressBar from "./ProgressBar"


const ProjectTable = ({isForHomePage}: {isForHomePage?: boolean}) => {
  return (
    <div className='bg-linear-to-r from-[#060B2B]/74 px-5
    to-[#0A0E23]/71 rounded-[15px] py-6.5 w-full min-w-0
    h-full'>
      <div className='mb-8 flex justify-between'>
        <div>
          <h2 className='text-white font-bold mb-2 text-lg'>
          Projects</h2>
          <span className='text-sm text-gray-400 flex
          items-center gap-1'>
           <div className='p-0.75 bg-green-400 rounded-full
           text-[#060B2B]'>
            <FiCheck className='text-[11px]'/>
           </div>
           <span className='font-semibold'>30 done</span>
           this month
          </span>
        </div>
        <BsThreeDotsVertical className={`text-gray-400 text-lg
         ${!isForHomePage && 'hidden'}`}/>
      </div>
      <div className="py-2 overflow-x-auto scrollbar-none">
        <div className="inline-block align-middle
        overflow-hidden w-full min-w-2xl xl:min-w-full">
          <table className='bg-transparent table-auto w-full'>
            <thead className="py-3">
                <tr className='text-gray-400 text-sm font-semibold
                text-left'>
                <th>COMPANIES</th>
                <th className={`${!isForHomePage && 'hidden'}`}>
                MEMBERS
                </th>
                <th>BUDGET</th>
                <th className={`${isForHomePage && 'hidden'}`}>
                STATUS
                </th>
                <th>COMPLETION</th>
                </tr>
            </thead>
            <tbody>
            <tr className='w-full border-t border-[#56577A]'>
                <td className='flex items-center gap-3 py-4'>
                <Image
                src={xdLogo}
                alt={"logo"}
                width={20}
                height={19.5}
                className='w-5 h-[19.5px]'/>
                <span className='font-semibold text-white
                dark:text-white'>
                    Chakra Soft UI Version
                </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile3}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile4}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile5}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                </div>
                </td>
                <td className='text-white font-semibold py-4'>
                $14,000</td>
                <td className={`text-white font-semibold
                    ${isForHomePage && 'hidden'}`}>
                Working</td>
                <td className="p-4 max-w-31.25">
                <h4 className="text-sm font-bold
                    text-white">60%</h4>
                <ProgressBar value={60}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}
                 dark:text-gray-50`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            <tr className='w-full border-t border-[#56577A]'>
                <td className='py-3.5 flex items-center gap-3'>
                <Image
                src={icon}
                alt={"logo"}
                width={20}
                height={19.5}
                className='w-5 h-[19.99px]'/>
                <span className='font-semibold text-white'>
                    Add Progress Track
                </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                </div>
                </td>
                <td className='text-white font-semibold
                py-3.5'>
                $3,000</td>
                <td className={`text-white font-semibold py-3.5
                    ${isForHomePage && 'hidden'}`}
                >
                Canceled</td>
                <td className='p-3.5 max-w-31.25'>
                <h4 className="text-sm font-bold
                    text-white">10%</h4>
                <ProgressBar value={10}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            <tr className='w-full border-t border-[#56577A]'>
                <td className='py-3.5 flex items-center gap-3'>
                <Image
                src={pythonLogo}
                alt={"logo"}
                width={20}
                height={19.5}
                className='w-5 h-[19.5px]'/>
                <span className='font-semibold text-white'>
                    Fix Platform Errors
                </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                </div>
                </td>
                <td className='text-white font-semibold
                py-3.5'>
                Not set</td>
                <td className={`text-white font-semibold
                    ${isForHomePage && 'hidden'}`}
                >
                Done</td>
                <td className="p-3.5 max-w-31.25">
                <h4 className="text-sm font-bold
                    text-white">100%</h4>
                <ProgressBar value={100}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            <tr className='w-full border-t border-[#56577A]'>
                <td className='py-3.5 flex items-center gap-3'>
                <Image
                src={spotifyLogo}
                alt={"logo"}
                width={20}
                height={19.5}
                className='w-5 h-[19.5px]'/>
                <span className='font-semibold text-white'>
                    Launch our Mobile App
                </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile3}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile4}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                </div>
                </td>
                <td className='text-white font-semibold
                py-3.5'>
                $32,000</td>
                <td className={`text-white font-semibold
                py-3.5
                    ${isForHomePage && 'hidden'}`}>
                Done</td>
                <td className="p-3.5 max-w-31.25">
                <h4 className="text-sm font-bold
                    text-white">100%</h4>
                <ProgressBar value={100}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}
                 dark:text-gray-50`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            <tr className='w-full border-t border-[#56577A]'>
                <td className='py-3.5 flex items-center gap-3'>
                <Image
                src={pricingLogo}
                alt={"logo"}
                width={20}
                height={19.5}
                className='w-5 h-[19.5px]'/>
                <span className='font-semibold text-white'>
                    Add the New Pricing Page
                </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile3}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile4}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile5}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                </div>
                </td>
                <td className='text-white font-semibold
                py-3.5'>
                $400</td>
                <td className={`text-white font-semibold
                py-3.5
                    ${isForHomePage && 'hidden'}`}>
                Working</td>
                <td className="p-3.5 max-w-31.25">
                <h4 className="text-sm font-bold
                    text-white">25%</h4>
                <ProgressBar value={25}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            <tr className={`w-full border-t border-[#56577A]
                ${!isForHomePage && 'hidden'}`}>
                <td className='py-3.5 flex items-center gap-3'>
                  <Image
                  src={designLogo}
                  alt={"logo"}
                  width={20}
                  height={19.5}
                  className='w-5 h-5'/>
                  <span className='font-semibold text-white'>
                      Redesign New Oline Shop
                  </span>
                </td>
                <td className={`${!isForHomePage && 'hidden'}`}>
                 <div className="flex items-center -space-x-2.5">
                    <Image
                    src={profile1}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                    <Image
                    src={profile2}
                    alt="profile"
                    width={20}
                    height={20}
                    className="w-5.5 h-5.5 rounded-full border-2
                    border-transparent"/>
                 </div>
                </td>
                <td className='text-white font-semibold
                py-3.5'>
                $7,600</td>
                <td className={`text-white font-semibold
                py-3.5 ${isForHomePage && 'hidden'}`}>
                 Working</td>
                <td className="p-3.5 max-w-31.25">
                  <h4 className="text-sm font-bold
                      text-teal-300">40%</h4>
                  <ProgressBar value={40}/>
                </td>
                <td className={`text-gray-400 text-lg
                 ml-auto ${isForHomePage && 'hidden'}`}>
                  <BsThreeDotsVertical />
                </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectTable