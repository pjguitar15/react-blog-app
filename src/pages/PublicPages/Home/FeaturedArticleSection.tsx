import { SlArrowRight } from 'react-icons/sl'
import ArticleCard from '../../../components/ArticleCard'
import { Link } from 'react-router-dom'
import { useGetDoc } from '../../../helpers/hooks/useGetDoc'

const FeaturedArticleSection = () => {
  const { dataFromFirestore } = useGetDoc('blogs')
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-lg font-semibold'>
          <div className='flex items-center gap-3'>
            <h5>Featured Article</h5>
            <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
          </div>
          <div className='flex items-center gap-2'>
            <Link to='/blogs?category=All'>See All Article</Link>
            <SlArrowRight />
          </div>
        </div>

        {/* cards */}
        <div className='grid grid-cols-4 mt-8 gap-4'>
          {dataFromFirestore
            .filter((item) => item.status === 'published')
            .slice(0, 4)
            .map((item, index) => (
              <ArticleCard item={item} key={index} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticleSection
