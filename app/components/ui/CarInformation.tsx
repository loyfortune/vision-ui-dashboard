import React from 'react'
import { CgBolt } from 'react-icons/cg'
import { MdBolt, MdElectricCar } from 'react-icons/md'

const CarInformation = () => {
  return (
    <section className='rounded-2xl h-full min-h-67.5
    bg-linear-to-br w-full p-4.5 from-[#060B2B]/94
    via-[#0A0E23]/69 to-[#0A0E23]/49'>
      <div className="mb-5 text-white">
    <h2 className="text-lg font-semibold">
      Car Informations
    </h2>
    <p className="text-sm mt-1">
      Hello, Mark Johnson! Your Car is ready.
    </p>
  </div>
      <div className='grid grid-cols-1 items-center
      sm:grid-cols-[0.8fr_1.2fr] gap-3 xl:gap-1 mt-5'>
        <div className='flex flex-col items-center
        justify-between h-full min-w-0'>
          <div className='bg-linear-to-tl w-full
          max-w-42.75 aspect-square relative rounded-full
          from-[#060B2B]/70 via-[#080D25]/71
          to-[#0A0E23]/35'>
            <svg viewBox="0 0 171 171"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className='w-full h-full'>
              <path d="M156.786 49.0983C159.471 47.7276 160.551
              44.4298 159.011 41.8385C152.137 30.2639 142.611
              20.4527 131.189 13.2314C118.226 5.03608 103.298
              0.478272 87.9678 0.0356213C72.6379 -0.407029
              57.4712 3.28178 44.057 10.7155C30.6428 18.1492
              19.4749 29.0541 11.7238 42.2874C3.97273 55.5208
              -0.0762897 70.5953 0.00108826 85.9314C0.0784662
              101.267 4.27939 116.3 12.1636 129.455C20.0479
              142.609 31.3252 153.401 44.8137 160.699C56.6991
              167.129 69.9157 170.639 83.3736 170.974C86.3867
              171.049 88.7349 168.494 88.6175 165.482V165.482C88.5001
              162.47 85.9609 160.145 82.9487 160.042C71.4495
              159.648 60.1706 156.598 50.0076 151.099C38.2409
              144.733 28.4033 135.319 21.5255 123.844C14.6477
              112.369 10.9831 99.2546 10.9156 85.8763C10.8481
              72.498 14.3802 59.3478 21.1418 47.8038C27.9035
              36.2598 37.6456 26.7469 49.3474 20.2622C61.0492
              13.7775 74.2798 10.5596 87.6528 10.9457C101.026
              11.3319 114.049 15.3078 125.357 22.457C135.124
              28.6318 143.301 36.9775 149.269 46.8148C150.832
              49.3917 154.102 50.469 156.786 49.0983V49.0983Z"
              fill="url(#paint0_linear_580_2819)"/>
              <defs>
              <linearGradient id="paint0_linear_580_2819"
              x1="85.5" y1="0" x2="66.4078" y2="150.663"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#05CD99"/>
              <stop offset="1" stopColor="#05CD99" stopOpacity="0"/>
              </linearGradient>
              </defs>
            </svg>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 space-y-2 text-center'>
              <MdBolt className='text-[#09AD8F] text-2xl mx-auto'/>
              <h2 className='text-3xl text-white font-bold'>68%</h2>
              <span className='text-gray-400 text-sm'>
                Current load
              </span>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
          </div>
          <div className='flex flex-col items-center mt-2
          text-center'>
            <h4 className='text-white mb-1 text-lg font-bold
            tabular-nums'>
              0h 58min
            </h4>
            <span className='text-gray-400 text-sm'>
              Time to full charge
            </span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 w-full
        min-w-0'>
          <div className='rounded-[20px] bg-linear-to-br
          from-[#060B26]/74 to-[#1A1F37]/50 p-5 flex
          items-center flex-col-reverse md:flex-row w-full
          justify-between min-h-15 max-h-42.75 xl:flex-col-reverse
          2xl:flex-row 2xl:gap-x-1'>
            <div>
              <span className='text-gray-400 text-sm
              font-semibold xl:text-xs'>Battery Health</span>
              <h3 className='text-xl text-white font-bold
              mt-1 xl:text-lg'>76%</h3>
            </div>
            <div className='rounded-xl p-4 bg-[#0075FF]
            text-center text-white text-lg xl:p-3'>
              <MdElectricCar />
            </div>
          </div>
          <div className='rounded-[20px] bg-linear-to-br
          from-[#060B26]/74 to-[#1A1F37]/50 p-5 flex
          items-center flex-col-reverse md:flex-row
          justify-between min-h-15 max-h-42.75 xl:flex-col-reverse
          2xl:flex-row 2xl:gap-x-1'>
            <div>
              <span className='text-gray-400 text-sm
              font-semibold xl:text-xs'>Effeciency</span>
              <h3 className='text-xl text-white font-bold
              mt-1 xl:text-lg'>+20%</h3>
            </div>
              <svg viewBox="0 0 84 52" 
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className='w-full h-full'>
                <path d="M4.78391 30.8579C3.57985 28.0007 2.09303
                28.1436 1.50012 28.5721V51.8571H82.3633V11.1433C80.7214
                11.6672 78.2166 13.4064 74.017 11.1433C69.7755 8.8577 69.5018 12.1434 68.544 16.7148C67.6747 20.8641 65.5339 17.2863 61.2924 22.0005C57.8823 25.7905 56.312 10.2863 55.5457 6.28621C54.9984 3.42906 52.9461 2.71484 52.3988 6.28621C51.8515 11.1433 51.4957 20.6291 51.1674 22.0005C50.6542 24.1434 49.5721 24.4024 48.7045 23.572C47.0626 22.0005 47.3363 16.4581 47.3363 12.572C47.3363 8.8577 45.2209 8.8577 44.8734 11.1433C43.5052 20.1434 43.3684 33.8488 41.0424 34.0006C39.291 34.1148 38.7163 30.572 37.7586 27.1437C37.3993 25.8577 36.1167 24.9723 34.4748 27.1437C32.4224 29.858 31.7383 27.4294 31.6015 26.4291C31.4646 25.4287 30.7952 20.1583 30.6437 9.71526C30.5069 0.286704 27.1878 0.715185 26.9494 4.57226C26.1285 17.858 27.096 35.8576 23.2552 35.8576C21.066 35.8576 21.066 31.1326 21.066 27.2862C21.066 24.1433 19.2873 23.8576 18.74 26.4291C18.1927 29.0005 17.7822 32.0008 16.0035 32.0008C13.933 32.0008 13.267 28.2862 13.267 25.4291C13.267 22.5719 12.9919 19.1527 11.8988 19.0005C9.84641 18.7148 10.1201 28.8576 9.43593 32.0008C8.89355 34.4928 6.28897 34.4293 4.78391 30.8579Z" fill="url(#paint0_linear_580_2850)"/>
                <path d="M1.50012 28.5721C2.09303 28.1436 3.57985
                28.0007 4.78391 30.8579C6.28897 34.4293 8.89355
                34.4928 9.43593 32.0008C10.1201 28.8576 9.84641 18.7148 11.8988 19.0005C12.9919 19.1527 13.267 22.5719 13.267 25.4291C13.267 28.2862 13.933 32.0008 16.0035 32.0008C17.7822 32.0008 18.1927 29.0005 18.74 26.4291C19.2873 23.8576 21.066 24.1433 21.066 27.2862C21.066 31.1326 21.066 35.8576 23.2552 35.8576C27.096 35.8576 26.1285 17.858 26.9494 4.57226C27.1878 0.715186 30.5069 0.286704 30.6437 9.71526C30.7952 20.1583 31.4646 25.4287 31.6015 26.4291C31.7383 27.4294 32.4224 29.858 34.4748 27.1437C36.1167 24.9723 37.3993 25.8577 37.7586 27.1437C38.7163 30.572 39.291 34.1148 41.0424 34.0006C43.3684 33.8488 43.5052 20.1434 44.8734 11.1433C45.2209 8.8577 47.3363 8.8577 47.3363 12.572C47.3363 16.4581 47.0626 22.0005 48.7045 23.572C49.5721 24.4024 50.6542 24.1434 51.1674 22.0005C51.4957 20.6291 51.8515 11.1433 52.3988 6.28621C52.9461 2.71484 54.9984 3.42906 55.5457 6.28621C56.312 10.2863 57.8823 25.7905 61.2924 22.0005C65.5339 17.2863 67.6747 20.8641 68.544 16.7148C69.5018 12.1434 69.7755 8.8577 74.017 11.1433C78.2166 13.4064 80.7214 11.6672 82.3633 11.1433" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke="url(#paint1_linear_580_2850)"/>
                <defs>
                <linearGradient id="paint0_linear_580_2850"
                x1="41.9317" y1="2" x2="41.9317" y2="51.8571"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#01B574" stopOpacity="0.14"/>
                <stop offset="1" stopColor="#01B574" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_580_2850"
                x1="80.0373" y1="11.2857" x2="5.67841"
                y2="45.2003" gradientUnits="userSpaceOnUse">
                <stop stopColor="#01B574"/>
                <stop offset="1" stopColor="#01B574" stopOpacity="0"/>
                </linearGradient>
                </defs>
              </svg>
          </div>
          <div className='rounded-[20px] bg-linear-to-br
          from-[#060B26]/74 to-[#1A1F37]/50 p-5 flex
          items-center flex-col-reverse md:flex-row
          justify-between min-h-15 max-h-42.75 xl:flex-col-reverse
          2xl:flex-row 2xl:gap-x-1'>
            <div>
              <span className='text-gray-400 text-sm
              font-semibold xl:text-xs'>Consumption</span>
              <h3 className='text-xl text-white font-bold
              mt-1 xl:text-lg'>163W/Km</h3>
            </div>
            <div className='rounded-xl p-4 bg-[#0075FF]
            text-center text-white text-lg xl:p-3'>
              <CgBolt />
            </div>
          </div>
          <div className='rounded-[20px] bg-linear-to-br
          from-[#060B26]/74 to-[#1A1F37]/50 p-5 flex
          items-center flex-col-reverse md:flex-row
          justify-between min-h-15 max-h-42.75 xl:flex-col-reverse
          2xl:flex-row 2xl:gap-x-1'>
            <div>
              <span className='text-gray-400 text-sm
              font-semibold xl:text-xs'>This Week</span>
              <h3 className='text-xl text-white font-bold
              mt-1 xl:text-lg'>1.342km</h3>
            </div>
              <svg viewBox="0 0 84 52"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className='w-full h-full'>
                <path d="M82.3635 28.0725C81.7706 27.6439
                80.2838 27.5011 79.0797 30.3582C77.5747 33.9296
                74.9701 33.9931 74.4277 31.5011C73.7436 28.358
                74.0172 18.2151 71.9649 18.5008C70.8717 18.653
                70.5966 22.0723 70.5966 24.9294C70.5966 27.7865
                69.9306 31.5011 67.8601 31.5011C66.0814 31.5011
                65.671 28.5008 65.1237 25.9294C64.5764 23.358
                62.7976 23.6437 62.7976 26.7865C62.7976 30.633 62.7976 35.358 60.6085 35.358C56.7676 35.358 57.7351 17.3584 56.9142 4.07259C56.6759 0.215521 53.3568 -0.21296 53.2199 9.2156C53.0684 19.6586 52.399 24.9291 52.2622 25.9294C52.1253 26.9297 51.4412 29.3583 49.3889 26.644C47.747 24.4726 46.4643 25.358 46.1051 26.644C45.1473 30.0723 44.5726 33.6152 42.8213 33.5009C40.4953 33.3491 40.3585 19.6438 38.9902 10.6437C38.6427 8.35804 36.5274 8.35804 36.5274 12.0723C36.5274 15.9585 36.801 21.5008 35.1591 23.0723C34.2915 23.9027 33.2094 23.6438 32.6963 21.5008C32.3679 20.1294 32.0122 10.6437 31.4649 5.78654C30.9176 2.21518 28.8652 2.9294 28.3179 5.78654C27.5517 9.78661 25.9813 25.2909 22.5713 21.5008C18.3297 16.7866 16.189 20.3644 15.3196 16.2151C14.3618 11.6438 14.0882 8.35804 9.84663 10.6437C5.64706 12.9067 3.14224 11.1675 1.50035 10.6437" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke="url(#paint0_linear_1850_241)"/>
                <defs>
                <linearGradient id="paint0_linear_1850_241"
                x1="3.82637" y1="10.7861" x2="78.1852"
                y2="44.7006" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0075FF" stopOpacity="0"/>
                <stop offset="1" stopColor="#0075FF"/>
                </linearGradient>
                </defs>
              </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarInformation