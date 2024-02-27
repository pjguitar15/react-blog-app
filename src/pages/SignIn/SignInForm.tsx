import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import SuccessModal from '../../components/SuccessModal'

const SignInForm = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const TEST_CREDENTIALS = {
    username: 'admin',
    password: 'admin',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      usernameInput === TEST_CREDENTIALS.username &&
      passwordInput === TEST_CREDENTIALS.password
    ) {
      console.log('LOGGED IN')
      setLoginSuccess(true)
      setError('')
    } else {
      console.log('INCORRECT CREDENTIALS')
      setError('Incorrect Credentials')
    }
  }
  return (
    <>
      {loginSuccess && <SuccessModal />}
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
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
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
      </form>
    </>
  )
}

export default SignInForm
