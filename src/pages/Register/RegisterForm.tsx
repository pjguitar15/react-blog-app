import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import SuccessModal from '../../components/SuccessModal'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig.ts'
const RegisterForm = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
  const [error, setError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const validations = {
    isNotEmpty: emailInput && passwordInput && confirmPasswordInput,
    isPasswordMatch: passwordInput === confirmPasswordInput,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validations.isNotEmpty && validations.isPasswordMatch) {
      setLoading(true)
      createUserWithEmailAndPassword(auth, emailInput, passwordInput)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)
          setError('')
          setLoginSuccess(true)
        })
        .catch((error) => {
          // const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          setError(errorMessage)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setError('Invalid input')
    }
  }
  return (
    <>
      {loginSuccess && (
        <SuccessModal
          message='Account created successfully! Please sign in.'
          action={() => navigate('/sign-in')}
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
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder='Enter your email'
          type='text'
        />
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder='Enter your password'
          type='password'
        />
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          value={confirmPasswordInput}
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
          placeholder='Confirm your password'
          type='password'
        />

        {error && <p className='text-sm text-red-500'>{error}</p>}
        <PrimaryButton
          text='Submit'
          type='submit'
          disabled={loading || loginSuccess}
        />
        <Link
          to='/sign-in'
          className='text-sm text-violet-500 poppins-regular text-center hover:scale-105 transition duration-300'
        >
          Already registered?{' '}
          <span className='text-violet-700 poppins-medium'> Sign in!</span>
        </Link>
      </form>
    </>
  )
}

export default RegisterForm
