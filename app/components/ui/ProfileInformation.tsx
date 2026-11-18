import { FiInstagram } from "react-icons/fi"
import { MdFacebook } from "react-icons/md"
import { RiTwitterFill } from "react-icons/ri"


const ProfileInformation = () => {
  return (
    <section className="bg-linear-to-br relative
    h-full min-h-67.5 rounded-2xl p-5 from-[#060B2B]/94
    to-[#0A0E23]/49">
      <h2 className="text-lg font-semibold
       mb-4.25 text-white">
        Profile Information
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        Hi, I’m Mark Johnson, Decisions: If you can’t decide,
        the answer is no. If two equally difficult paths, choose
        the one more painful in the short term (pain avoidance is
        creating an illusion of equality).
      </p>
      <div className="h-px w-full bg-linear-to-r
      from-[#E0E1E2]/0 via-[#E0E1E2] to-[#E0E1E2]/15
      my-4"/>
      <div className="flex flex-col gap-y-3 text-sm">
         <span className="flex items-center gap-3
         text-white">
            <span className="text-gray-500
            font-semibold">
              Full Name:
            </span> Mark Johnson
         </span>
         <span className="flex items-center gap-3
         text-white">
            <span className="text-gray-500
            font-semibold">
              Mobile:
            </span> (44) 123 1234 123
         </span>
         <span className="flex items-center gap-3
         text-white">
            <span className="text-gray-500
            font-semibold">
              Email:
            </span> mark@simmmple.com
         </span>
         <span className="flex items-center gap-3
         text-white">
            <span className="text-gray-500
            font-semibold">
              Location:
            </span> United States
         </span>
         <span className="flex items-center gap-3
         text-white">
            <span className="text-gray-500
            font-semibold">
              Social Media:
            </span>
            <span className="flex items-center gap-3
            text-xl">
               <MdFacebook/>
               <RiTwitterFill />
               <FiInstagram />
            </span>
         </span>
      </div>
    </section>
  )
}

export default ProfileInformation