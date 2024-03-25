import Navbar from './components/Navbar/Navbar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import AdminSidebar from './pages/Admin/AdminSidebar'
import { publicRoutes } from './routes/publicRoutes'
import { privateRoutes } from './routes/privateRoutes'
import AuthProvider from './Context/AuthProvider'
import AuthGuardWrapper from './components/AuthGuardWrapper'
import BlogProvider from './Context/BlogProvider'

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
      <BlogProvider>
        <AuthGuardWrapper>
          <AdminSidebar />
        </AuthGuardWrapper>
        <Outlet />
      </BlogProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: publicRoutes,
  },
  {
    path: '/admin',
    element: <AdminWrapper />,
    children: privateRoutes,
  },
])

const App = () => {
  return (
    <div className='relative'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
