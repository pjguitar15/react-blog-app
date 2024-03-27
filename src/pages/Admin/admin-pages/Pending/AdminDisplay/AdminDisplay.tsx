import { doc, updateDoc } from 'firebase/firestore'
import { useGetDoc } from '../../../../../helpers/hooks/useGetDoc'
import { BlogType } from '../../Blogs/AllBlogs/BlogsTable'
import { db } from '../../../../../firebase/firebaseConfig'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const AdminDisplay = () => {
  const [adminPendingItems, setAdminPendingItems] = useState<BlogType[] | []>(
    []
  )
  const { dataFromFirestore } = useGetDoc('blogs')

  useEffect(() => {
    if (dataFromFirestore) setAdminPendingItems(dataFromFirestore)
  }, [dataFromFirestore])

  return (
    <>
      <main className='py-7 grid xl:grid-cols-2 gap-5'>
        {adminPendingItems.map((item: BlogType, index) => (
          <PendingItem
            item={item}
            key={index}
            setAdminPendingItems={setAdminPendingItems}
            adminPendingItems={adminPendingItems}
          />
        ))}
      </main>
    </>
  )
}

const PendingItem: React.FC<{
  item: BlogType
  setAdminPendingItems: Dispatch<SetStateAction<[] | BlogType[]>>
  adminPendingItems: BlogType[]
}> = ({ item, setAdminPendingItems, adminPendingItems }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const acceptBlogHandler = async () => {
    setIsProcessing(true)
    await updateDoc(doc(db, 'blogs', item.id), {
      status: 'published',
    }).then(() => {
      const updatedItems = adminPendingItems.map((adminItem) => {
        if (adminItem.id === item.id) {
          return { ...adminItem, status: 'published' }
        } else {
          return adminItem
        }
      })

      setAdminPendingItems(updatedItems)
      setIsProcessing(false)
    })
  }

  const setToPendingHandler = async () => {
    setIsProcessing(true)
    await updateDoc(doc(db, 'blogs', item.id), {
      status: 'pending',
    }).then(() => {
      const updatedItems = adminPendingItems.map((adminItem) => {
        if (adminItem.id === item.id) {
          return { ...adminItem, status: 'pending' }
        } else {
          return adminItem
        }
      })

      setAdminPendingItems(updatedItems)
      setIsProcessing(false)
    })
  }

  const DISABLED_STYLE = 'disabled:cursor-not-allowed disabled:opacity-50'
  return (
    <div className='px-6 py-3 bg-white shadow rounded-lg flex gap-5'>
      {/* Left */}
      <div className='flex flex-col gap-3 justify-start py-4'>
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
            {item.status === 'pending' && (
              <div className='size-2 bg-yellow-500 rounded-full animate-bounce' />
            )}

            {item.status === 'published' && (
              <div className='size-2 bg-green-500 rounded-full' />
            )}

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

        <div className='pt-3 flex gap-1'>
          {item.status === 'pending' && (
            <>
              <button
                disabled={isProcessing}
                onClick={acceptBlogHandler}
                className={`bg-green-500 text-white poppins-medium px-4 py-1 rounded-lg text-sm hover:scale-105 transition duration-300 ease-in-out ${isProcessing && DISABLED_STYLE}`}
              >
                Accept
              </button>
              <button
                disabled={isProcessing}
                className={`bg-red-500 text-white poppins-medium px-4 py-1 rounded-lg text-sm hover:scale-105 transition duration-300 ease-in-out ${isProcessing && DISABLED_STYLE}`}
              >
                Decline
              </button>
            </>
          )}

          {item.status === 'published' && (
            <>
              <button
                disabled={isProcessing}
                onClick={setToPendingHandler}
                className={`bg-yellow-500 text-white poppins-medium px-4 py-1 rounded-lg text-sm hover:scale-105 transition duration-300 ease-in-out ${isProcessing && DISABLED_STYLE}`}
              >
                Set to pending
              </button>
            </>
          )}

          <button
            disabled={isProcessing}
            className={`bg-cyan-500 text-white poppins-medium px-4 py-1 rounded-lg text-sm hover:scale-105 transition duration-300 ease-in-out ${isProcessing && DISABLED_STYLE}`}
          >
            View Content
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDisplay
