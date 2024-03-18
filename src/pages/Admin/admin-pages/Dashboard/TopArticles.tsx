import { AiFillLike } from 'react-icons/ai'
import { FaRegCalendar } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi2'
import { IoIosEye } from 'react-icons/io'

const TopArticles = () => {
  return (
    <main className='px-10 py-5 rounded-lg shadow bg-white'>
      <div className='flex justify-between'>
        <h5 className='poppins-semibold text-lg'>Top Articles</h5>
        <div className='flex items-center gap-2'>
          <FaRegCalendar />
          <h5 className='poppins-regular text-sm'>January</h5>
        </div>
      </div>
      <div className='flex flex-col gap-6 py-5'>
        {Array.from({ length: 4 }).map((_, index) => (
          <TopArticleItem key={index} />
        ))}
      </div>
    </main>
  )
}

const TopArticleItem = () => {
  return (
    <div className='flex gap-6 hover:scale-105 transition duration-300 cursor-pointer'>
      <div className='w-2/12 flex gap-3 px-4'>
        <h6 className='poppins-regular text-lg text-slate-300'>01</h6>
        <img
          className='rounded-lg w-full'
          src='https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <div className='flex flex-col gap-3 justify-center w-6/12 ps-3'>
        <h6 className='poppins-regular text-md'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a
          quia ea voluptatem.
        </h6>
        <p className='poppins-regular text-sm text-slate-500'>March 18, 2024</p>
      </div>
      <div className='flex gap-12 justify-center items-start w-4/12'>
        <div className='flex gap-1 items-center text-violet-900'>
          <IoIosEye />
          <span className='poppins-semibold'>6.5k</span>
        </div>
        <div className='flex gap-1 items-center text-blue-700'>
          <AiFillLike />
          <span className='poppins-semibold'>3.4k</span>
        </div>
        <div className='flex gap-1 items-center text-green-700'>
          <HiCurrencyDollar />
          <span className='poppins-semibold'>34</span>
        </div>
      </div>
    </div>
  )
}

export default TopArticles
