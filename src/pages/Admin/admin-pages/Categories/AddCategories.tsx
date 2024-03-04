import { TbCategory } from 'react-icons/tb'
import PrimaryButton from '../../../../components/PrimaryButton'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import { useAuthContext } from '../../../../Context/AuthContext'
import { useState } from 'react'

const AddCategories = ({
  setMode,
}: {
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [categoryInput, setCategoryInput] = useState('')
  const { loggedInUser } = useAuthContext()

  const addCategoryHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      userId: loggedInUser,
      category: categoryInput,
    }
    console.log(payload)
  }

  return (
    <main className='bg-slate-100 w-full p-7'>
      <div className='flex justify-between font-semibold'>
        <div className='flex items-center gap-3'>
          <h5 className='text-lg'>Categories</h5>
          <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
        </div>
        <button
          onClick={() => setMode('read')}
          className='flex items-center gap-1 bg-violet-700 text-white px-4 rounded py-2'
        >
          <h5 className='text-sm flex items-center gap-2'>
            <HiOutlineArrowLeft />
            Return to Categories
          </h5>
        </button>
      </div>
      <form
        className='flex flex-col w-3/4 mx-auto gap-3 bg-white p-12 rounded-xl max-w-[700px] mt-12 shadow-md'
        onSubmit={addCategoryHandler}
      >
        <TbCategory className='text-violet-500 text-8xl mx-auto mb-3' />
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          placeholder='Add category name'
          type='text'
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
        />
        <input
          className='bg-gray-100 px-4 py-2 rounded-lg outline-violet-600 poppins-regular text-sm'
          placeholder='Add category name'
          type='file'
        />
        <PrimaryButton text='Add' type='submit' />
      </form>
    </main>
  )
}

export default AddCategories
