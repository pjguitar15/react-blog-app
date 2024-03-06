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
    index: true,
  },
  {
    path: '/admin/categories',
    element: <Categories />,
    index: true,
  },
  {
    path: '/admin/blogs',
    element: <Blogs />,
    index: true,
  },
  {
    path: '/admin/tags',
    element: <Tags />,
    index: true,
  },
  {
    path: '/admin/users',
    element: <Users />,
    index: true,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
    index: true,
  },
]
