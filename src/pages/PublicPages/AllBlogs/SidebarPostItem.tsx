import { GoArrowRight } from 'react-icons/go'

const SidebarPostItem = ({
  imgUrl,
  shortDescription,
}: {
  imgUrl: string
  shortDescription: string
}) => {
  return (
    <div className='flex gap-2 bg-white shadow-md rounded-lg overflow-hidden'>
      <img className='w-2/6 object-cover' src={imgUrl} alt='' />
      <div className='p-2 flex flex-col gap-2 justify-center'>
        <h6 className='text-xs poppins-regular'>{shortDescription}</h6>
        <button className='poppins-semibold text-xs text-start flex items-center gap-2'>
          Learn More
          <GoArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SidebarPostItem