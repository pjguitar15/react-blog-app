import { motion } from 'framer-motion'
const BuyMeACoffee = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.4,
      }}
      className='bg-gradient-to-r from-blue-500 to-blue-600 py-[100px]'
    >
      <div className='container mx-auto flex flex-col gap-5'>
        <motion.h1
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            type: 'spring',
            stiffness: 200,
          }}
          className='text-white text-5xl text-center poppins-semibold'
        >
          Buy Me A Coffee
        </motion.h1>
        <motion.p
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
            type: 'spring',
            stiffness: 200,
          }}
          className='text-white poppins-regular text-center text-md w-3/4 mx-auto'
        >
          If you love what we're doing here at DevGuideBlog and want to support
          our mission of empowering bloggers worldwide, consider buying us a
          coffee on Buy Me A Coffee! Your contribution goes a long way in
          helping us maintain and improve our platform to provide you with the
          best blogging experience possible.
        </motion.p>
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
            type: 'spring',
            stiffness: 200,
          }}
          className='text-center mt-4'
        >
          <a
            href='https://pm.link/org-GYHMdW4FsoSUxFTbA1RkV4w4/test/tBhPucJ'
            target='_blank'
            className={`px-7 py-3 bg-white hover:bg-blue-500 font-semibold hover:scale-105 transition duration-300 capitalize rounded-full poppins-semibold text-sm disabled:opacity-35 disabled:cursor-not-allowed z-10 text-slate-700 hover:text-white border border-white`}
          >
            Donate
          </a>
        </motion.div>
      </div>
    </motion.main>
  )
}

export default BuyMeACoffee
