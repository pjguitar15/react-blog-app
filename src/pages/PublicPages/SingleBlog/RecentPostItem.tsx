import { HiOutlineArrowRightCircle } from 'react-icons/hi2'

const RecentPostItem = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h6 className='text-md poppins-regular text-slate-700 '>
        Presentations at Spurbee: The Gift of Giving
      </h6>
      <p className='text-slate-400 text-xs poppins-light'>
        {`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque modi autem laudantium magnam ut ipsam, ipsa esse.
                Quos amet harum quam officiis suscipit eos et sunt quod,
                explicabo, laborum praesentium?`.slice(0, 150)}
        ...
      </p>
      <button className='uppercase poppins-regular text-xs text-slate-400 flex items-center gap-2'>
        Read more here{' '}
        <HiOutlineArrowRightCircle className='text-yellow-400 text-lg' />
      </button>
    </div>
  )
}

export default RecentPostItem
