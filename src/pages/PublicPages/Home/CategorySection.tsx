import { SlArrowRight } from 'react-icons/sl'
import { useGetAllCategories } from '../../../helpers/hooks/useGetAllCategories'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const CategorySection = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-lg font-semibold'>
          <div className='items-center gap-3 hidden sm:flex'>
            <h5>Browse by Category</h5>
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
  const navigate = useNavigate()

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 py-5 gap-5'>
      {allCategories?.slice(0, 6).map((item: any, index: number) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.4 }}
          onClick={() => navigate(`/blogs?category=${item.category}`)}
          key={index}
          className='py-12 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm cursor-pointer hover:bg-blue-100 transition duration-300'
        >
          <LazyLoadImage
            alt='category'
            className='w-12 mb-4'
            src={item.imageUrl}
          />
          <h6 className='font-semibold text-xl text-slate-800'>
            {item.category}
          </h6>
        </motion.div>
      ))}
    </div>
  )
}

export default CategorySection
