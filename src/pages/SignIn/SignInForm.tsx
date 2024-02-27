import { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'

const SignInForm = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('username', usernameInput)
    console.log('password', passwordInput)
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-3/4 mx-auto gap-3'>
      <div className='rounded-full p-4 bg-violet-100 overflow-hidden size-32 mx-auto mb-3'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/3001/3001758.png'
          alt=''
        />
      </div>
      <input
        className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600'
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder='Enter your username'
        type='text'
      />
      <input
        className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600'
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder='Enter your password'
        type='password'
      />
      <PrimaryButton text='Submit' type='submit' />
    </form>
  )
}

export default SignInForm
