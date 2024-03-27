import { HiOutlineArrowRightCircle } from 'react-icons/hi2'
import { BlogType } from '../../Admin/admin-pages/Blogs/AllBlogs/BlogsTable'

const RecentPostItem: React.FC<{ item: BlogType }> = ({ item }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h6 className='text-md poppins-regular text-slate-700 '>{item.title}</h6>
      <p className='text-slate-400 text-xs poppins-light'>
        {item.summary.slice(0, 150)}
        ...
      </p>
      <button className='uppercase poppins-regular text-xs text-slate-400 flex items-center gap-2'>
        Read more here{' '}
        <HiOutlineArrowRightCircle className='text-yellow-400 text-lg' />
      </button>
    </div>
  )
}

export default RecentPostItem
