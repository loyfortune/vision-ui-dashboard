import Image from "next/image";
import dp from "@/public/466f87ec7b6a64f9f5aac3a7138edba69dadc269.png";
import { BsBoxFill } from "react-icons/bs";
import { GiSpanner } from "react-icons/gi";
import { PiFilesFill } from "react-icons/pi";
import { RiPencilFill } from "react-icons/ri";

const ProfileNav = () => {
  return (
    <section
      className="h-fit z-10 p-4 sm:p-6.5
           rounded-[15px] bg-linear-to-br flex
           md:items-center md:justify-between w-full
           flex-col md:flex-row gap-y-3 from-[#060B2B]/94
           to-[#0A0E23]/62"
    >
      <div
        className="flex items-center gap-4
             lg:gap-6"
      >
        <div
          className="relative rounded-xl
               h-18 w-18"
        >
          <Image
            src={dp}
            alt=""
            width={80}
            height={80}
            className="object-cover w-full
                 h-full rounded-xl"
          />
          <i
            className="p-2 bg-linear-to-br from-[#060B2B]/94
                 rounded-xl absolute -bottom-1 via-[#0A0E23]/49
                 to-[#0A0E23]/69 -right-1 text-white"
          >
            <RiPencilFill />
          </i>
        </div>
        <div>
          <h2
            className="text-white
                text-lg font-semibold"
          >
            Mark Johnson
          </h2>
          <span
            className="text-gray-400
                text-[13px] font-light"
          >
            mark@simmmple.com
          </span>
        </div>
      </div>
      <div
        className="flex items-center gap-3
             xl:gap-6 lg:gap-0 text-[10px] sm:text-sm
             xl:text-base"
      >
        <button
          className="flex items-center
            gap-1.5 sm:gap-2.5 text-white
            font-semibold py-2.5 sm:py-3 pl-2 pr-3
            sm:px-3 lg:px-4 xl:px-5
            rounded-xl bg-[#0075FF]"
        >
          <BsBoxFill />
          OVERVIEW
        </button>
        <button
          className="flex items-center
            gap-1.5 sm:gap-2.5 text-white
            font-semibold py-2.5 sm:py-3 px-2
            sm:px-3 lg:px-4 xl:px-5"
        >
          <PiFilesFill />
          TEAMS
        </button>
        <button
          className="flex items-center
            gap-1.5 sm:gap-2.5 text-white
            font-semibold py-2.5 sm:py-3 px-2
            sm:px-3 lg:px-4 xl:px-5"
        >
          <GiSpanner />
          PROJECTS
        </button>
      </div>
    </section>
  );
};

export default ProfileNav;
