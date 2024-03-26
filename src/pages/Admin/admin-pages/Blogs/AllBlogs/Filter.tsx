import { MdFilterAlt } from 'react-icons/md'

const Filter = () => {
  return (
    <div className='mb-5 mt-3 relative inline-block'>
      <MdFilterAlt className='absolute right-1 z-10 top-1 h-3/4 bg-white pe-1 w-5 text-blue-500' />
      <select className='px-4 py-2 border outline-none rounded font-sans relative text-blue-500 poppins-regular text-sm'>
        <option value=''>All Blogs</option>
        <option value=''>My Blogs</option>
        <option value=''>My Pending Blogs</option>
      </select>
    </div>
  )
}

export default Filter
