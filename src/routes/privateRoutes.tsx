import Categories from '../pages/Admin/admin-pages/Categories/Categories'
import Dashboard from '../pages/Admin/admin-pages/Dashboard/Dashboard'
import Blogs from '../pages/Admin/admin-pages/Blogs/AllBlogs/Blogs'
import Settings from '../pages/Admin/admin-pages/Settings/Settings'
import Tags from '../pages/Admin/admin-pages/Tags/Tags'
import Users from '../pages/Admin/admin-pages/Users/Users'
import NewBlog from '../pages/Admin/admin-pages/Blogs/NewBlog/NewBlog'
import Pending from '../pages/Admin/admin-pages/Pending/Pending'

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
    path: '/admin/pending',
    element: <Pending />,
  },
  {
    path: '/admin/blogs/new',
    element: <NewBlog />,
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
