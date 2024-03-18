import HeroImage from '../../../assets/hero-img.webp'
const HeroSection = () => {
  return (
    <section className='bg-gray-100'>
      <div className='container mx-auto grid grid-cols-2 py-52'>
        {/* left side */}
        <div className='poppins-medium'>
          <div className='text-6xl font-semibold text-slate-800'>
            Unlock Your Coding Potential with{' '}
            <span className='text-violet-700'>DevGuide.</span>
            <span className='text-violet-500'>Blog</span>
          </div>
          <p className='text-slate-500 mt-5 font-normal my-8'>
            At DevGuide.Blog, we're your ultimate companion on the journey of
            mastering coding. Join our community of passionate developers and
            embark on an enriching coding adventure today!
          </p>
          {/* subscribe form */}
          <form className='mt-4'>
            <input
              className='font-light px-6 py-3 rounded me-2 text-sm shadow-sm w-72 outline-violet-300'
              placeholder='Enter your email here'
              type='text'
            />
            <button className='bg-violet-600 text-white px-6 py-3 rounded text-sm'>
              Subscribe
            </button>
          </form>
        </div>
        {/* right side */}
        <div>
          <img src={HeroImage} alt='' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
