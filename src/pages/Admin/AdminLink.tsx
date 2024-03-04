import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type AdminLinkTypes = {
  title: string
  icon: ReactNode
}

const AdminLink: React.FC<{ item: AdminLinkTypes }> = ({ item }) => {
  return (
    <NavLink
      to={`/admin/${item.title}`}
      className={({ isActive, isPending }) =>
        `flex justify-start ps-14 gap-3 items-center py-3 border-l-4 hover:border-violet-700 cursor-pointer ${
          isPending ? 'pending' : isActive ? 'active' : ''
        }`
      }
    >
      {item.icon}
      <h5 className={`text-sm text-slate-500 capitalize`}>{item.title}</h5>
    </NavLink>
  )
}

export default AdminLink
