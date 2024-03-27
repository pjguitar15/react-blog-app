import { useEffect, useState } from 'react'
import { useGetDoc } from '../../../../../helpers/hooks/useGetDoc'
import NoPendingItem from './NoPendingItem'
import { useAuthContext } from '../../../../../Context/AuthContext'
import { BlogType } from '../../Blogs/AllBlogs/BlogsTable'

const UserDisplay = () => {
  const [pendingBlogs, setPendingBlogs] = useState<BlogType[] | []>([])
  const { dataFromFirestore } = useGetDoc('blogs')
  const { loggedInUser } = useAuthContext()

  useEffect(() => {
    const checkForPending = () => {
      if (dataFromFirestore && loggedInUser) {
        const filterItems = dataFromFirestore.filter(
          (item) => item.uid === loggedInUser.uid
        )
        setPendingBlogs(filterItems)
      }
    }

    checkForPending()
  }, [dataFromFirestore])
  return (
    <>
      {pendingBlogs.length > 0 ? (
        <main className='py-7 grid xl:grid-cols-2 gap-5'>
          {pendingBlogs.map((item: BlogType, index) => (
            <PendingItem item={item} key={index} />
          ))}
        </main>
      ) : (
        <NoPendingItem />
      )}
    </>
  )
}

const PendingItem: React.FC<{ item: BlogType }> = ({ item }) => {
  return (
    <div className='px-6 py-3 bg-white shadow rounded-lg flex gap-5 cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      {/* Left */}
      <div className='flex flex-col gap-3 justify-center'>
        <img
          className='object-cover size-20 rounded-full'
          src={item.featuredImage}
          alt=''
        />
        <div className='flex flex-col gap-1'>
          <h6 className='poppins-medium text-sm'>{item.author}</h6>
          <h6 className='poppins-regular text-xs text-slate-500'>
            {item.publishDate}
          </h6>
          <div className='poppins-regular text-xs text-slate-500 flex items-center gap-1 capitalize'>
            <div
              className={`size-2 ${item.status === 'pending' ? 'bg-yellow-500' : item.status === 'published' ? 'bg-green-500' : 'bg-red-500'}  rounded-full animate-bounce`}
            />
            {item.status}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className='py-3 w-3/4'>
        <h5 className='poppins-medium text-lg'>{item.title}</h5>
        <div className='poppins-regular bg-violet-500 text-white text-xs px-3 py-1 mb-1 inline-block rounded-full'>
          {item.category}
        </div>
        <p className='poppins-regular text-slate-500 text-xs leading-relaxed'>
          {item.summary.slice(0, 250)}...
        </p>
        <p className='poppins-regular text-slate-500 text-xs leading-relaxed mt-4'>
          {item.readTime}
        </p>
        <p className='poppins-regular text-slate-500 text-xs leading-relaxed'>
          Tags: Coding, JavaScript, Programming
        </p>
      </div>
    </div>
  )
}

export default UserDisplay
