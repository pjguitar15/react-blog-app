import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AdminLinkTypes = {
  title: string
  icon: ReactNode
}

const AdminLink: React.FC<{ item: AdminLinkTypes }> = ({ item }) => {
  return (
    <Link
      to={`/admin/${item.title}`}
      className='flex justify-start ps-14 gap-3 items-center py-3 border-l-4 hover:border-violet-700 cursor-pointer'
    >
      {item.icon}
      <h5 className='text-sm poppins-regular text-slate-500 capitalize'>
        {item.title}
      </h5>
    </Link>
  )
}

export default AdminLink
