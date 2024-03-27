import { Link } from 'react-router-dom'

const MainPostItem = ({ item }: { item: any }) => {
  return (
    <div className='bg-white rounded-md shadow-md p-3'>
      <img
        className='h-[250px] w-full object-cover rounded-lg'
        src={item.featuredImage}
        alt=''
      />
      <div className='flex flex-col gap-2 mt-7 mb-3'>
        <span className='text-xs poppins-regular bg-violet-500 px-3 py-1 text-white ms-0 me-auto rounded'>
          {item.category}
        </span>
        <Link
          to={`/blog/${item.route.split('/').join('')}`}
          className='poppins-semibold'
        >
          {item.title}
        </Link>

        <p className='poppins-regular text-slate-500 text-xs'>{item.summary}</p>

        <div className='flex gap-3 items-center mt-4'>
          <img
            className='size-9 object-cover rounded-full'
            src={item.featuredImage}
            alt=''
          />
          <p className='poppins-medium text-slate-600 text-sm'>{item.author}</p>
        </div>
      </div>
    </div>
  )
}

export default MainPostItem
