import { PiTrashSimpleFill } from "react-icons/pi"
import { RiPencilFill } from "react-icons/ri"

const BillingInformation = () => {
  return (
    <section className="bg-linear-to-br from-[#060B2B]/94
    to-[#0A0E23]/49 w-full h-full min-w-0 rounded-[15px]
    p-5 space-y-4.5">
       <h3 className="text-white text-lg font-semibold">
        Billing Information
       </h3>
       <div className="w-full bg-linear-to-br from-[#181D3C]/94
       to-[#0A0E23]/49 rounded-xl px-5.5 py-7">
         <div className="flex items-center
         justify-between mb-2">
            <h4 className="text-white
            font-semibold">Oliver Liam</h4>
            <div className="flex items-center gap-4">
              <span className="flex items-center
              gap-1 text-red-500 font-bold
              text-[10px] cursor-pointer">
                <PiTrashSimpleFill className="text-sm"/>
                DELETE
              </span>
              <span className="text-white
              font-bold flex items-center gap-1
              text-[10px] cursor-pointer">
                <RiPencilFill className='text-sm'/>
                EDIT
              </span>
            </div>
         </div>
         <p className="sm:text-sm text-gray-400
         font-light text-xs">
           Company Name: <span
           className="text-gray-500
           font-semibold">Viking Buritto</span><br />
           Email Address: <span
           className="text-gray-500
           font-semibold">oliver@burrito.com</span><br />
           VAT Number: <span
           className="text-gray-500
           font-semibold">FRB1235476</span>
         </p>
       </div>
       <div className="w-full bg-linear-to-br from-[#181D3C]/94
       to-[#0A0E23]/49 rounded-xl px-5.5 py-7">
         <div className="flex items-center
         justify-between mb-2">
            <h4 className="text-white
            font-semibold">Oliver Liam</h4>
            <div className="flex items-center gap-4">
              <span className="flex items-center
              gap-1 text-red-500 font-bold
              text-[10px] cursor-pointer">
                <PiTrashSimpleFill className="text-sm"/>
                DELETE
              </span>
              <span className="text-white
              font-bold flex items-center gap-1
              text-[10px] cursor-pointer">
                <RiPencilFill className='text-sm'/>
                EDIT
              </span>
            </div>
         </div>
         <p className="sm:text-sm text-gray-400
         font-light text-xs">
           Company Name: <span
           className="text-gray-500
           font-semibold">Viking Buritto</span><br />
           Email Address: <span
           className="text-gray-500
           font-semibold">oliver@burrito.com</span><br />
           VAT Number: <span
           className="text-gray-500
           font-semibold">FRB1235476</span>
         </p>
       </div>
       <div className="w-full bg-linear-to-br from-[#181D3C]/94
       to-[#0A0E23]/49 rounded-xl px-5.5 py-7">
         <div className="flex items-center
         justify-between mb-2">
            <h4 className="text-white
            font-semibold">Oliver Liam</h4>
            <div className="flex items-center gap-4">
              <span className="flex items-center
              gap-1 text-red-500 font-bold
              text-[10px] cursor-pointer">
                <PiTrashSimpleFill className="text-sm"/>
                DELETE
              </span>
              <span className="text-white
              font-bold flex items-center gap-1
              text-[10px] cursor-pointer">
                <RiPencilFill className='text-sm'/>
                EDIT
              </span>
            </div>
         </div>
         <p className="sm:text-sm text-gray-400
         font-light text-xs">
           Company Name: <span
           className="text-gray-500
           font-semibold">Viking Buritto</span><br />
           Email Address: <span
           className="text-gray-500
           font-semibold">oliver@burrito.com</span><br />
           VAT Number: <span
           className="text-gray-500
           font-semibold">FRB1235476</span>
         </p>
       </div>
    </section>
  )
}

export default BillingInformation