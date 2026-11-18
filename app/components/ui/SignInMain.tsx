'use client'
import Link from "next/link";
import { useState } from "react"

const SignInMain = () => {
  const [rememberMe, setRememberMe] = useState(true);
  return (
    <section className="p-5 mt-7 max-w-lg mx-auto">
      <div>
        <h2 className="text-white text-xl font-bold mb-3">
          Nice to see you!
        </h2>
        <span className="text-gray-400 text-[13px] font-bold">
         Enter your email and password to sign in
        </span>
        <form className="mt-7 flex flex-col gap-y-6">
          <div>
            <label className="text-white text-[13px]">
              Email
            </label>
            <div className="p-px w-full bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-2xl">
            <div className="w-full h-full p-3.5
            bg-linear-to-r from-[#090D2E] rounded-2xl
            to-[#0F123B]">
               <input type="email"
               placeholder="Your email address"
               className="w-full outline-none
               text-sm text-white
               placeholder:text-gray-400"/>
              </div>
            </div>
          </div>
          <div>
            <label className="text-white text-[13px]">
              Password
            </label>
            <div className="p-px w-full bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-2xl">
            <div className="w-full h-full p-3.5
            bg-linear-to-r from-[#090D2E] rounded-[20px]
            to-[#0F123B]">
               <input type="password"
               placeholder="Your password"
               className="w-full outline-none
               text-sm text-white
               placeholder:text-gray-400"/>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white
          text-sm">
            <button
            type="button"
            role="switch"
            aria-checked={rememberMe}
            aria-label="New launches and projects"
            onClick={() => setRememberMe(!rememberMe)}
            className={`
             relative inline-flex h-5 w-10 shrink-0
             items-center rounded-full transition-colors
             duration-200 ease-in-out
             focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-[#0075FF]
             disabled:cursor-not-allowed
             disabled:opacity-50 cursor-pointer
             ${rememberMe ? "bg-[#0075FF]" :
                "bg-[#1B1F3D]"}
            `}>
            <span
             className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${rememberMe ? "translate-x-5" :
                "translate-x-0.5"}
             `}/>
            </button>
            <span>Remember me</span>
          </div>
          <button className="w-full py-4.5 rounded-xl text-white
          text-sm font-semibold flex justify-center bg-[#0075FF]
          cursor-pointer">
            SIGN IN
          </button>
          <span className="text-gray-400 text-[15px]">
             Don&apos;t have an account? <Link href={'/sign-up'}
             className="text-white font-bold">Sign up</Link>
          </span>
        </form>
      </div>
    </section>
  )
}

export default SignInMain