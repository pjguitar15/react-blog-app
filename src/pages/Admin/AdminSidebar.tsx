import AdminLink from './AdminLink'
import { AiOutlineDashboard } from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { TbCategory } from 'react-icons/tb'
import { TbWriting } from 'react-icons/tb'
// import { IoPricetagOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useBlogContext } from '../../Context/BlogContext'
import { useAuthContext } from '../../Context/AuthContext'
import { MdOutlinePendingActions } from 'react-icons/md'

const SIDEBAR_LINKS = [
  {
    title: 'dashboard',
    icon: <AiOutlineDashboard className='text-slate-500 icon' />,
  },
  {
    title: 'blogs',
    icon: <TbWriting className='text-slate-500 icon' />,
  },
  {
    title: 'pending',
    icon: <MdOutlinePendingActions className='text-slate-500 icon' />,
  },
  {
    title: 'categories',
    icon: <TbCategory className='text-slate-500 icon' />,
  },
  // {
  //   title: 'tags',
  //   icon: <IoPricetagOutline className='text-slate-500' />,
  // },
  {
    title: 'users',
    icon: <FaRegUser className='text-slate-500 icon' />,
  },
  {
    title: 'settings',
    icon: <CiSettings className='text-slate-500 icon' />,
  },
]

const AdminSidebar = () => {
  const { reset, isUserEditing } = useBlogContext()
  const { loggedInUser } = useAuthContext()
  return (
    <>
      {!isUserEditing ? (
        <div className='h-screen lg:w-2/5 xl:w-1/5 border-r border-gray-200 flex flex-col'>
          <div className='px-4 py-8'>
            <div className='flex w-full justify-center'>
              <div className='flex items-end cursor-pointer'>
                <h4 className='text-blue-900 text-2xl poppins-semibold'>
                  DevGuide
                </h4>
                <p className='text-purple-500 poppins-medium text-lg'>.Blog</p>
              </div>
            </div>
            <p className='text-xs text-slate-500 text-center poppins-regular'>
              v1.0
            </p>
            <div className='w-full flex justify-center py-3 bg-slate-100 rounded-lg border mt-3'>
              <h6 className='poppins-regular text-sm'>
                Hello, {loggedInUser?.displayName} 👋
              </h6>
            </div>
          </div>

          <div>
            {SIDEBAR_LINKS.map((item, index) => (
              <AdminLink item={item} key={index} />
            ))}
            <div
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    console.log('Sign out success')
                    reset()
                  })
                  .catch((error) => {
                    // An error happened.
                    console.log(error)
                  })
              }}
              className='flex justify-start ps-14 gap-3 items-center py-3 border-l-4 hover:border-violet-700 cursor-pointer'
            >
              <CiLogout className='text-slate-500' />
              <h5 className='text-sm poppins-regular text-slate-500 capitalize'>
                Logout
              </h5>
            </div>
          </div>
          <Link
            to='/'
            className='mt-auto w-full mb-6 text-violet-600 poppins-regular text-sm flex gap-1 items-center justify-center hover:scale-105 transition duration-300'
          >
            <GoHome className='text-lg' />
            Go to Homepage
          </Link>
        </div>
      ) : (
        <div className='bg-violet-400 w-1'></div>
      )}
    </>
  )
}

export default AdminSidebar
