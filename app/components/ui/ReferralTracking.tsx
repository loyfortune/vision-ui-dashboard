import { BsThreeDots } from "react-icons/bs";

const ReferralTracking = () => {
  return (
    <div
      className="rounded-[20px] bg-linear-to-b px-5 w-full
      h-full min-w-0 py-6 from-[#060B2B]/74 to-[#0E153A]/71"
    >
      <div className="flex items-center justify-between">
        <h2
          className="text-white font-semibold
                  text-lg"
        >
          Referral Tracking
        </h2>
        <div
          className="p-2 rounded-xl bgP-white/8
                  flex justify-center text-[#7551FF] text-xl"
        >
          <BsThreeDots />
        </div>
      </div>
      <div
        className="flex items-center justify-between
                mt-7 p-2 w-full"
      >
        <div className="flex flex-col gap-5">
          <div
            className="rounded-[20px] bg-linear-to-r
          from-[#060C29] to-[#040C30]/50 p-5
            w-full sm:min-w-54.25 md:min-w-full"
          >
            <span
              className="text-gray-400 text-sm
                      font-medium"
            >
              Invited
            </span>
            <br />
            <h3
              className="text-lg font-semibold
                      text-white mt-2.5"
            >
              145 people
            </h3>
          </div>
          <div
            className="rounded-[20px] bg-linear-to-r
            from-[#060C29] to-[#040C30]/50 p-5
             w-full sm:min-w-54.25 md:min-w-full"
          >
            <span
              className="text-gray-400 text-sm
                      font-medium"
            >
              Bonus
            </span>
            <br />
            <h3
              className="text-lg font-semibold
                      text-white mt-2.5"
            >
              1,465
            </h3>
          </div>
        </div>
        <div className="relative w-53.5 h-53.5">
          <svg viewBox="0 0 280 280" className="h-full w-full overflow-visible">
            <defs>
              {/* Progress gradient */}
              <linearGradient
                id="progressGradient2"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#05CD99" stopOpacity="0" />
                <stop offset="25%" stopColor="#05CD99" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#05CD99" stopOpacity="0.5" />
                <stop offset="85%" stopColor="#05CD99" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#05CD99" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M 40 180 A 126 126 0 1 1 255 175"
              fill="none"
              stroke="url(#progressGradient2)"
              strokeWidth="14"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="80 100"
            />
          </svg>
          <div
            className="absolute top-[40%] left-1/2
            -translate-y-1/2 -translate-x-1/2 text-center"
          >
            <span
              className="text-sm text-gray-400
                     font-medium"
            >
              Safety
            </span>
            <h1
              className="text-4xl text-white mt-0.5
                     font-bold"
            >
              9.3
            </h1>
            <span
              className="text-sm text-gray-400
                     font-medium"
            >
              Total Score
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTracking;
