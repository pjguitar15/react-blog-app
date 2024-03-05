import { TbCategory } from 'react-icons/tb'
import PrimaryButton from '../../../../components/PrimaryButton'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useAuthContext } from '../../../../Context/AuthContext'
import { useState } from 'react'
import { storage } from '../../../../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useUploadToFirestore } from '../../../../helpers/hooks/useUploadToFirestore'

type ImageUploadType = {
  name: string
}

const AddCategories = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [categoryInput, setCategoryInput] = useState('')
  const [error, setError] = useState('')
  const [imageUpload, setImageUpload] = useState<ImageUploadType | null>(null)
  const [uploadLoading, setUploadLoading] = useState(false)
  const { loggedInUser } = useAuthContext()
  const { uploadPayload } = useUploadToFirestore()

  const addCategoryHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const validations = {
      isCategoryNotEmpty: categoryInput !== '',
      isImageNotEmpty: imageUpload !== null,
    }

    if (validations.isCategoryNotEmpty && validations.isImageNotEmpty) {
      const imageRef = ref(storage, `images/${imageUpload?.name}`)
      setUploadLoading(true)
      uploadBytes(imageRef, imageUpload)
        .then(() => {
          return getDownloadURL(imageRef)
        })
        .then((downloadURL) => {
          const payload = {
            userId: loggedInUser,
            category: categoryInput,
            imageUrl: downloadURL,
          }
          uploadPayload('categories', payload).then(() => {
            setUploadLoading(false)
          })
          console.log(payload)
        })
        .catch((err) => {
          console.log(err)
          setUploadLoading(false)
        })

      setError('')
    } else {
      console.log('Cannot leave empty fields.')
      setError('Cannot leave empty fields.')
    }
  }

  return (
    <>
      {/* <div className='h-1 w-full bg-green-400 absolute'></div> */}
      <main className='bg-slate-100 w-full p-7'>
        <div className='flex justify-between font-semibold'>
          <div className='flex items-center gap-3'>
            <h5 className='text-lg'>Categories</h5>
            <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
          </div>
          <button
            onClick={() => setMode('read')}
            className='flex items-center gap-1 bg-violet-700 text-white px-4 rounded py-2'
          >
            <h5 className='text-sm flex items-center gap-2'>
              <HiOutlineArrowLeft />
              Return to Categories
            </h5>
          </button>
        </div>
        <form
          className='flex flex-col w-3/4 mx-auto gap-3 bg-white p-12 rounded-xl max-w-[700px] mt-12 shadow-md'
          onSubmit={addCategoryHandler}
        >
          <TbCategory className='text-violet-500 text-8xl mx-auto mb-3' />
          <input
            className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
            placeholder='Add category name'
            type='text'
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          />
          <input
            className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
            placeholder='Add category name'
            type='file'
            onChange={(e) => {
              const selectedFile = e.target.files && e.target.files[0]
              if (selectedFile) {
                setImageUpload(selectedFile)
              }
            }}
          />
          <p className='text-red-400 text-sm poppins-regular'>{error}</p>
          <PrimaryButton text='Add' type='submit' disabled={uploadLoading} />
        </form>
      </main>
    </>
  )
}

export default AddCategories
