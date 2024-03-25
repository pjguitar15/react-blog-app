import { Link } from 'react-router-dom'
import BlogIllustration from '../../../../assets/wormie.png'
import { useBlogContext } from '../../../../Context/BlogContext'

const WelcomePanel = () => {
  const { isUserEditing } = useBlogContext()
  return (
    <div className='bg-violet-700 rounded-lg w-full px-10 py-5 flex gap-9'>
      <div className='w-3/4 flex flex-col gap-4 justify-center text-white'>
        <h2 className='text-4xl poppins-semibold'>Hi Philcob!</h2>
        <p className='poppins-regular text-sm leading-loose w-11/12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
          eligendi est saepe dolor dolores recusandae cumque nobis commodi.
          Saepe magnam velit quae consequatur temporibus unde a est corrupti
          nemo.
        </p>
        <Link
          to='/admin/blogs/new'
          className='bg-violet-900 hover:bg-violet-300 hover:text-black transition duration-300 text-white px-6 py-3 rounded-lg ms-0 me-auto poppins-regular text-sm'
        >
          {isUserEditing ? 'Continue Writing Post' : 'Write new post'}
        </Link>
      </div>
      <div className='w-1/4 p-4 rounded-lg flex items-center'>
        <img className='w-full' src={BlogIllustration} alt='' />
      </div>
    </div>
  )
}

export default WelcomePanel
