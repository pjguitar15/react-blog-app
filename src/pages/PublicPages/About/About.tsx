import { motion } from 'framer-motion'
const About = () => {
  const STAT_BLOCK_CONTENT = [
    { number: '132', description: 'Articles Created' },
    { number: '830+', description: 'Positive Reviews' },
    { number: '300+', description: 'Users' },
    { number: '100', description: 'Trusted Blogs' },
  ]

  return (
    <main className='bg-slate-100 py-7'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-5'>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
            delay: 0.4,
          }}
          className='bg-white rounded-xl p-7 flex gap-7'
        >
          <div className='flex flex-col justify-between'>
            <div>
              <p className='text-orange-500 font-semibold capitalize mb-3'>
                What Our App Do
              </p>
              <h2 className='text-4xl poppins-semibold mb-3'>
                Your Ultimate Destination for Hassle-Free Blog Creation!
              </h2>
            </div>
            <div className='flex flex-col gap-6'>
              <p className='text-slate-500'>
                At DevGuideBlog, we understand the importance of sharing your
                thoughts, experiences, and expertise with the world. That's why
                we've designed an intuitive and efficient blog app that empowers
                users to create their own blogs in no time.
              </p>
              <p className='text-slate-500'>
                Whether you're a seasoned developer, a budding entrepreneur, or
                an avid hobbyist, DevGuideBlog is your go-to platform for
                expressing yourself and connecting with like-minded individuals.
                With our user-friendly interface and customizable features, you
                can effortlessly design and publish captivating blog posts that
                reflect your unique style and personality.
              </p>
            </div>
          </div>
        </motion.div>
        <div className='flex gap-7'>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
              delay: 0.4,
            }}
            className='flex flex-col gap-2'
          >
            <img
              className='rounded-lg'
              src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <div className='bg-white rounded-lg p-6 grid grid-cols-2 gap-2'>
              {STAT_BLOCK_CONTENT.map((item, index) => (
                <StatBlocks
                  number={item.number}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

const StatBlocks = ({
  number,
  description,
}: {
  number: string
  description: string
}) => {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.4,
        delay: 0.8,
      }}
      className='bg-gray-100 p-5 rounded-lg'
    >
      <h4 className='text-xl poppins-semibold'>{number}</h4>
      <h6 className='poppins-regular text-xs text-slate-500'>{description}</h6>
    </motion.div>
  )
}

export default About
