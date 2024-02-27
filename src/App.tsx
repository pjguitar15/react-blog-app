import Navbar from './components/Navbar/Navbar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import SignIn from './pages/SignIn/SignIn'
import Dashboard from './pages/Admin/admin-pages/Dashboard'
import AdminSidebar from './pages/Admin/AdminSidebar'
import Categories from './pages/Admin/admin-pages/Categories'
import Posts from './pages/Admin/admin-pages/Posts'
import Tags from './pages/Admin/admin-pages/Tags'
import Users from './pages/Admin/admin-pages/Users'
import Settings from './pages/Admin/admin-pages/Settings'

const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const AdminWrapper = () => {
  return (
    <div className='flex'>
      <AdminSidebar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
        index: true,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminWrapper />,
    children: [
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
        path: '/admin/posts',
        element: <Posts />,
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
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
