const NewsletterSection = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <div className='rounded-full overflow-hidden bg-white p-5 inline-block'>
            <img
              className='w-20 mx-auto'
              src='https://cdn-icons-png.flaticon.com/512/948/948695.png'
              alt=''
            />
          </div>
        </div>
        <h2 className='text-2xl font-semibold text-center mt-3 text-slate-800 poppins-medium'>
          Subscribe For The Latest Updates
        </h2>
        <p className='text-slate-500 text-center poppins-normal'>
          Subscribe to the newsletter and never miss the new post every week!
        </p>
        {/* subscribe form */}
        <div className='text-center'>
          <form className='mt-4 poppins-medium'>
            <input
              className='font-light px-6 py-3 rounded me-2 text-sm shadow-sm w-3/4 sm:w-72 outline-violet-300'
              placeholder='Enter your email here'
              type='text'
            />
            <button className='bg-violet-600 w-3/4 sm:w-auto mt-2 sm:mt-0 text-white px-6 py-2 sm:py-3 rounded text-sm'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
