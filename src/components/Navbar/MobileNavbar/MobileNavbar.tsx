import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import NavContent from './NavContent'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='py-4 shadow-md relative z-50'>
      <NavContent show={isOpen} toggle={toggle} />
      <div className='container mx-auto flex justify-between'>
        <div
          className='flex items-end cursor-pointer'
          onClick={() => navigate('/')}
        >
          <h4 className='text-blue-900 text-2xl poppins-semibold'>DevGuide</h4>
          <p className='text-blue-500 poppins-medium text-md'>.Blog</p>
        </div>
        <div>
          <button onClick={toggle} className='rounded h-full px-3'>
            <GiHamburgerMenu className={`text-blue-500 text-xl`} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
