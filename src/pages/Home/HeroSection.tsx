import HeroImage from '../../assets/hero-img.png'
const HeroSection = () => {
  return (
    <section className='bg-gray-100'>
      <div className='container mx-auto grid grid-cols-2 py-52'>
        {/* left side */}
        <div className='poppins-medium'>
          <div className='text-6xl font-semibold text-slate-800'>
            <h1>Hi, I'm Philcob</h1>
            <h1>FrontEnd Dev</h1>
          </div>
          <p className='text-slate-500 mt-5 border-l-2 border-slate-500 ps-4 font-normal my-8'>
            On this blog, I share tips and tricks, frameworks, projects,
            tutorials, etc. Make sure you subscribe to get the latest updates.
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
