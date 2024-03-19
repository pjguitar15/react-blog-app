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

const TEST_LINKS = [
  {
    title: 'dashboard',
    icon: <AiOutlineDashboard className='text-slate-500 icon' />,
  },
  {
    title: 'blogs',
    icon: <TbWriting className='text-slate-500 icon' />,
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
  return (
    <div className='h-screen w-1/5 border-r border-gray-200 flex flex-col'>
      <div className='p-4'>
        <div className='size-10 rounded-full bg-violet-700 mx-auto'></div>
        <div className='flex justify-center items-end cursor-pointer mx-auto'>
          <h4 className='text-blue-900 text-2xl font-semibold'>Dasteen</h4>
          <p className='text-purple-500 font-medium text-md'>.Blog</p>
        </div>
        <p className='text-xs text-slate-500 text-center poppins-regular'>
          v1.0
        </p>
      </div>

      <div>
        {TEST_LINKS.map((item, index) => (
          <AdminLink item={item} key={index} />
        ))}
        <div
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log('Sign out success')
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
  )
}

export default AdminSidebar
