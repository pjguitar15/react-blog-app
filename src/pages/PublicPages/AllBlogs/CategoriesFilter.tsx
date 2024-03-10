import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const TEST_CATEGORIES = [
  'All',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'TypeScript Fundamentals',
  'UI/UX Design',
  'Music',
  'News',
]
const CategoriesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = searchParams.get('category')
  useEffect(() => {
    console.log(params)
  }, [searchParams])
  return (
    <main className='bg-slate-200 py-8 px-12'>
      <div className='container mx-auto flex justify-between gap-4'>
        {TEST_CATEGORIES.map((item, index) => (
          <button
            onClick={() => setSearchParams({ category: item })}
            className={`text-sm ${
              params === item
                ? 'poppins-semibold text-orange-500'
                : 'poppins-regular'
            }`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </main>
  )
}

export default CategoriesFilter
