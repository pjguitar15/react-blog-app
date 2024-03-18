import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const navigate = useNavigate()
  return (
    <section className='bg-gray-200 pt-12 pb-5'>
      <div className='container mx-auto flex'>
        {/* left */}
        <div className='w-2/6'>
          <div
            className='flex items-end cursor-pointer'
            onClick={() => navigate('/')}
          >
            <h4 className='text-blue-900 text-2xl poppins-semibold'>
              DevGuide
            </h4>
            <p className='text-purple-500 poppins-medium text-md'>.Blog</p>
          </div>
          <p className='poppins-light text-sm text-slate-500 my-3'>
            DevGuide Blog by Philcob Josol
          </p>

          {/* Social Media */}
          <div className='grid grid-cols-4 w-2/4 text-2xl text-slate-700'>
            <CiFacebook />
            <FaInstagram />
            <RiYoutubeLine />
            <RiTwitterXFill />
          </div>
        </div>
        {/* right */}
        <div className='grid grid-cols-4 w-4/6'>
          {[1, 2, 3, 4].map((item, index) => (
            <div className='flex flex-col gap-2 text-sm' key={index}>
              <h6 className='uppercase poppins-semibold'>Category</h6>
              <h6 className='poppins-light'>CSS</h6>
              <h6 className='poppins-light'>JavaScript</h6>
              <h6 className='poppins-light'>Tailwind</h6>
              <h6 className='poppins-light'>ReactJS</h6>
              <h6 className='poppins-light'>More Category</h6>
              <div className='hidden'>{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='container mx-auto'>
        <hr className='border-slate-400 my-5' />
        <div className='flex justify-between'>
          <h6 className='poppins-medium text-slate-500 text-sm'>
            &copy; {currentYear} DevGuide Blog
          </h6>
          <h6 className='poppins-medium text-slate-500 text-sm'>
            Made with 💖 Nabua, Philippines
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Footer
