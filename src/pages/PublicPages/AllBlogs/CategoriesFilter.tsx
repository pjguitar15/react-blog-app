import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetAllCategories } from '../../../helpers/hooks/useGetAllCategories'
import { motion } from 'framer-motion'

type CategoryType = {
  category: string
  id: string
  imageUrl: string
  userId: string
}

const CategoriesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { allCategories, isCategoriesLoading } = useGetAllCategories()
  const params = searchParams.get('category')
  useEffect(() => {
    console.log(allCategories)
  }, [allCategories])
  return (
    <main className='bg-slate-200 px-12'>
      <div className='container mx-auto flex justify-between gap-4 overflow-x-scroll py-8'>
        {!isCategoriesLoading && (
          <motion.button
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              delay: 0.2,
            }}
            onClick={() => setSearchParams({ category: 'All' })}
            className={`text-sm ${
              params === 'All'
                ? 'poppins-semibold text-orange-500'
                : 'poppins-regular'
            }`}
          >
            All
          </motion.button>
        )}

        {allCategories?.map((item: CategoryType, index) => (
          <motion.button
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              delay: 0.2,
            }}
            onClick={() => setSearchParams({ category: item.category })}
            className={`text-sm ${
              params === item.category
                ? 'poppins-semibold text-orange-500'
                : 'poppins-regular'
            }`}
            key={index}
          >
            {item.category}
          </motion.button>
        ))}
      </div>
    </main>
  )
}

export default CategoriesFilter
