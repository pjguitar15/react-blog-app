import { SetStateAction } from 'react'
import { IoIosWarning } from 'react-icons/io'

const AreYouSureModal = ({
  open,
  setOpen,
  message,
  handler,
  loading,
  title,
}: {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  message?: string
  handler?: () => void
  loading?: boolean
  title?: string
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div
        onClick={() => setOpen(false)}
        className='bg-black w-screen h-screen opacity-50 fixed inset-0 z-10'
      ></div>
      <div className='bg-white rounded-lg shadow-md p-5 z-50 relative w-96'>
        <div className='text-xl poppins-medium flex items-end gap-2 mb-5'>
          <IoIosWarning className='text-yellow-500 text-3xl' />
          {title ? title : 'Permanently delete record?'}
        </div>
        <p className='poppins-regular text-sm mb-5 text-slate-600'>
          {message ? message : `Are you sure you about this action?`}
        </p>
        <div className='flex justify-end gap-2'>
          <button
            onClick={handler}
            className={`bg-yellow-500 px-4 py-1 rounded text-white disabled:opacity-40 disabled:cursor-not-allowed`}
            disabled={loading}
          >
            Yes
          </button>
          <button
            onClick={() => setOpen(false)}
            className='px-4 py-1 rounded text-blue-500'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AreYouSureModal
