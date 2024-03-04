import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <main>
      <div className='grid grid-cols-2'>
        <div className='py-24 px-12'>
          <RegisterForm />
        </div>
        <div className='py-12 bg-violet-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-24 flex items-center justify-center flex-col'>
          <h1 className='text-4xl text-white poppins-semibold text-center leading-normal'>
            Create your account
          </h1>
          <p className='text-slate-200 poppins-light w-3/4 text-center'>
            Post your blogs and let readers around the world learn from you!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Register
