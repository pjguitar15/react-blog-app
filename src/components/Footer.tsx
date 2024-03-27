import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { RiYoutubeLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const navigate = useNavigate()
  return (
    <section className='bg-gray-200 pt-12 pb-5'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        {/* left */}
        <div className='w-full md:w-2/6'>
          <div
            className='flex items-end cursor-pointer justify-center md:justify-start'
            onClick={() => navigate('/')}
          >
            <h4 className='text-blue-900 text-2xl poppins-semibold'>
              DevGuide
            </h4>
            <p className='text-purple-500 poppins-medium text-md'>.Blog</p>
          </div>
          <p className='poppins-light text-sm text-slate-500 my-3 text-center md:text-start'>
            DevGuide Blog by Philcob Josol
          </p>

          {/* Social Media */}
          <div className='grid grid-cols-3 w-2/4 text-2xl text-slate-700 mx-auto md:mx-0'>
            <a
              className='flex justify-center'
              href='https://www.facebook.com/philcobsuzuki/'
              target='_blank'
            >
              <CiFacebook />
            </a>
            <a
              className='flex justify-center'
              href='https://www.instagram.com/philcobsuzuki/'
              target='_blank'
            >
              <FaInstagram />
            </a>
            <a
              className='flex justify-center'
              href='https://www.youtube.com/channel/UCHU5arYldtTFq_PtEWI-ppQ'
              target='_blank'
            >
              <RiYoutubeLine />
            </a>
          </div>
        </div>
        {/* right */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 mt-6 md:mt-0 md:w-4/6 gap-y-7'>
          {[1, 2, 3, 4].map((item, index) => (
            <div
              className='flex flex-col gap-2 text-sm items-center md:items-start'
              key={index}
            >
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
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <h6 className='poppins-medium text-slate-500 text-sm'>
            &copy; {currentYear} DevGuide Blog
          </h6>
          <h6 className='poppins-medium text-slate-500 text-sm text-center md:text-start'>
            Made with 💖 Nabua, Philippines
          </h6>
        </div>
      </div>
    </section>
  )
}

export default Footer
