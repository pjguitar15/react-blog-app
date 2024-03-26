import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdContentCopy } from 'react-icons/md'

const RowItem = ({
  author,
  url,
  category,
  publishDate,
}: {
  author: string
  url: string
  category: string
  publishDate: string
}) => {
  return (
    <div className='flex px-6 py-4 poppins-regular text-sm'>
      <h5 className='text-cyan-600 w-2/12'>{author}</h5>
      <h5 className='text-gray-500 flex gap-2 items-center w-3/12'>
        <MdContentCopy />
        {url}
      </h5>
      <h5 className='text-gray-500 w-1/12'>386</h5>
      <h5 className='text-gray-500 w-1/12'>23</h5>
      <h5 className='text-gray-500 w-1/12'>{category}</h5>
      <h5 className='text-gray-500 w-2/12'>{publishDate}</h5>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  )
}
export default RowItem
