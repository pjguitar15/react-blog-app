import AdminLink from './AdminLink'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { AiOutlineDashboard } from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'

const TEST_LINKS = [
  {
    title: 'dashboard',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
  {
    title: 'categories',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
  {
    title: 'posts',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
  {
    title: 'tags',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
  {
    title: 'users',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
  {
    title: 'settings',
    icon: <AiOutlineDashboard className='text-slate-500' />,
  },
]

const AdminSidebar = () => {
  return (
    <div className='h-screen w-1/5 border-r border-gray-200'>
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
          <AiOutlineThunderbolt className='text-slate-500' />
          <h5 className='text-sm poppins-regular text-slate-500 capitalize'>
            Logout
          </h5>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
