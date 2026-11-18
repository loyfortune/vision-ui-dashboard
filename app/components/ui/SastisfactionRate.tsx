import { FaSmile } from "react-icons/fa"


const SastisfactionRate = () => {
  return (
    <div className="rounded-[15px] py-6 px-5.5 bg-linear-to-br
    from-[#060B2B]/94 to-[#0A0E23]/49 relative w-full
    h-full min-w-0">
     <div className="mb-5">
        <h2 className="text-white text-lg mb-2 font-semibold">
         Satisfaction Rate
        </h2>
        <span className="text-gray-400 text-sm font-medium">
         From all projects
        </span>
     </div>
     <svg viewBox="0 0 280 280"
     className="h-full w-full overflow-visible max-w-53 max-h-53
     mx-auto">
        <defs>
         {/* Progress gradient */}
         <linearGradient
         id="progressGradient"
         x1="0%"
         y1="100%"
         x2="100%"
         y2="0%">
         <stop offset="10%" stopColor="#0075FF"
         stopOpacity="0" />
         <stop offset="25%" stopColor="#0062D5"
         stopOpacity="0.25" />
         <stop offset="50%" stopColor="#0075FF"
         stopOpacity="0.5" />
         <stop offset="85%" stopColor="#0075FF"
         stopOpacity="0.85" />
         <stop offset="100%" stopColor="#0075FF"
          stopOpacity="1" />
         </linearGradient>
    
         {/* Track gradient */}
         <linearGradient
         id="trackGradient"
         x1="0%"
         y1="100%"
         x2="100%"
         y2="0%">
         <stop offset="0%" stopColor="#071B43" />
         <stop offset="50%" stopColor="#101B42" />
         <stop offset="100%" stopColor="#292044" />
         </linearGradient>
       </defs>
       <path
         d="M 45 165 A 105 105 0 1 1 235 165"
         fill="none"
         stroke="url(#trackGradient)"
         strokeWidth="14"
         strokeLinecap="round"
         />
        <path
         d="M 45 165 A 105 105 0 1 1 235 165"
         fill="none"
         stroke="url(#progressGradient)"
         strokeWidth="14"
         strokeLinecap="round"
         pathLength="100"
         strokeDasharray="80 100"
        />
     </svg>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2
     -translate-y-1/2 h-12 w-12 rounded-full bg-blue-600 flex
     items-center justify-center">
        <span className="text-3xl text-white">
          <FaSmile />
        </span>
     </div>
     <div className="relative rounded-[20px] bg-[#060B2B]/90
     -mt-25 p-5">
        <div className="text-gray-400 text-sm flex items-center
        justify-between">
            <span>0%</span>
            <span>100%</span>
        </div>
        <h2 className="text-white text-2xl font-bold
        text-center">
         95%
        </h2>
        <p className="text-gray-400 text-center text-sm">
         Based on likes
        </p>
     </div>
    </div>
  )
}

export default SastisfactionRate