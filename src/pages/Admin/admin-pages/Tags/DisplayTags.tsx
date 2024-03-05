import { IoIosAddCircleOutline } from 'react-icons/io'

const DisplayTags = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>Tags</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <button
          onClick={() => setMode('write')}
          className='flex items-center gap-1 bg-violet-700 text-white px-4 rounded py-2'
        >
          <h5 className='text-sm'>Add a Tag</h5>
          <IoIosAddCircleOutline className='text-2xl' />
        </button>
      </div>
      <div className='grid grid-cols-5 py-5 gap-2'>
        <TagItem tagName='Hello World' />
        <TagItem tagName='Hello World' />
        <TagItem tagName='Hello World' />
        <TagItem tagName='Hello World' />
      </div>
    </main>
  )
}

const TagItem = ({ tagName }: { tagName: string }) => {
  return (
    <div className='text-center text-lg shadow-lg bg-violet-500 text-white font-bold py-3 px-4 rounded-lg relative'>
      <div className='size-3 rounded-full bg-white absolute top-2 left-2'></div>
      <div className='ms-4'>{tagName}</div>
    </div>
  )
}

export default DisplayTags
