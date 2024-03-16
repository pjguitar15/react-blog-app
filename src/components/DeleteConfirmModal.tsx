import { SetStateAction } from 'react'
import { IoIosWarning } from 'react-icons/io'

const DeleteConfirmModal = ({
  open,
  setOpen,
  message,
}: {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  message: string
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
          Permanently delete record?
        </div>
        <p className='poppins-regular text-sm mb-5 text-slate-600'>
          {message
            ? message
            : `If you delete this record, you will permanently lose this information. Do you wish to proceed?`}
        </p>
        <div className='flex justify-end gap-2'>
          <button className='bg-red-500 px-4 py-1 rounded text-white'>
            Delete
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

export default DeleteConfirmModal
