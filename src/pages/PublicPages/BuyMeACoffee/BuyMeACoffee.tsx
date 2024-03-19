const BuyMeACoffee = () => {
  return (
    <main className='bg-purple-700 py-[100px]'>
      <div className='container mx-auto flex flex-col gap-5'>
        <h1 className='text-white text-5xl text-center poppins-semibold'>
          Buy Me A Coffee
        </h1>
        <p className='text-white poppins-regular text-center text-md w-3/4 mx-auto'>
          If you love what we're doing here at DevGuideBlog and want to support
          our mission of empowering bloggers worldwide, consider buying us a
          coffee on Buy Me A Coffee! Your contribution goes a long way in
          helping us maintain and improve our platform to provide you with the
          best blogging experience possible.
        </p>
        <div className='text-center mt-4'>
          <a
            href='https://pm.link/org-GYHMdW4FsoSUxFTbA1RkV4w4/test/tBhPucJ'
            target='_blank'
            className={`px-7 py-3 bg-violet-600 hover:bg-violet-500 font-semibold hover:scale-105 transition duration-300 capitalize rounded-full poppins-semibold text-sm disabled:opacity-35 disabled:cursor-not-allowed z-10 text-white`}
          >
            Donate
          </a>
        </div>
      </div>
    </main>
  )
}

export default BuyMeACoffee
