import Categories from '../pages/Admin/admin-pages/Categories/Categories'
import Dashboard from '../pages/Admin/admin-pages/Dashboard'
import Blogs from '../pages/Admin/admin-pages/Blogs/Blogs'
import Settings from '../pages/Admin/admin-pages/Settings'
import Tags from '../pages/Admin/admin-pages/Tags/Tags'
import Users from '../pages/Admin/admin-pages/Users'

export const privateRoutes = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/admin/categories',
    element: <Categories />,
  },
  {
    path: '/admin/blogs',
    element: <Blogs />,
  },
  {
    path: '/admin/tags',
    element: <Tags />,
  },
  {
    path: '/admin/users',
    element: <Users />,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
  },
]
