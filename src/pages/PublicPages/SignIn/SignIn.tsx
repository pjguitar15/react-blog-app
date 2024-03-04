import { useNavigate } from 'react-router-dom'
import SignInForm from './SignInForm'
import { useEffect } from 'react'
import { useAuthContext } from '../../../Context/AuthContext'

const SignIn = () => {
  const navigate = useNavigate()
  const { loggedInUser } = useAuthContext()

  useEffect(() => {
    const checkAuthentication = async () => {
      // Your asynchronous authentication check
      if (loggedInUser) {
        navigate('/admin/dashboard')
      }
    }

    checkAuthentication()
  }, [loggedInUser, navigate])

  return (
    <main>
      <div className='grid grid-cols-2'>
        <div className='py-24 px-12'>
          <SignInForm />
        </div>
        <div className='py-12 bg-violet-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-24 flex items-center justify-center flex-col'>
          <h1 className='text-4xl text-white poppins-semibold text-center leading-normal'>
            Sign in to your Account
          </h1>
          <p className='text-slate-200 poppins-light w-3/4 text-center'>
            Post your blogs and let readers around the world learn from you!
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn
