import { Link } from 'react-router-dom'
import { FaRegSave } from 'react-icons/fa'
import BlogDetailsForm from './BlogDetailsForm'
import ContentForm from './ContentForm'

const NewBlog = () => {
  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold mb-4'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>New Blog Post</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <Link
          to='/admin/blogs/new'
          className='flex items-center gap-2 bg-violet-500 hover:bg-violet-600 hover:scale-105 transition duration-300 text-white px-4 rounded-lg py-2'
        >
          <FaRegSave className='text-xl' />
          <h5 className='text-md'>Save</h5>
        </Link>
      </div>
      <BlogDetailsForm />
      <ContentForm />
    </main>
  )
}

export default NewBlog
