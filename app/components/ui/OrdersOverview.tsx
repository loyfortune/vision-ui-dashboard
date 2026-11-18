import Image from "next/image"
import bell from '@/public/default.png';
import css3 from '@/public/Icon (11).png';
import shoppingCart from '@/public/Icon (12).png';
import card from '@/public/Icon (13).png';
import dropbox from '@/public/Icon (14).png';
import xd from '@/public/Icon.svg';

const OrdersOverview = () => {
  return (
    <div className="bg-linear-to-tr rounded-[15px] py-6.5 px-5
    flex flex-col from-[#060B2B]/74 to-[#0A0E23]/71 w-full
    h-full min-w-0">
       <div className='mb-8'>
          <h2 className="text-lg font-bold text-white
          mb-2">
            Orders overview
          </h2>
          <span className="text-gray-400 text-sm">
            <span className="text-green-400 font-semibold">
             +30%</span> this month
          </span>
       </div>
       <div className="flex flex-col gap-6">
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={bell}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">
                $2400, Design changes
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               22 DEC 7:20 PM
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={css3}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
                <h3 className="text-white font-bold mb-1">
                New order #4219423
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               21 DEC 11:21 PM
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={shoppingCart}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">
                Server Payments for April
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               21 DEC 9:28 PM
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={card}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">
                New card aded for order #3210145
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               20 DEC 3:52 PM
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={dropbox}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">
                Unlock packages for Development
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               19 DEC 11:35 PM
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center flex-col
            gap-1">
              <Image
              src={xd}
              alt=""
              width={16}
              height={16}
              className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">
                New order #9851258
              </h3>
              <span className="text-gray-400 text-sm font-bold">
               18 DEC 4:41 PM
              </span>
            </div>
          </div>
       </div>

    </div>
  )
}

export default OrdersOverview