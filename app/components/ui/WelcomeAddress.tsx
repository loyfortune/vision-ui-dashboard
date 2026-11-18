import { FiArrowRight } from "react-icons/fi"


const WelcomeAddress = () => {
  return (
    <div className='rounded-[20px] p-7 px-6 w-full h-full
    bg-[url(@/public/background2.png)] min-w-0 flex flex-col
    gap-16 bg-cover bg-no-repeat bg-center'>
      <div>
        <span className="text-sm text-gray-400 block">
          Welcome back,
        </span>
        <h2 className="text-2xl text-white font-bold mt-2
        mb-4">
          Mark Johnson
        </h2>
        <span className="text-gray-400 text-sm">
          Glad to see you again! <br />
          Ask me anything.
        </span>
      </div>
      <button className="text-sm text-white flex gap-1
      items-center cursor-pointer font-medium mt-auto">
        Tap to record
        <FiArrowRight />
      </button>
    </div>
  )
}

export default WelcomeAddress