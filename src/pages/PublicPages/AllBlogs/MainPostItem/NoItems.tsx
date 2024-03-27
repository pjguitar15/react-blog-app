import EmptyBlog from '../../../../assets/empty-blog.png'

const NoItems = () => {
  return (
    <div className='w-full flex flex-col gap-3 items-center justify-center mx-auto h-full'>
      <img className='w-40 opacity-80' src={EmptyBlog} alt='' />
      <h6 className='text-xl poppins-semibold text-slate-500'>
        There is no result for this category
      </h6>
    </div>
  )
}

export default NoItems
