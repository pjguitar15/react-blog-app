import { useGetDoc } from '../../../helpers/hooks/useGetDoc'
import CategoriesFilter from './CategoriesFilter'
import MainPostItem from './MainPostItem/MainPostItem'
import SidebarPostItem from './SidebarPostItem/SidebarPostItem'
import Loading from './MainPostItem/Loading'
import SidebarLoading from './SidebarPostItem/SidebarLoading'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BlogType } from '../../Admin/admin-pages/Blogs/AllBlogs/BlogsTable'
import NoItems from './MainPostItem/NoItems'

const AllBlogs = () => {
  const { dataFromFirestore, loading } = useGetDoc('blogs')
  const [displayData, setDisplayData] = useState<BlogType[] | []>([])
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  useEffect(() => {
    console.log('Display Data', displayData)
  }, [displayData])

  useEffect(() => {
    const fetchData = () => {
      if (dataFromFirestore) setDisplayData(dataFromFirestore)
    }

    fetchData()
  }, [dataFromFirestore])

  useEffect(() => {
    if (dataFromFirestore) {
      const isDataExist = dataFromFirestore.some(
        (item) => item.category === category
      )

      if (isDataExist) {
        const filterData = dataFromFirestore.filter(
          (item) => item.category === category && item.status === 'published'
        )
        setDisplayData(filterData)
      } else {
        setDisplayData([])
      }
    }
  }, [category, dataFromFirestore])

  return (
    <>
      <CategoriesFilter />
      <main className='bg-slate-100'>
        <section className='container mx-auto flex flex-col-reverse lg:flex-row gap-3'>
          <div className='w-full lg:w-2/6'>
            <h1 className='poppins-semibold mt-3'>Recent Post</h1>
            <div className='flex flex-col gap-3 py-3'>
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <SidebarLoading key={index} />
                  ))
                : dataFromFirestore
                    .filter((item) => item.status === 'published')
                    .map((item, index) => (
                      <SidebarPostItem
                        imgUrl={item.featuredImage}
                        summary={item.summary}
                        key={index}
                      />
                    ))}
            </div>
          </div>
          <div className='lg:w-4/6 py-3'>
            <div className='grid md:grid-cols-2 gap-2'>
              {loading ? (
                <>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Loading key={index} />
                  ))}
                </>
              ) : (
                <>
                  {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <SidebarLoading key={index} />
                      ))
                    : category === 'All'
                      ? dataFromFirestore
                          .filter((item) => item.status === 'published')
                          .map((item, index) => (
                            <MainPostItem key={index} item={item} />
                          ))
                      : displayData
                          .filter((item) => item.status === 'published')
                          .map((item, index) => (
                            <MainPostItem key={index} item={item} />
                          ))}
                </>
              )}
            </div>
            {displayData.length === 0 && category !== 'All' && <NoItems />}
          </div>
        </section>
      </main>
    </>
  )
}

export const TEST_IMAGE =
  'https://images.unsplash.com/photo-1709418354363-a36dcce103bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default AllBlogs
