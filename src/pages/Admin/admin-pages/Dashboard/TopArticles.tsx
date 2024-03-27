import { AiFillLike } from 'react-icons/ai'
import { FaRegCalendar } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi2'
import { IoIosEye } from 'react-icons/io'
import { useGetDoc } from '../../../../helpers/hooks/useGetDoc'
import { BlogType } from '../Blogs/AllBlogs/BlogsTable'
import { useNavigate } from 'react-router-dom'

const TopArticles = () => {
  const { dataFromFirestore } = useGetDoc('blogs')
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
        {dataFromFirestore
          .filter((item) => item.status === 'published')
          .slice(0, 5)
          .map((item: BlogType, index) => (
            <TopArticleItem key={index} item={item} number={index} />
          ))}
      </div>
    </main>
  )
}

const TopArticleItem: React.FC<{ item: BlogType; number: number }> = ({
  item,
  number,
}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/blog' + item.route)}
      className='flex gap-6 hover:scale-105 transition duration-300 cursor-pointer'
    >
      <div className='w-2/12 flex gap-3 px-4'>
        <h6 className='poppins-regular text-lg text-slate-300'>{number + 1}</h6>
        <img
          className='rounded-lg w-full object-cover h-24'
          src={item.featuredImage}
          alt='featured'
        />
      </div>
      <div className='flex flex-col gap-3 justify-center w-6/12 ps-3'>
        <h6 className='poppins-regular text-sm text-slate-600'>
          {item.summary.slice(0, 200)}
          {item.summary.length >= 200 && '...'}
        </h6>
        <p className='poppins-regular text-sm text-slate-500'>
          {item.publishDate}
        </p>
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
