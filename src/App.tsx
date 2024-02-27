import Navbar from './components/Navbar/Navbar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import SignIn from './pages/SignIn/SignIn'

const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
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
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
