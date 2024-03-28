import RegisterForm from './RegisterForm'
import { motion } from 'framer-motion'

const Register = () => {
  return (
    <main>
      <div className='grid grid-cols-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.8,
          }}
          className='py-24 px-12'
        >
          <RegisterForm />
        </motion.div>
        <div className='py-12 bg-blue-700 bg-gradient-to-r from-blue-500 to-blue-600 px-24 flex items-center justify-center flex-col'>
          <motion.h1
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              type: 'spring',
              stiffness: 200,
            }}
            className='text-4xl text-white poppins-semibold text-center leading-normal'
          >
            Create your account
          </motion.h1>
          <motion.p
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              type: 'spring',
              stiffness: 400,
            }}
            className='text-slate-200 poppins-light w-3/4 text-center'
          >
            Post your blogs and let readers around the world learn from you!
          </motion.p>
        </div>
      </div>
    </main>
  )
}

export default Register
