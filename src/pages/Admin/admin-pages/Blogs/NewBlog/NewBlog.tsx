import { FaRegSave } from 'react-icons/fa'
import BlogDetailsForm from './BlogDetailsForm'
import ContentForm from './ContentForm'
import { useBlogContext } from '../../../../../Context/BlogContext'
import AreYouSureModal from '../../../../../components/AreYouSureModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WormieSuccess from '../../../../../assets/wormie-success.png'

const NewBlog = () => {
  const {
    handleSave,
    validationError,
    reset,
    setValidationError,
    isFormEmpty,
    uploadLoading,
    successMessage,
    setSuccessMessage,
  } = useBlogContext()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const cancelHandler = () => {
    setOpen(false)
    reset()
    navigate('/admin/blogs')
    setValidationError('')
  }
  return (
    <main className='bg-slate-100 w-full p-7 max-h-screen overflow-y-scroll'>
      <AreYouSureModal
        open={open}
        setOpen={setOpen}
        handler={cancelHandler}
        title='Confirm Dialog'
        message='Are you sure you want to discard all your changes?'
      />
      <div className='flex justify-between font-semibold mb-4'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>New Blog Post</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        {!successMessage ? (
          <div className='flex gap-5 items-center'>
            <button
              onClick={handleSave}
              disabled={uploadLoading}
              className={`flex items-center disabled:opacity-50 disabled:cursor-not-allowed gap-2 bg-violet-500 hover:bg-violet-600 hover:scale-105 transition duration-300 text-white px-4 rounded-lg py-2`}
            >
              <FaRegSave className='text-xl' />
              <h5 className='text-md'>Save</h5>
            </button>
            <button
              onClick={() => {
                if (isFormEmpty) {
                  navigate('/admin/blogs')
                } else {
                  setOpen(true)
                }
              }}
              className='poppins-regular text-violet-500 hover:text-violet-700 text-sm flex gap-2 items-center'
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setSuccessMessage('')
              navigate('/admin/blogs')
            }}
            className='poppins-regular text-violet-500 hover:text-violet-700 text-sm flex gap-2 items-center'
          >
            Back
          </button>
        )}
      </div>
      {/* successMessage */}
      {successMessage && (
        <div className=' mb-4 flex flex-col items-center'>
          <img src={WormieSuccess} alt='' />
          <div className='bg-green-100 border border-green-300 text-green-600 p-4 rounded-lg poppins-regular text-sm'>
            {successMessage}
            <button className='poppins-semibold hover:underline ms-1 '>
              Click here to view.
            </button>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-3'>
        {validationError && (
          <div className='bg-red-100 border border-red-200 px-6 py-3 rounded-lg text-red-600 poppins-regular text-sm me-auto ms-0'>
            {validationError}
          </div>
        )}

        {!successMessage && (
          <>
            <BlogDetailsForm />
            <ContentForm />
          </>
        )}
      </div>
    </main>
  )
}

export default NewBlog
