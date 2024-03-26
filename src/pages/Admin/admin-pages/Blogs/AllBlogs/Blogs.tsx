import { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { TEST_ROW_DATA } from '../testData'
import Pagination from '../../../../../components/Pagination'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogContext } from '../../../../../Context/BlogContext'
import { useGetDoc } from '../../../../../helpers/hooks/useGetDoc'
import BlogsTable from './BlogsTable'
import BlogsTableLoading from './BlogsTableLoading'

const Blogs = () => {
  const itemsPerPage = 8 // You can adjust this value based on your preference.
  const [currentPage, setCurrentPage] = useState(1)
  const { isUserEditing } = useBlogContext()
  const { dataFromFirestore, loading } = useGetDoc('blogs')
  const navigate = useNavigate()

  console.log(dataFromFirestore)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedData = dataFromFirestore.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    if (isUserEditing) navigate('/admin/blogs/new')
  }, [])

  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          {loading ? (
            <h5 className='text-lg'>Featching data...</h5>
          ) : (
            <h5 className='text-lg'>{dataFromFirestore.length} Blogs</h5>
          )}

          {/* <div className='bg-slate-800 h-0.5 w-9 mt-1'></div> */}
        </div>
        <Link
          to='/admin/blogs/new'
          className='flex items-center gap-2 bg-violet-600 text-white px-4 rounded-lg py-2'
        >
          <FaCirclePlus className='text-xl' />
          <h5 className='text-md'>Create</h5>
        </Link>
      </div>
      {/* Table here */}
      {loading ? (
        <BlogsTableLoading />
      ) : (
        <BlogsTable paginatedData={paginatedData} />
      )}

      {!loading && (
        <Pagination
          data={TEST_ROW_DATA}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </main>
  )
}

export default Blogs
