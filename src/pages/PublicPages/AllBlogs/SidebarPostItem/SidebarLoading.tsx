import { motion } from 'framer-motion'
const SidebarLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className='flex gap-2 bg-white shadow-md rounded-lg'
    >
      <div className='w-3/6 h-24 bg-slate-200 animate-pulse' />
      <div className='w-full py-3 pe-5 flex flex-col gap-2'>
        <div className='w-3/4 bg-slate-200 animate-pulse h-3 rounded-full' />
        <div className='w-full bg-slate-200 animate-pulse h-3 rounded-full' />
        <div className='w-3/4 bg-slate-200 animate-pulse h-3 rounded-full' />
        <div className='w-1/4 bg-slate-200 animate-pulse h-3 rounded-full' />
      </div>
    </motion.div>
  )
}

export default SidebarLoading
