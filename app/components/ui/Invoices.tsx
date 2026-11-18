import { FaFileLines } from "react-icons/fa6";

const Invoices = () => {
  return (
    <section className="py-5 px-4 bg-linear-to-b from-[#060B2B]/94
    to-[#0a0E23]/49 rounded-[15px] space-y-6 min-w-0 h-full
    w-full">
       <div className="flex items-center
       justify-between mb-2">
          <h2 className="text-white text-lg
          font-bold">Invoices</h2>
          <button className="bg-[#0075FF] py-2
          px-5 text-[10px] cursor-pointer
          text-white font-semibold
          rounded-xl">
             VIEW ALL
          </button>
       </div>
       <div className="flex items-center
       justify-between">
          <div>
            <h4 className="text-white
            font-bold">March, 01, 2020
            </h4>
            <span className="text-sm text-gray-400
            font-semibold">#MS-415646</span>
          </div>
          <div className="flex items-center gap-4
          text-sm font-semibold">
            <span className="text-gray-400">
               $180
            </span>
            <span className="text-white flex
            items-center gap-1">
             <FaFileLines />
             PDF
            </span>
          </div>
       </div>
       <div className="flex items-center
       justify-between">
          <div>
            <h4 className="text-white
            font-bold">February, 10, 2021
            </h4>
            <span className="text-sm text-gray-400
            font-semibold">#RV-126749</span>
          </div>
          <div className="flex items-center gap-4
          text-sm font-semibold">
            <span className="text-gray-400">
               $250
            </span>
            <span className="text-white flex
            items-center gap-1">
             <FaFileLines />
             PDF
            </span>
          </div>
       </div>
       <div className="flex items-center
       justify-between">
          <div>
            <h4 className="text-white
            font-bold">April, 05, 2020
            </h4>
            <span className="text-sm text-gray-400
            font-semibold">#FB-212562</span>
          </div>
          <div className="flex items-center gap-4
          text-sm font-semibold">
            <span className="text-gray-400">
               $560
            </span>
            <span className="text-white flex
            items-center gap-1">
             <FaFileLines />
             PDF
            </span>
          </div>
       </div>
       <div className="flex items-center
       justify-between">
          <div>
            <h4 className="text-white
            font-bold">June, 25, 2019
            </h4>
            <span className="text-sm text-gray-400
            font-semibold">#QW-103578</span>
          </div>
          <div className="flex items-center gap-4
          text-sm font-semibold">
            <span className="text-gray-400">
               $120
            </span>
            <span className="text-white flex
            items-center gap-1">
             <FaFileLines />
             PDF
            </span>
          </div>
       </div>
       <div className="flex items-center
       justify-between">
          <div>
            <h4 className="text-white
            font-bold">March, 01, 2019
            </h4>
            <span className="text-sm text-gray-400
            font-semibold">#AR-803481</span>
          </div>
          <div className="flex items-center gap-4
          text-sm font-semibold">
            <span className="text-gray-400">
               $300
            </span>
            <span className="text-white flex
            items-center gap-1">
             <FaFileLines />
             PDF
            </span>
          </div>
       </div>
    </section>
  )
}

export default Invoices