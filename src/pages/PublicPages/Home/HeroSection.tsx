import HeroImage from '../../../assets/hero-img.webp'
import DevBlogLogo from '../../../assets/dev-blog-logo.svg'
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='bg-gradient-to-r from-[#f7fcff] to-[#cdebf7] relative overflow-hidden'>
      <div className='py-52 container mx-auto grid lg:grid-cols-2'>
        {/* left side */}
        <div className='poppins-medium'>
          <div className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-800'>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
                delay: 0.4,
              }}
            >
              Unlock Your Coding Potential with{' '}
            </motion.div>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
                delay: 0.4,
                type: 'spring',
                stiffness: 400,
              }}
              className='flex items-end mt-2'
            >
              <img className='size-10 mb-[-8px]' src={DevBlogLogo} alt='' />
              <span className='text-blue-700'>DevGuide.</span>
              <span className='text-blue-500'>Blog</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 0.4,
              type: 'spring',
              stiffness: 400,
            }}
            className='text-slate-500 mt-8 font-normal my-8 leading-loose'
          >
            At DevGuide.Blog, we're your ultimate companion on the journey of
            mastering coding. Join our community of passionate developers and
            embark on an enriching coding adventure today!
          </motion.p>
          {/* subscribe form */}
          <motion.form
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.4, delay: 0.4 }}
            className='mt-4'
          >
            <input
              className='font-light px-6 py-3 rounded me-2 text-sm shadow-sm w-full sm:w-72 outline-blue-400'
              placeholder='Enter your email here'
              type='text'
            />
            <button className='bg-blue-600 text-white px-2 w-full sm:w-auto mt-2 md:mt-0 md:px-6 py-3 rounded text-sm'>
              Subscribe
            </button>
          </motion.form>
        </div>
        {/* right side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
          className='lg:size-[42rem] 2xl:size-[50rem] bg-blue-500 rounded-full absolute lg:right-[-3rem] xl:right-[2rem] 2xl:right-[7rem] -bottom-[24rem]'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
          className='hidden lg:block absolute lg:-right-[10rem] xl:-right-7 2xl:right-12 bottom-0 lg:w-10/12 xl:w-8/12 2xl:w-1/2'
        >
          <img src={HeroImage} alt='' />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
