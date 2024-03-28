const BlogsTableLoading = () => {
  return (
    <div className='bg-white rounded-lg mt-8 border'>
      <div className='flex px-6 py-4 poppins-semibold text-sm text-blue-900 border-b'>
        <h5 className='w-2/12'>Author</h5>
        <h5 className='w-3/12'>Home Page URL</h5>
        <h5 className='w-1/12'>Views</h5>
        <h5 className='w-1/12'>Comments</h5>
        <h5 className='w-1/12'>Category</h5>
        <h5 className='w-2/12'>Created</h5>
        <h5 className='w-1/12'>Action</h5>
      </div>
      {Array.from({ length: 10 }).map(() => (
        <LoadingRow />
      ))}
    </div>
  )
}

const LoadingRow = () => {
  const skeleton = 'bg-slate-200 h-4 rounded animate-pulse'
  return (
    <div className='flex px-6 py-3 poppins-regular text-sm gap-1'>
      <div className='ps-1 w-2/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-3/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-1/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-1/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-1/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-2/12'>
        <div className={`${skeleton}`}></div>
      </div>
      <div className='ps-1 w-1/12'>
        <div className={`${skeleton}`}></div>
      </div>
    </div>
  )
}
export default BlogsTableLoading
