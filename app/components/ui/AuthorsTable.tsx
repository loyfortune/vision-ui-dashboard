import Image from "next/image"
import esther from '@/public/e66e561bcf8239302b357d2120c60d128ca0f8b7.png';
import alexa from '@/public/58e2826c9ef36e80f373f0ff9cb6ba2ea2a3d704.png';
import laurent from '@/public/59a714b86b104a52903f0b67ed801ccac9993666.png';
import freduardo from '@/public/d1a062bc44886137da91f783783938b3a3a8b0df.png';
import daniel from '@/public/93539f7e33b5ee1ed96651e2cef8e4e1bc7c5019.png';
import mark from '@/public/5c4ed81306ea9c7c7add65d748756b3e0d3a8375.png';

const AuthorsTable = () => {
  return (
    <div className="bg-linear-to-bl w-full px-4.5 py-5.5
    rounded-[15px] from-[#060B2B]/74 to-[#0A0E23]/71">
      <h2 className="text-lg font-bold text-white my-3">
        Authors Table</h2>
      <div className="py-2 overflow-x-auto scrollbar-none">
        <div className="inline-block align-middle
        overflow-hidden w-full min-w-2xl xl:min-w-full">
          <table className='bg-transparent table-auto
          w-full'>
            <thead className="py-3">
              <tr className='text-gray-400 text-sm
              font-medium text-left'>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>EMPLOYED</th>
              </tr>
            </thead>
            <tbody>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-lg">
                  <Image
                  src={esther}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="font-semibold text-white">
                    Esthera Jackson
                   </h3>
                   <span className="text-sm text-gray-400">
                    esthera@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold ">Manager</h3>
                  <span className="text-gray-400
                  text-sm">Organization</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                 bg-green-500 px-2 py-1 rounded-lg
                 font-semibold">
                    Online
                  </span>
                </td>
                <td className="text-sm text-white
                font-bold py-4">14/06/21</td>
                <td className="text-sm text-gray-400
                font-bold py-3">
                  Edit
                </td>
              </tr>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-lg">
                  <Image
                  src={alexa}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="text-white
                   font-semibold">
                    Alexa Liras
                   </h3>
                   <span className="text-sm
                   text-gray-400">
                    alexa@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold">Programmer</h3>
                  <span className="text-gray-400
                  text-sm">Developer</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                  bg-transparent px-2 py-1 rounded-lg
                  font-semibold border border-gray-100">
                    Offline
                  </span>
                </td>
                <td className="text-sm text-white
                font-bold py-3">14/06/21</td>
                <td className="text-sm text-gray-400
                font-bold py-3">
                  Edit
                </td>
              </tr>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-lg">
                  <Image
                  src={laurent}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="text-white
                   font-semibold">
                    Laurent Michael
                   </h3>
                   <span className="text-sm
                   text-gray-400">
                    laurent@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold">Executive</h3>
                  <span className="text-gray-400
                  text-sm">Projects</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                  bg-green-400 px-2 py-1 rounded-lg
                  font-semibold">
                    Online
                  </span>
                </td>
                <td className="text-white text-sm
                font-bold py-4">14/06/21</td>
                <td className="text-sm text-gray-400
                font-bold py-4">
                  Edit
                </td>
              </tr>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-lg">
                  <Image
                  src={freduardo}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="text-white
                   font-semibold">
                    Freduardo Hill
                   </h3>
                   <span className="text-sm
                   text-gray-400">
                    freduardo@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold">Manager</h3>
                  <span className="text-gray-400
                  text-sm">Organization</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                 bg-green-400 px-2 py-1 rounded-lg
                 font-semibold">
                    Online
                  </span>
                </td>
                <td className="text-white text-sm
                font-bold py-3">14/06/21</td>
                <td className="text-sm text-gray-500
                font-bold py-3 dark:text-gray-300">
                  Edit
                </td>
              </tr>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-lg">
                  <Image
                  src={daniel}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="text-white
                   font-semibold">
                    Daniel Thomas
                   </h3>
                   <span className="text-sm
                   text-gray-400">
                    daniel@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold">Programmer</h3>
                  <span className="text-gray-400
                  text-sm">Developer</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                 bg-transparent px-2 py-1 rounded-lg
                 font-semibold border border-gray-100">
                    Offline
                  </span>
                </td>
                <td className="text-white text-sm
                font-bold py-4">14/06/21</td>
                <td className="text-sm text-gray-500
                font-bold py-3 dark:text-gray-300">
                  Edit
                </td>
              </tr>
              <tr className='w-full border-t
              border-[#56577A]'>
                <td className='flex items-center gap-3
                py-3'>
                  <div className="overflow-hidden w-10
                  h-10 rounded-2xl">
                  <Image
                  src={mark}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"/>
                  </div>
                  <div>
                   <h3 className="text-white
                   font-semibold">
                    Mark Wilson
                   </h3>
                   <span className="text-sm
                   text-gray-400">
                    mark@simmmple.com
                   </span>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-white
                  font-semibold">Designer</h3>
                  <span className="text-gray-400
                  text-sm">UI/UX Design</span>
                </td>
                <td className="py-3">
                  <span className="text-white text-sm
                 bg-transparent px-2 py-1 rounded-lg
                 font-semibold border border-gray-100">
                    Offline
                  </span>
                </td>
                <td className="text-white text-sm
                font-bold py-3">14/06/21</td>
                <td className="text-sm text-gray-400
                font-bold py-3">
                  Edit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AuthorsTable