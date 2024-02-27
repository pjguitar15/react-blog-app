import PrimaryButton from '../PrimaryButton'
import SearchButton from './SearchButton'

const Navbar = () => {
  return (
    <nav className='py-4 shadow-md'>
      {/* left section */}
      <div className='container mx-auto flex justify-between'>
        <div>
          <div className='flex items-end'>
            <h4 className='text-blue-900 text-2xl font-semibold'>Dasteen</h4>
            <p className='text-purple-500 font-medium text-md'>.Blog</p>
          </div>
        </div>
        {/* right section */}
        <div className='flex items-center'>
          {/* links */}
          <ul className='flex font-semibold text-slate-700 gap-5 text-md'>
            <li>Home</li>
            <li>Category</li>
            <li>About Me</li>
          </ul>
          {/* search button */}
          <SearchButton />
          <div className='ms-2'>
            <PrimaryButton text='☕ Buy me a coffee' size='normal' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
