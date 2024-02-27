import { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const SearchButton = () => {
  const [searchHovered, setSearchHovered] = useState(false)
  return (
    <div className='flex items-center group mx-4 poppins-regular'>
      <div className='flex items-center '>
        <div
          className={`${
            searchHovered && 'w-52 block opacity-100'
          } relative flex w-0 opacity-0 me-4`}
          onMouseEnter={() => setSearchHovered(true)}
        >
          <input
            className='px-5 py-2 text-sm rounded-full bg-gray-100 outline-none'
            type='text'
            placeholder='Search...'
          />
          <MdKeyboardDoubleArrowRight
            onClick={() => setSearchHovered(false)}
            className='absolute -right-1 top-1 bg-gray-200 p-1 size-6 rounded-full hover:scale-110 transition duration-300 hover:text-red-400 cursor-pointer'
          />
        </div>

        <HiMagnifyingGlass className='me-1' />
      </div>
      <h6 className='text-md text-slate-700 font-semibold poppins-medium text-sm'>
        Search
      </h6>
    </div>
  )
}

export default SearchButton
