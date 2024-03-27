import { SlArrowRight } from 'react-icons/sl'
import { useGetAllCategories } from '../../../helpers/hooks/useGetAllCategories'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CategorySection = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-lg font-semibold'>
          <div className='items-center gap-3 hidden sm:flex'>
            <h5>Browse the Category</h5>
            <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
          </div>
          <div className='flex items-center gap-2'>
            <h5>See All Category</h5>
            <SlArrowRight />
          </div>
        </div>
        <Cards />
      </div>
    </section>
  )
}

const Cards = () => {
  const { allCategories } = useGetAllCategories()

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 gap-5'>
      {allCategories?.slice(0, 6).map((item: any, index: number) => (
        <div
          key={index}
          className='py-24 flex flex-col items-center justify-center bg-white rounded cursor-pointer hover:bg-violet-100 transition duration-300'
        >
          <LazyLoadImage
            alt='category'
            className='w-12 mb-4'
            src={item.imageUrl}
          />
          <h6 className='font-semibold text-xl text-slate-800'>
            {item.category}
          </h6>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
