import { TEST_IMAGE } from './AllBlogs'

const MainPostItem = () => {
  return (
    <div className='bg-white rounded-md shadow-md p-3'>
      <img src={TEST_IMAGE} alt='' />
      <h6 className='poppins-regular text-xs text-slate-500 mt-2 mb-3'>
        UI/UX Design
      </h6>
      <div className='flex flex-col gap-2'>
        <h2 className='poppins-semibold'>
          New year edition: top ux/ui design trends rushing to PH in 2024
        </h2>
        <p className='poppins-regular text-slate-500 text-xs'>
          Are you looking to build a software product and searching for a
          reliable partner to help you implement it?
        </p>
      </div>
    </div>
  )
}

export default MainPostItem
