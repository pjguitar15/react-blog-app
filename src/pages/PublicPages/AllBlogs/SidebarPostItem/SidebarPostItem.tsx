import { GoArrowRight } from 'react-icons/go'
import { motion } from 'framer-motion'

const SidebarPostItem = ({
  imgUrl,
  summary,
}: {
  imgUrl: string
  summary: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.4 }}
      className='flex gap-2 bg-white shadow-md rounded-lg overflow-hidden'
    >
      <img className='w-2/6 object-cover' src={imgUrl} alt='' />
      <div className='p-2 flex flex-col gap-2 justify-center'>
        <h6 className='text-xs poppins-regular'>{summary.slice(0, 100)}...</h6>
        <button className='poppins-semibold text-xs text-start flex items-center gap-2'>
          Learn More
          <GoArrowRight />
        </button>
      </div>
    </motion.div>
  )
}

export default SidebarPostItem
