import { useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import SuccessModal from '../../../components/SuccessModal'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'

const SignInForm: React.FC<{
  loginSuccess: boolean
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ loginSuccess, setLoginSuccess }) => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (emailInput && passwordInput) {
      signInWithEmailAndPassword(auth, emailInput, passwordInput)
        .then(() => {
          setLoginSuccess(true)
        })
        .catch((error) => {
          const errorMessage = error.message
          setError(errorMessage)
        })
      setError('')
    } else {
      console.log('INCORRECT CREDENTIALS')
      setError(`Please don't leave the input field empty.`)
    }
  }
  return (
    <>
      {loginSuccess && (
        <SuccessModal
          message='Successfully logged in!'
          action={() => navigate('/admin/dashboard')}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-3/4 mx-auto gap-3'
      >
        <div className='rounded-full p-4 bg-violet-100 overflow-hidden size-32 mx-auto mb-3'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3001/3001758.png'
            alt=''
          />
        </div>
        <div className='bg-yellow-100 border border-yellow-200 p-3 rounded text-yellow-900'>
          <p className='text-sm font-semibold'>Test Credentials</p>
          <p className='text-sm'>Username: admin@admin.com</p>
          <p className='text-sm'>Password: adminadmin</p>
        </div>
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder='Enter your username'
          type='text'
        />
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder='Enter your password'
          type='password'
        />
        {error && <p className='text-sm text-red-500'>{error}</p>}
        <PrimaryButton text='Submit' type='submit' disabled={loginSuccess} />
        <Link
          to='/register'
          className='text-sm text-violet-500 poppins-regular text-center hover:scale-105 transition duration-300'
        >
          Don't have an account yet?{' '}
          <span className='text-violet-700 poppins-medium'>Register.</span>
        </Link>
      </form>
    </>
  )
}

export default SignInForm
