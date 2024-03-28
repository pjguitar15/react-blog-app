import { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdContentCopy } from 'react-icons/md'
import Pagination from '../../../../components/Pagination'
import { TEST_ROW_DATA } from '../Blogs/testData'

const Users = () => {
  const itemsPerPage = 8 // You can adjust this value based on your preference.
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedData = TEST_ROW_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>21 Users</h5>
          {/* <div className='bg-slate-800 h-0.5 w-9 mt-1'></div> */}
        </div>
        {/* <Link
          to='/admin/blogs/new'
          className='flex items-center gap-2 bg-blue-600 text-white px-4 rounded-lg py-2'
        >
          <FaCirclePlus className='text-xl' />
          <h5 className='text-md'>Create</h5>
        </Link> */}
      </div>
      {/* Table here */}
      <div className='bg-white rounded-lg mt-8 border'>
        <div className='flex px-6 py-4 poppins-semibold text-sm text-blue-900 border-b'>
          <h5 className='w-3/12'>Name</h5>
          <h5 className='w-4/12'>Published Blogs</h5>
          <h5 className='w-3/12'>Account Age</h5>
          <h5 className='w-2/12'>Action</h5>
        </div>
        {paginatedData.map((item, index) => (
          <TableRow
            name={item.name}
            url={item.url}
            created={item.created}
            key={index}
          />
        ))}
      </div>
      <Pagination
        data={TEST_ROW_DATA}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </main>
  )
}

const TableRow = ({
  name,
  url,
  created,
}: {
  name: string
  url: string
  created: string
}) => {
  return (
    <div className='flex px-6 py-4 poppins-regular text-sm'>
      <h5 className='text-cyan-600 w-3/12'>{name}</h5>
      <h5 className='text-gray-500 flex gap-2 items-center w-4/12'>
        <MdContentCopy />
        {url}
      </h5>
      <h5 className='text-gray-500 w-3/12'>{created}</h5>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  )
}

export default Users
