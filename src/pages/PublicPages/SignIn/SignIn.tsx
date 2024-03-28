import { useNavigate } from 'react-router-dom'
import SignInForm from './SignInForm'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { motion } from 'framer-motion'

const SignIn = () => {
  const [loginSuccess, setLoginSuccess] = useState(false)
  const navigate = useNavigate()
  const { loggedInUser } = useAuthContext()

  useEffect(() => {
    const checkAuthentication = async () => {
      // Your asynchronous authentication check
      if (loggedInUser) {
        setTimeout(() => {
          navigate('/admin/dashboard')
        }, 3000)
      }
    }

    checkAuthentication()
  }, [loggedInUser, navigate])

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
          <SignInForm
            loginSuccess={loginSuccess}
            setLoginSuccess={setLoginSuccess}
          />
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
            Sign in to your Account
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

export default SignIn
