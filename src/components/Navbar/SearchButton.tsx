import { useEffect, useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const SearchButton = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  useEffect(() => {
    console.log(searchOpen)
  }, [searchOpen])
  return (
    <div
      className={`${
        !searchOpen && 'hover:scale-105 transition duration-300'
      } flex items-center group mx-4 poppins-regular `}
      onClick={() => !searchOpen && setSearchOpen(!searchOpen)}
    >
      <div className='flex items-center'>
        <div
          className={`relative me-4 ${
            searchOpen ? 'w-52 block opacity-100' : 'flex opacity-0 w-0'
          }`}
        >
          <input
            className={`${
              searchOpen ? 'w-52 block opacity-100' : 'flex opacity-0 w-0'
            } px-5 py-2 text-sm rounded-full bg-gray-100 outline-none`}
            type='text'
            placeholder='Search...'
          />
          <MdKeyboardDoubleArrowRight
            onClick={() => {
              setSearchOpen(false)
              console.log('should close')
            }}
            className='absolute right-2 top-1 bg-gray-200 p-1 size-6 rounded-full hover:scale-110 transition duration-300 hover:text-red-400 cursor-pointer'
          />
        </div>

        <HiMagnifyingGlass className='me-1 cursor-pointer' />
      </div>
      <h6 className='text-md text-slate-700 font-semibold poppins-medium text-sm cursor-pointer'>
        Search
      </h6>
    </div>
  )
}

export default SearchButton
