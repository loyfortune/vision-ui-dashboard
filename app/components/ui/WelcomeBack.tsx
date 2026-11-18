import { FiArrowRight } from "react-icons/fi"


const WelcomeBack = () => {
  return (
    <div className="relative h-full
  min-h-67.5 rounded-2xl overflow-hidden p-6 bg-cover
    bg-[url(@/public/026a41deae1f502af909b1ba9b3f5d30d19d3368.jpg)]
    bg-top flex flex-col justify-between sm:gap-20">
       <div>
         <h1 className="text-3xl text-white font-bold mb-1
         leading-tight">
            Welcome Back!
         </h1>
         <p className="text-white text-[15px]">
           Nice to see you, Mark Johnson!
         </p>
       </div> 
       <button className="text-white text-sm font-medium
       flex items-center gap-1 mt-auto cursor-pointer">
          Turn on your car
          <FiArrowRight />
       </button>
    </div>
  )
}

export default WelcomeBack