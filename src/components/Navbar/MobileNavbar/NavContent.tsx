import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../PrimaryButton'
import { useAuthContext } from '../../../Context/AuthContext'

const NavContent = ({
  show,
  toggle,
}: {
  show: boolean
  toggle: () => void
}) => {
  const { loggedInUser, loading } = useAuthContext()
  const navigate = useNavigate()

  return (
    <>
      {show && (
        <div
          className='w-full bg-black opacity-80 h-full fixed inset-0 z-10'
          onClick={toggle}
        />
      )}

      <div
        className={`fixed left-0 top-0 bottom-0 right-0 w-full z-50 transition-transform duration-300 ${
          show ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='h-full bg-white fixed w-3/4 transform z-50'>
          <div className='flex justify-end p-4'>
            <button onClick={toggle} className='rounded px-3 py-2'>
              <IoClose className='text-slate-600 text-3xl' />
            </button>
          </div>
          <div
            className='flex justify-center pb-5 items-end cursor-pointer'
            onClick={() => navigate('/')}
          >
            <h4 className='text-blue-900 text-2xl poppins-semibold'>
              DevGuide
            </h4>
            <p className='text-purple-500 poppins-medium text-md'>.Blog</p>
          </div>

          <ul className='flex-col h-full'>
            {LINKS.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  toggle()
                  navigate(item.link)
                }}
                className='bg-white py-4 text-center poppins-medium border-b border-slate-200 h-auto'
              >
                {item.text}
              </li>
            ))}
            <div className='items-end flex justify-center gap-2 py-4'>
              <div>
                <PrimaryButton
                  onClick={() => navigate('/buy-me-a-coffee')}
                  text='☕ Buy me a coffee'
                  size='normal'
                />
              </div>
              <div>
                {loading ? (
                  <div className='w-40 rounded-md h-10 bg-violet-200 animate-pulse'></div>
                ) : (
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
          </ul>
        </div>
      </div>
    </>
  )
}

const LINKS = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Blogs',
    link: '/blogs?category=All',
  },
  {
    text: 'About the App',
    link: '/about',
  },
]

export default NavContent
