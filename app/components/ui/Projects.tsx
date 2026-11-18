import Image from "next/image"
import profile1 from '@/public/829b223a519c61d51eb440aff46c5258b749cc2b (1).jpg';
import profile2 from '@/public/79d4f6cc74be928a57c88c53b40db6b2d3cd95de (1).jpg';
import profile3 from '@/public/a70139183377d3b29d32b52ddb5e92d8d08643a1 (1).jpg';
import profile4 from '@/public/b940caf9f3a52bcc9317c793ebc094db911b237b (2).jpg';
import image1 from '@/public/fe096bf587ad95557d8728610c2a2d6ed5b7af0a.jpg';
import image2 from '@/public/165e5a64da438af5721c6caea7cf64792c97432f.jpg';
import image3 from '@/public/dcb3daadfe9a0d16d6ca9c33bb9459be8b4d6a46.jpg';

const Projects = () => {
  return (
    <section className="bg-linear-to-r rounded-2xl p-6
    w-full h-full from-[#060B2B]/94 to-[#0A0E23]/49">
        <div className="space-y-1 mb-7">
          <h2 className='text-lg font-semibold text-white'>
           Projects  
          </h2>
          <span className="text-gray-400 text-sm">
           Architects design houses
          </span>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2
        xl:grid-cols-3">
          <div className="flex flex-col gap-4.5 w-full">
            <div className="w-full rounded-xl overflow-hidden
            relative aspect-[1.9/1]">
              <Image
              src={image1}
              alt=""
              width={90}
              height={90}
              className="w-full h-full object-cover
              object-center aspect-[inherit]"/>
            </div>
            <div>
             <h4 className="text-[13px] text-gray-400 mb-1">
              Project #1
             </h4>
             <h2 className="text-white text-xl
              font-semibold">
                Modern
              </h2>
            </div>
            <p className="text-gray-400 text-sm
            leading-[150%]">
             As Uber works through a huge amount of internal
             management turmoil.
            </p>
            <div className="flex items-center justify-between">
              <button className="text-white text-xs
              font-semibold py-2.5 px-7 rounded-xl border
              border-white">
                VIEW ALL
              </button>
              <span className="flex items-center -space-x-2.5">
                <Image
                 src={profile1}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                border-[#121241]"/>
                <Image
                 src={profile2}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile3}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile4}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4.5 w-full">
            <div className="w-full rounded-xl
            overflow-hidden relative aspect-[1.9/1]">
              <Image
              src={image2}
              alt=""
              width={90}
              height={90}
              className="w-full h-full object-fill rotate-y-180
              scale-y-135"/>
            </div>
            <div>
              <h4 className="text-[13px] text-gray-400 mb-1">
                Project #2
              </h4>
              <h2 className="text-white text-xl
              font-semibold">
                Scandinavian
              </h2>
            </div>
            <p className="text-white text-sm
            leading-[150%]">
             Music is something that every person has his or
             her own specific opinion about.
            </p>
            <div className="flex items-center justify-between">
              <button className="text-white text-xs
              font-semibold py-2.5 px-7 rounded-xl border
              border-white">
                VIEW ALL
              </button>
              <span className="flex items-center -space-x-2.5">
                <Image
                 src={profile1}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                border-[#121241]"/>
                <Image
                 src={profile2}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile3}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile4}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4.5 w-full">
            <div className="w-full rounded-xl overflow-hidden
            relative aspect-[1.9/1]">
              <Image
              src={image3}
              alt=""
              width={90}
              height={90}
              className="w-full h-full object-fill"/>
            </div>
            <div>
              <h4 className="text-[13px] text-gray-400 mb-1">
              Project #3
             </h4>
             <h2 className="text-white text-xl
              font-semibold">
                Minimalist
              </h2>
            </div>
            <p className="text-gray-400 text-sm
            leading-[150%]">
              Different people have different taste, and
              variou type of music.
            </p>
            <div className="flex items-center justify-between">
              <button className="text-white text-xs
              font-semibold py-2.5 px-7 rounded-xl border
              border-white">
                VIEW ALL
              </button>
              <span className="flex items-center -space-x-2.5">
                <Image
                 src={profile1}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                border-[#121241]"/>
                <Image
                 src={profile2}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile3}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
                <Image
                 src={profile4}
                 alt="profile"
                 width={20}
                 height={20}
                 className="w-5.5 h-5.5 rounded-full border-2
                 border-[#121241]"/>
              </span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects