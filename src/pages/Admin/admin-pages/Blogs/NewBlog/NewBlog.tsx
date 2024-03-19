import { FaRegSave } from 'react-icons/fa'
import BlogDetailsForm from './BlogDetailsForm'
import ContentForm from './ContentForm'
import { useBlogContext } from '../../../../../Context/BlogContext'

const NewBlog = () => {
  const { handleSave, validationError } = useBlogContext()
  return (
    <main className='bg-slate-100 w-full p-7 max-h-screen overflow-y-scroll'>
      <div className='flex justify-between font-semibold mb-4'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>New Blog Post</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <button
          onClick={handleSave}
          className='flex items-center gap-2 bg-violet-500 hover:bg-violet-600 hover:scale-105 transition duration-300 text-white px-4 rounded-lg py-2'
        >
          <FaRegSave className='text-xl' />
          <h5 className='text-md'>Save</h5>
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {validationError && (
          <div className='bg-red-100 border border-red-200 px-6 py-3 rounded-lg text-red-600 poppins-regular text-sm me-auto ms-0'>
            {validationError}
          </div>
        )}

        <BlogDetailsForm />
        <ContentForm />
      </div>
    </main>
  )
}

export default NewBlog
