import PrimaryButton from '../../../../components/PrimaryButton'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useAuthContext } from '../../../../Context/AuthContext'
import { useState } from 'react'
import { useUploadToFirestore } from '../../../../helpers/hooks/useUploadToFirestore'
import { IoPricetagOutline } from 'react-icons/io5'

const AddTags = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [tagInput, setTagInput] = useState('')
  const [error, setError] = useState('')
  const [uploadLoading, setUploadLoading] = useState(false)
  const { loggedInUser } = useAuthContext()
  const { uploadPayload } = useUploadToFirestore()

  const addCategoryHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const validations = {
      isCategoryNotEmpty: tagInput !== '',
    }

    if (validations.isCategoryNotEmpty) {
      setUploadLoading(true)
      const payload = {
        userId: loggedInUser,
        tag: tagInput,
      }
      uploadPayload('tags', payload).then(() => {
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
            <h5 className='text-lg'>Tags</h5>
            <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
          </div>
          <button
            onClick={() => setMode('read')}
            className='flex items-center gap-1 bg-blue-700 text-white px-4 rounded py-2'
          >
            <h5 className='text-sm flex items-center gap-2'>
              <HiOutlineArrowLeft />
              Return to Tags
            </h5>
          </button>
        </div>
        <form
          className='flex flex-col w-3/4 mx-auto gap-3 bg-white p-12 rounded-xl max-w-[700px] mt-12 shadow-md'
          onSubmit={addCategoryHandler}
        >
          <IoPricetagOutline className='text-blue-500 text-8xl mx-auto mb-3' />
          <input
            className='bg-gray-100 px-4 py-2 rounded-lg outline-blue-600 poppins-regular text-sm'
            placeholder='Add a tag name'
            type='text'
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <p className='text-red-400 text-sm poppins-regular'>{error}</p>
          <PrimaryButton text='Add' type='submit' disabled={uploadLoading} />
        </form>
      </main>
    </>
  )
}

export default AddTags
