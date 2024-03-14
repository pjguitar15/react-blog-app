import About from '../pages/PublicPages/About/About'
import AllBlogs from '../pages/PublicPages/AllBlogs/AllBlogs'
import BuyMeACoffee from '../pages/PublicPages/BuyMeACoffee/BuyMeACoffee'
import Home from '../pages/PublicPages/Home/Home'
import Register from '../pages/PublicPages/Register/Register'
import SignIn from '../pages/PublicPages/SignIn/SignIn'
import SingleBlog from '../pages/PublicPages/SingleBlog/SingleBlog'

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/blogs',
    element: <AllBlogs />,
  },
  {
    path: '/blog/:id',
    element: <SingleBlog />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/buy-me-a-coffee',
    element: <BuyMeACoffee />,
  },
]
