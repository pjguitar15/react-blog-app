import { IoIosAddCircleOutline } from 'react-icons/io'

const DisplayCategories = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const cardContents = [
    {
      title: 'CSS',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    },
    {
      title: 'Javascript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
    },
    {
      title: 'Tailwind',
      img: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png',
    },
    {
      title: 'VueJS',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    },
    {
      title: 'ReactJS',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    },
  ]
  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>Categories</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <button
          onClick={() => setMode('write')}
          className='flex items-center gap-1 bg-violet-700 text-white px-4 rounded py-2'
        >
          <h5 className='text-sm'>Add a Category</h5>
          <IoIosAddCircleOutline className='text-2xl' />
        </button>
      </div>
      <div className='grid grid-cols-5 py-5 gap-5'>
        {cardContents.map((item, index: number) => (
          <div
            key={index}
            className='py-24 flex flex-col items-center justify-center bg-white rounded cursor-pointer hover:bg-violet-100 transition duration-300'
          >
            <img className='w-12 mb-4' src={item.img} alt='' />
            <h6 className='font-semibold text-xl text-slate-800'>
              {item.title}
            </h6>
          </div>
        ))}
      </div>
    </main>
  )
}

export default DisplayCategories
