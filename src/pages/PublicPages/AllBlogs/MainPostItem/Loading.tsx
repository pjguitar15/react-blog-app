import { motion } from 'framer-motion'
const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className='bg-white rounded-md shadow-md p-3'
    >
      <div className='w-full bg-slate-200 rounded-lg h-64' />
      <div className='w-1/4 bg-slate-200 rounded h-6 mt-6' />
      <div className='w-2/6 bg-slate-200 rounded h-6 mt-2' />
      <div className='flex flex-col gap-2 my-6'>
        <div className='w-full bg-slate-200 rounded h-3' />
        <div className='w-full bg-slate-200 rounded h-3' />
        <div className='w-full bg-slate-200 rounded h-3' />
        <div className='w-full bg-slate-200 rounded h-3' />
        <div className='w-full bg-slate-200 rounded h-3' />
        <div className='w-1/4 bg-slate-200 rounded h-3' />
      </div>
      <div className='flex gap-2 items-center'>
        <div className='bg-slate-200 rounded-full size-7' />
        <div className='w-1/4 bg-slate-200 rounded h-6' />
      </div>
    </motion.div>
  )
}

export default Loading
