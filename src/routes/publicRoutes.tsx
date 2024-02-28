import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import SignIn from '../pages/SignIn/SignIn'

export const publicRoutes = [
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
  {
    path: '/register',
    element: <Register />,
    index: true,
  },
]
