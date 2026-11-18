import Image from "next/image"
import calendar from '@/public/outline.png';
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { BsExclamation } from "react-icons/bs";

const Transactions = () => {
  return (
    <section className="bg-linear-to-br px-4 py-5.5 w-full
    rounded-[15px] min-w-0 space-y-6 from-[#060B2B]/94
    to-[#0A0E23]/49">
       <div className="flex items-center
       justify-between">
         <h2 className="text-white text-lg
         font-semibold">Your Transactions</h2>
         <span className="flex items-center gap-1">
            <Image
            src={calendar}
            alt=""
            width={15}
            height={15}
            className="w-3.75 h-3.75"/>
            <span className="text-gray-400
            text-sm font-semibold">
             23 - 30 March 2020
            </span>
         </span>
       </div>
       <div className="space-y-4.5">
          <h3 className="text-gray-400 text-[13px]
          font-semibold">NEWEST</h3>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-transparent
              border border-red-500 text-red-500
              rounded-full">
                <FiArrowDown />
              </div>
              <div>
                <h4 className="text-white
                 font-semibold">Netflix
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-red-500
            font-semibold text-[15px]">-$2500</span>
          </div>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-transparent
              border border-green-500
              text-green-500 rounded-full">
                <FiArrowUp />
              </div>
              <div>
                <h4 className="textwhite
                 font-semibold">Apple
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-green-500
            font-semibold text-[15px]">+$2500</span>
          </div>
       </div>
       <div className="space-y-4.5">
          <h3 className="text-gray-400 text-[13px]
          font-semibold">YESTERDAY</h3>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-transparent
              border border-green-500
              text-green-500 rounded-full">
                <FiArrowUp />
              </div>
              <div>
                <h4 className="text-white
                 font-semibold">Stripe
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   26 March 2020, at 13:45 PM
                </span>
              </div>
            </div>
            <span className="text-green-500
            text-[15px] font-semibold">+$800</span>
          </div>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-transparent
              border border-green-500
              text-green-500 rounded-full">
                <FiArrowDown />
              </div>
              <div>
                <h4 className="text-white
                 font-semibold">HubSpot
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-green-500
            font-semibold text-[15px]">+$1700</span>
          </div>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2.25 bg-transparent
              border border-gray-500 text-2xl
              text-gray-500 rounded-full
              dark:text-gray-300 dark:border-gray-300">
               <BsExclamation />
              </div>
              <div>
                <h4 className="text-white
                 font-semibold">Webflow
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   26 March 2020, at 05:00 AM
                </span>
              </div>
            </div>
            <span className="text-white
            font-semibold text-[15px]">Pending</span>
          </div>
          <div className="flex items-center
          justify-between">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-transparent
              border border-red-500 text-red-500
              rounded-full">
                <FiArrowDown />
              </div>
              <div>
                <h4 className="text-white
                 font-semibold">Microsoft
                </h4>
                <span className="text-[13px]
                text-gray-400 font-semibold">
                   25 March 2020, at 16:30 PM
                </span>
              </div>
            </div>
            <span className="text-red-500
            font-semibold text-[15px]">-$987</span>
          </div>
       </div>
    </section>
  )
}

export default Transactions