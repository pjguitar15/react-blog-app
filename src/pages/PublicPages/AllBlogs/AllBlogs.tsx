import { useEffect } from 'react'
import { useGetDoc } from '../../../helpers/hooks/useGetDoc'
import CategoriesFilter from './CategoriesFilter'
import MainPostItem from './MainPostItem'
import SidebarPostItem from './SidebarPostItem'

const AllBlogs = () => {
  const { dataFromFirestore } = useGetDoc('blogs')
  useEffect(() => {
    console.log(dataFromFirestore)
  }, [dataFromFirestore])
  return (
    <>
      <CategoriesFilter />
      <main className='bg-slate-100'>
        <section className='container mx-auto flex gap-3'>
          <div className='w-2/6'>
            <h1 className='poppins-semibold mt-3'>Recent Post</h1>
            <div className='flex flex-col gap-3 py-3'>
              {TEST_RECENT_POST.map((item, index) => (
                <SidebarPostItem
                  imgUrl={item.imgUrl}
                  shortDescription={item.shortDescription}
                  key={index}
                />
              ))}
            </div>
            <h1 className='poppins-semibold mt-3'>News</h1>
            <div className='flex flex-col gap-3 py-3'>
              {dataFromFirestore.map((item, index) => (
                <SidebarPostItem
                  imgUrl={item.featuredImage}
                  shortDescription={item.summary}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className='w-4/6 py-3'>
            <div className='grid grid-cols-2 gap-2'>
              {dataFromFirestore.map((item, index) => (
                <MainPostItem key={index} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const TEST_IMAGE =
  'https://images.unsplash.com/photo-1709418354363-a36dcce103bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const TEST_RECENT_POST = [
  {
    imgUrl: TEST_IMAGE,
    shortDescription: 'Mobile App Design Trends 2020: comprehensive collection',
  },
  {
    imgUrl: TEST_IMAGE,
    shortDescription: 'Mobile App Design Trends 2020: comprehensive collection',
  },
  {
    imgUrl: TEST_IMAGE,
    shortDescription: 'Mobile App Design Trends 2020: comprehensive collection',
  },
]

export default AllBlogs
