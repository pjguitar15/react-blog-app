import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'
import SearchButton from './SearchButton'
import { useAuthContext } from '../../Context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { loggedInUser, loading } = useAuthContext()
  return (
    <nav className='py-4 shadow-md relative z-0'>
      {/* left section */}
      <div className='container mx-auto flex justify-between'>
        <div>
          <div
            className='flex items-end cursor-pointer'
            onClick={() => navigate('/')}
          >
            <h4 className='text-blue-900 text-2xl font-semibold'>Dasteen</h4>
            <p className='text-purple-500 font-medium text-md'>.Blog</p>
          </div>
        </div>
        {/* right section */}
        <div className='flex items-center'>
          {/* links */}
          <ul className='flex font-semibold text-slate-700 gap-5 text-md poppins-medium text-sm'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blogs?category=All'>Blogs</Link>
            </li>
            <li>
              <Link to='/about'>About me</Link>
            </li>
          </ul>
          {/* search button */}
          <SearchButton />
          <div className='ms-7'>
            <PrimaryButton
              onClick={() => navigate('/buy-me-a-coffee')}
              text='☕ Buy me a coffee'
              size='normal'
            />
          </div>
          <div className='ms-2'>
            {!loading && (
              <>
                {loggedInUser ? (
                  <PrimaryButton
                    onClick={() => navigate('/admin/dashboard')}
                    text='Go to Dashboard'
                    size='normal'
                    outline
                  />
                ) : (
                  <PrimaryButton
                    onClick={() => navigate('/sign-in')}
                    text='Sign In'
                    size='normal'
                    outline
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
