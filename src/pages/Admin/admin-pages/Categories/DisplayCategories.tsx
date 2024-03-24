import { IoIosAddCircleOutline } from 'react-icons/io'
import { useGetDoc } from '../../../../helpers/hooks/useGetDoc'
import { IoCloseOutline } from 'react-icons/io5'
import DeleteConfirmModal from '../../../../components/DeleteConfirmModal'
import { useEffect, useState } from 'react'
import { db } from '../../../../firebase/firebaseConfig'
import { deleteDoc, doc } from 'firebase/firestore'
import LoadingCategories from './LoadingCategories'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export type CategoryType = {
  category: string
  imageUrl: string
  userId: string
  id: string
}

const DisplayCategories = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [open, setOpen] = useState(false)
  const [modalItem, setModalItem] = useState<CategoryType | null>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [data, setData] = useState<CategoryType[] | undefined>(undefined)
  const { dataFromFirestore, loading } = useGetDoc('categories')

  useEffect(() => {
    const fetchData = () => {
      if (!dataFromFirestore) return

      setData(dataFromFirestore)
    }
    fetchData()
  }, [dataFromFirestore])

  const deleteHandler = async () => {
    if (!modalItem) return

    setDeleteLoading(true)
    await deleteDoc(doc(db, 'categories', modalItem?.id))
      .then(() => {
        const filtered = data?.filter((item) => item.id !== modalItem?.id)
        setData(filtered)
        setDeleteLoading(false)
        setOpen(false)
        setModalItem(null)
      })
      .catch((err) => {
        console.log(err)
        setDeleteLoading(false)
        setOpen(false)
        setModalItem(null)
      })
  }
  return (
    <main className='bg-slate-100 w-full p-7 max-h-screen overflow-scroll'>
      <DeleteConfirmModal
        loading={deleteLoading}
        message={`You're about to delete '${modalItem?.category}', you will permanently lose this information
          . Do you wish to proceed? `}
        open={open}
        setOpen={setOpen}
        deleteHandler={deleteHandler}
      />
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>Categories</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <button
          onClick={() => setMode('write')}
          className='flex items-center gap-1 bg-violet-700 text-white px-4 rounded py-2'
        >
          <h5 className='text-sm'>Add a Category</h5>
          <IoIosAddCircleOutline className='text-2xl' />
        </button>
      </div>
      <div className='grid grid-cols-5 py-5 gap-5'>
        {loading ? (
          <>
            {Array.from({ length: 20 }).map((_: any, index) => (
              <LoadingCategories key={index} />
            ))}
          </>
        ) : (
          data?.map((item: CategoryType, index: number) => (
            <div
              key={index}
              className='py-24 flex flex-col items-center justify-center bg-white rounded cursor-pointer hover:bg-violet-100 transition duration-300 relative group'
            >
              <IoCloseOutline
                onClick={() => {
                  setModalItem(item)
                  setOpen(true)
                }}
                className='absolute top-3 right-3 text-xl opacity-0 group-hover:opacity-100 animation duration-300 hover:text-red-500 group-hover:scale-125'
              />
              <LazyLoadImage
                alt='category'
                className='w-12 mb-4'
                src={item.imageUrl}
              />
              <h6 className='font-semibold text-xl text-slate-800'>
                {item.category}
              </h6>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default DisplayCategories
