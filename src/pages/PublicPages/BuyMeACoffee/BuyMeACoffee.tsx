import PillButton from '../../../components/PillButton'
const BuyMeACoffee = () => {
  return (
    <main className='bg-purple-700 py-12'>
      <div className='container mx-auto'>
        <h1 className='text-white text-5xl text-center poppins-semibold mb-2'>
          Buy Me A Coffee
        </h1>
        <p className='text-white poppins-regular text-center text-md w-3/4 mx-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          dicta velit modi beatae, veritatis eligendi temporibus. Molestiae
          tempore nemo, autem, nulla, in porro necessitatibus reprehenderit
          sequi et architecto animi quidem!
        </p>
        <div className='text-center mt-4'>
          <PillButton text='Donate' color='white' />
        </div>
      </div>
    </main>
  )
}

export default BuyMeACoffee
