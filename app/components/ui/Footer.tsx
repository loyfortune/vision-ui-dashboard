'use client'
import { usePathname } from "next/navigation"

const Footer = () => {
 const pathname = usePathname();

 return(
    <footer className={`flex items-center mt-10
    md:justify-between md:flex-row flex-col gap-3
    text-white text-sm font-light w-full mx-auto
    ${pathname === '/sign-in' && 'xl:flex-col xl:mt-5'}
    ${pathname === '/sign-up' && 'xl:flex-col xl:mt-5'}`}>
        <p className="text-sm md:text-[13px]
        lg:text-sm">
          @ 2021, Made with ❤️ by <span className=
          "font-semibold">
            Creative Tim</span> & <span className=
            "font-semibold">
              Simmmple
            </span> for a better web
        </p>
        <div className="flex items-center gap-5
        lg:gap-6">
          <span>
            Creative Tim 
          </span>
          <span>
            Simmmple
          </span>
          <span>
            Blog
          </span>
          <span>
            License 
          </span>
        </div>
    </footer>
  )
}

export default Footer