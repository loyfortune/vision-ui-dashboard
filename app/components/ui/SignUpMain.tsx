"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiAppleFill, RiGoogleFill } from "react-icons/ri";

const SignUpMain = () => {
  const [rememberMe, setRememberMe] = useState(true);
  return (
    <section className="max-w-md mx-auto w-full
    xl:mt-25">
      <div className="text-white my-5 text-center">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <p
          className="text-sm font-medium mt-2 max-w-xs
        mx-auto"
        >
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>
      <div
        className="p-px w-full bg-linear-to-br
    from-white/39 via-white/0 to-white/39
    rounded-[30px]"
      >
        <div
          className="bg-linear-to-t rounded-[30px]
    h-full p-8 w-full from-[#060b2b] via-[#090D2E]
    to-[#0F123B]"
        >
          <h2 className="text-white font-bold text-center">Register with</h2>
          <div className="flex items-center justify-center gap-3 my-5.5">
            <div
              className="p-px bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-2xl"
            >
              <button
                className="p-5 text-xl
          rounded-[15px] text-white
          bg-[#0F123B]"
              >
                <FaFacebook />
              </button>
            </div>
            <div
              className="p-px bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-2xl"
            >
              <button
                className="p-5 text-xl
          rounded-[15px] text-white
          bg-[#0F123B]"
              >
                <RiAppleFill />
              </button>
            </div>
            <div
              className="p-px bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-2xl"
            >
              <button
                className="p-5 text-xl
          rounded-[15px] text-white
          bg-[#0F123B]"
              >
                <RiGoogleFill />
              </button>
            </div>
          </div>
          <span
            className="text-center text-gray-400 font-semibold
        flex justify-center"
          >
            or
          </span>
          <form className="mt-6 flex flex-col gap-y-6">
            <div>
              <label className="text-sm text-white">Name</label>
              <div
                className="p-px w-full bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-[20px]"
              >
                <div
                  className="w-full h-full p-3.5
                bg-linear-to-r from-[#090D2E] rounded-[20px]
                to-[#0F123B]"
                >
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full outline-none
                text-sm text-white
                placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm text-white">Email</label>
              <div
                className="p-px w-full bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-[20px]"
              >
                <div
                  className="w-full h-full p-3.5
            bg-linear-to-r from-[#090D2E] rounded-[20px]
            to-[#0F123B]"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full outline-none
               text-sm text-white
               placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm text-white">Password</label>
              <div
                className="p-px w-full bg-linear-to-br
            from-white/39 via-white/0 to-white/39
            rounded-[20px]"
              >
                <div
                  className="w-full h-full p-3.5
            bg-linear-to-r from-[#090D2E] rounded-[20px]
            to-[#0F123B]"
                >
                  <input
                    type="email"
                    placeholder="Your password"
                    className="w-full outline-none
               text-sm text-white
               placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex items-center gap-3 text-white
          text-sm"
            >
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
             ${rememberMe ? "bg-[#0075FF]" : "bg-[#1B1F3D]"}
            `}
              >
                <span
                  className={`
             inline-block size-4 rounded-full bg-white
             shadow-sm transition-transform duration-200
             ease-in-out
             ${rememberMe ? "translate-x-5" : "translate-x-0.5"}
             `}
                />
              </button>
              <span>Remember me</span>
            </div>
            <button
              className="w-full py-4.5 rounded-xl text-white
          text-sm font-semibold flex justify-center bg-[#0075FF]
          cursor-pointer"
            >
              SIGN IN
            </button>
            <span className="text-gray-400 text-[15px]">
              Already have an account?{" "}
              <Link href={"/sign-in"} className="text-white font-bold">
                Sign in
              </Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpMain;
