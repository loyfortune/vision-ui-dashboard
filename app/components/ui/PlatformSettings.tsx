'use client'
import { useState } from "react"

const PlatformSettings = () => {
  const [notifyFollow, setNotifyFollow] = useState(true);
  const [notifyPost, setNotifyPost] = useState(false);
  const [notifyMention, setNotifyMention] = useState(true);
  const [newLaunch, setNewLaunch] = useState(false);
  const [productUpdate, setProductUpdate] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [mails, setMails] = useState(true);

  return (
    <section className="rounded-[15px] bg-linear-to-r p-5
    space-y-6 w-full min-w-0 from-[#060B2B]/94
    to-[#0A0E23]/49">
       <h2 className="text-lg text-white
       font-semibold my-2">Platform Settings</h2>
       <div className="flex flex-col gap-y-3.5">
         <h4 className="text-gray-400 text-[13px]
         font-semibold mb-1.5">ACCOUNT</h4>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
            <button
            type="button"
            role="switch"
            aria-checked={notifyFollow}
            aria-label={'follow notification'}
            onClick=
            {() => setNotifyFollow(!notifyFollow)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
             focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${notifyFollow ? "bg-[#0075FF]" :
                "bg-[#1B1F3D]"}
            `}>
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${notifyFollow ? "translate-x-5" :
                 "translate-x-0.5"}`}/>
            </button>
            <span>
             Email me when someone follows me
            </span>         
         </div>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={notifyPost}
            aria-label={"Post notification"}
            onClick={() => setNotifyPost(!notifyPost)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
              focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${notifyPost ? "bg-[#0075FF]" :
             "bg-[#1B1F3D]"}`}>
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${notifyPost ? "translate-x-5" :
                "translate-x-0.5"}
             `}/>
            </button>
           <span>Email me when someone answers to...</span>
         </div>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={notifyMention}
            aria-label={"Mention Notification"}
            onClick=
            {() => setNotifyMention(!notifyMention)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
             focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${notifyMention ? "bg-[#0075FF]" :
                    "bg-[#1B1F3D]"}`}>
            <span
                className={`
                inline-block size-4 rounded-full bg-white
                shadow-sm transition-transform duration-200
                ease-in-out
                ${notifyMention ? "translate-x-5" :
                "translate-x-0.5"}
                `}/>
           </button>
           <span>Email me when someone mentions me</span>
         </div>
       </div>
       <div className="flex flex-col gap-y-3.5">
         <h4 className="text-gray-400 text-[13px]
         font-semibold mb-1.5">APPLICATION</h4>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={newLaunch}
            aria-label="New launches and projects"
            onClick={() => setNewLaunch(!newLaunch)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${newLaunch ? "bg-[#0075FF]" :
                "bg-[#1B1F3D]"}
            `}>
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${newLaunch ? "translate-x-5" :
                "translate-x-0.5"}
             `}/>
            </button>
            <span>
             New launches and projects
            </span>         
         </div>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={productUpdate}
            aria-label={'Monthly product updates'}
            onClick=
            {() => setProductUpdate(!productUpdate)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${productUpdate ? "bg-[#0075FF]" :
                "bg-[#1B1F3D]"}`}
            >
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${productUpdate ? "translate-x-5" :
                "translate-x-0.5"}`}/>
           </button>
           <span>
             Monthly product updates
           </span>
         </div>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={subscribe}
            aria-label={'Subscribe to newsletter'}
            onClick={() => setSubscribe(!subscribe)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${subscribe ? "bg-[#0075FF]" :
                 "bg-[#1B1F3D]"}
            `}
            >
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${subscribe ? "translate-x-5" :
                "translate-x-0.5"}
                `}/>
           </button>
           <span>Subscribe to newsletter</span>
         </div>
         <div className="flex items-center gap-2.5
         text-sm text-gray-400">
           <button
            type="button"
            role="switch"
            aria-checked={mails}
            aria-label={'Subscribe to newsletter'}
            onClick={() => setMails(!mails)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${mails ? "bg-[#0075FF]" :
                 "bg-[#1B1F3D]"}
            `}
            >
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${mails ? "translate-x-5" :
                "translate-x-0.5"}
                `}/>
           </button>
           <span>Receive mails weekly</span>
         </div>
       </div>
    </section>
  )
}

export default PlatformSettings