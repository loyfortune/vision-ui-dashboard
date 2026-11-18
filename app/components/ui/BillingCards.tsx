import Image from "next/image"
import visaLogo from '@/public/Visa Icon.png';
import building from '@/public/Vector.svg';
import { RiPencilFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const BillingCards = () => {
  return(
   <section className="space-y-6 min-w-0 w-full">
       <div className="grid grid-cols-1 sm:grid-cols-2
       lg:grid-cols-5 gap-5"> 
          <div
          className="bg-[url('@/public/Background3.png')]
          px-6.5 py-4 sm:py-8 rounded-[15px] min-w-0
          flex flex-col bg-contain bg-no-repeat
          col-span-3 aspect-[1.9/1] max-h-80">
            <div className="flex items-center mb-3
            justify-between">
              <h2 className="text-white text-lg
              font-semibold">Purity UI</h2>
              <span className="flex items-center -space-x-4">
                <div className="w-[32.81px] h-[32.81px]
                bg-gray-300/50 rounded-full"/>
                <div className="w-[32.81px] h-[32.81px]
                bg-gray-300/50 rounded-full"/>
              </span>
            </div>
            <div className="space-y-4 text-white
            mt-auto">
               <h3 className="text-xl font-semibold
               tracking-wider">
                 7812 2139 0823 XXXX
               </h3>
               <div className="flex items-center gap-7">
                 <div>
                  <h4 className="text-xs font-light">
                    VALID THRU
                  </h4>
                  <span className="font-semibold
                  text-sm">
                    05/24
                  </span>
                 </div>
                 <div>
                    <h4 className="text-xs font-light">
                    CVV
                  </h4>
                  <span className="font-semibold
                  text-sm">
                    09X
                  </span>
                 </div>
               </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-[#060B2B]/94 
          to-[#0A0E23]/49 rounded-[15px] p-5.75
          w-full h-full min-w-0 col-span-2 space-y-5">
            <div className='rounded-2xl flex text-white
            justify-between p-5 relative bg-linear-to-br
            from-[#182344] via-[#0D1936] to-[#07142E]'>
              <div className="absolute inset-0
                 bg-linear-to-br
                 from-white/8
                 to-white/1
                 [clip-path:polygon(76%_0,100%_0,100%_100%,54%_100%)]" />
              <div>
                <h3 className="text-sm font-medium mb-1.5">
                  Credit Balance
                </h3>
                <h2 className="font-bold text-4xl">
                  $25,215
                </h2>
              </div>
              <div>
                <BsThreeDots className="text-2xl"/>
                <svg width="61" height="20"
                viewBox="0 0 61 20" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3">
                 <path d="M1.00018 8.2C1.70256 11.8 4.50018
                 18.5 11.0002 18C17.5002 17.5 18.2788 1
                 29.6573 1C41.0359 1 41.0359 20.0286 60.0002
                 3.57143" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round"
                 stroke="white"/>
                </svg>
              </div>
            </div>
            <div className='flex items-center justify-between
            text-white'>
               <div>
                  <h3 className="text-gray-400 font-medium
                  mb-2 text-sm">
                    NEWEST
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className='p-3 bg-white/10
                    rounded-full'>
                      <Image
                      src={building}
                      alt=""
                      width={24.5}
                      height={8.52}
                      className="w-5 h-4.5"/>
                    </div>
                    <div className='font-medium text-[15px]'>
                     <span>Bill & Taxes</span>
                     <p className="text-gray-400 mt-0.5">
                        Today, 16:36
                     </p>
                    </div>
                  </div>
               </div>
               <span className='font-semibold'>
                -$154.50
               </span>
            </div>
          </div>
       </div>
       <div className="rounded-[15px] px-4.5 bg-linear-to-br
       py-5.5 w-full from-[#060B2B]/94 to-[#0A0E23]/49">
        <div className="flex items-center
        justify-between mb-5">
          <h3 className="sm:text-lg text-white
          font-semibold">Payment Method</h3>
          <button className="py-3 px-3.5 sm:px-5
          bg-[#0075FF] text-white text-[10px]
          font-semibold rounded-xl cursor-pointer">
            ADD A NEW CARD
          </button>
        </div>
        <div className="flex flex-col md:flex-row
        md:items-center gap-4">
          <div className="p-px w-full bg-linear-to-br
          from-blue-50/75 via-blue-300/15 to-blue-50/60
          rounded-[20px]">
            <div className="w-full h-full py-4 px-3.5
            bg-linear-to-br from-[#0d112d] rounded-[20px]
            to-[#102957] flex items-center gap-4">
              <span className="flex items-center
              -space-x-1.5">
                <div className="w-[13.26px] h-[13.26px]
                rounded-full bg-red-500"/> 
                <div className="w-[13.26px] h-[13.26px]
                rounded-full bg-[#F79E1B]"/>
              </span>
              <input type="text"
              className="outline-none w-full
              text-white tracking-wide text-sm
              sm:text-base placeholder:text-white"
              placeholder="7812 2139 0823 XXXX"/>
              <RiPencilFill className="text-white
              ml-auto text-lg"/>
            </div>
          </div>
          <div className="p-px w-full bg-linear-to-br
          from-blue-50/75 via-blue-300/15 to-blue-50/60
          rounded-[20px]">
            <div className="w-full h-full py-4 px-3.5
            bg-linear-to-br from-[#131941] rounded-[20px]
            to-[#102957] flex items-center gap-4">
              <Image
              src={visaLogo}
              alt=""
              width={24.5}
              height={8.52}
              className="w-[24.5px] h-[8.52px]"/>
              <input type="text"
              className="outline-none w-full
              text-white tracking-wide text-sm
              sm:text-base placeholder:text-white"
              placeholder="7812 2139 0823 XXXX"/>
              <RiPencilFill className="text-white
              ml-auto text-lg"/>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default BillingCards