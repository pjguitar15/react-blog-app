import About from '../pages/PublicPages/About/About'
import BuyMeACoffee from '../pages/PublicPages/BuyMeACoffee/BuyMeACoffee'
import Home from '../pages/PublicPages/Home/Home'
import Register from '../pages/PublicPages/Register/Register'
import SignIn from '../pages/PublicPages/SignIn/SignIn'

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
  {
    path: '/about',
    element: <About />,
    index: true,
  },
  {
    path: '/buy-me-a-coffee',
    element: <BuyMeACoffee />,
    index: true,
  },
]
