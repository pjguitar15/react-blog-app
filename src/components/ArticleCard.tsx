import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

type ArticleCardTypes = {
  title: string
  featuredImage: string
  // authorImage: string
  author: string
  publishDate: string
  readTime: string
  summary: string
  route: string
}

const ArticleCard: React.FC<{ item: ArticleCardTypes }> = ({ item }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.4 }}
      onClick={() => {
        navigate(`blog${item.route}`)
      }}
      className='p-3 shadow-lg bg-white transition duration-300 cursor-pointer rounded-lg hover:scale-105 flex flex-col gap-7'
    >
      <div>
        <div className='h-48 overflow-hidden rounded-lg'>
          <img
            className='h-full w-full object-cover'
            src={item.featuredImage}
            alt='featured'
          />
        </div>
        <h3 className='text-md font-semibold mt-5'>{item.title}</h3>
        <p className='text-sm text-slate-500 mt-2 mb-1'>
          {item.summary.split(' ').slice(0, 15).join(' ')}...
        </p>
      </div>
      {/* article info */}
      <div className='flex justify-start items-center gap-4 mt-auto'>
        {' '}
        {/* Use mt-auto to push the article info to the bottom */}
        <img
          className='size-11 rounded-full object-cover'
          src={item.featuredImage}
          alt='author'
        />
        <div>
          <h6 className='text-sm font-semibold'>{item.author}</h6>
          <div className='flex justify-between items-center text-slate-600 gap-2'>
            <h6 className='text-sm'>{item.publishDate}</h6>
            <div className='size-0.5 rounded-full bg-slate-800'></div>
            <h6 className='text-sm'>{item.readTime} read</h6>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ArticleCard
