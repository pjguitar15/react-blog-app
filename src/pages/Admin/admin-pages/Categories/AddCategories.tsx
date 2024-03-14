import { TbCategory } from 'react-icons/tb'
import PrimaryButton from '../../../../components/PrimaryButton'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useAuthContext } from '../../../../Context/AuthContext'
import { useRef, useState } from 'react'
import { storage } from '../../../../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useUploadToFirestore } from '../../../../helpers/hooks/useUploadToFirestore'
import TopProgressBar from '../../../../components/TopProgressBar'
import Alert from '../../../../components/Alert'

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
  const [imageUpload, setImageUpload] = useState<
    ImageUploadType | ArrayBuffer | null
  >(null)
  const [uploadLoading, setUploadLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [successMessage, setSuccessMessage] = useState('')
  const { loggedInUser } = useAuthContext()
  const { uploadPayload } = useUploadToFirestore()
  const imageInputRef = useRef<HTMLInputElement>(null)

  const addCategoryHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const validations = {
      isCategoryNotEmpty: categoryInput !== '',
      isImageNotEmpty: imageUpload !== null && imageUpload instanceof File,
    }

    if (validations.isCategoryNotEmpty && validations.isImageNotEmpty) {
      const selectedImage = imageUpload as File
      const imageRef = ref(storage, `images/${selectedImage.name}`)
      const uploadTask = uploadBytesResumable(imageRef, selectedImage)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Get task progress
          setUploadLoading(true)
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          setUploadProgress(Math.floor(progress))
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Upload failed:', error)
          setUploadLoading(false)
          setError('Upload failed. Please try again.')
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const payload = {
              userId: loggedInUser,
              category: categoryInput,
              imageUrl: downloadURL,
            }
            uploadPayload('categories', payload).then(() => {
              setUploadLoading(false)
              console.log('Upload successful!')
              setSuccessMessage('Category has been created successfully!')
              setTimeout(() => {
                setSuccessMessage('')
              }, 15000)
              setCategoryInput('')
              setImageUpload(null)
              if (imageInputRef && imageInputRef.current) {
                imageInputRef.current.value = '' // Clear the value of the file input
              }

              setError('')
            })
          })
        }
      )
    } else {
      console.log('Cannot leave empty fields.')
      setError('Cannot leave empty fields.')
    }
  }

  return (
    <>
      <TopProgressBar uploadProgress={uploadProgress} />
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
            ref={imageInputRef}
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
          <Alert type='success' text={successMessage} />
          <PrimaryButton text='Add' type='submit' disabled={uploadLoading} />
        </form>
      </main>
    </>
  )
}

export default AddCategories
