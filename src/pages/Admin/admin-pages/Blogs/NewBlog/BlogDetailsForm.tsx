import TextInput from './TextInput'
import CheckboxInput from './CheckboxInput'
import { useBlogContext } from '../../../../../Context/BlogContext'
import { GoPlus } from 'react-icons/go'
import { useGetAllCategories } from '../../../../../helpers/hooks/useGetAllCategories'

const BlogDetailsForm = () => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    publishDate,
    setPublishDate,
    category,
    setCategory,
    isFeatured,
    setIsFeatured,
    isCommentsDisabled,
    setIsCommentsDisabled,
    summary,
    setSummary,
    selectedFile,
    setSelectedFile,
    readTime,
    setReadTime,
  } = useBlogContext()

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0])
  }

  const { allCategories, isCategoriesLoading } = useGetAllCategories()

  return (
    <div className='py-4 px-7 bg-white border shadow-sm rounded-lg grid grid-cols-2 gap-5'>
      <div>
        <TextInput
          label='Title'
          placeholder='This is my blog'
          state={[title, setTitle]}
        />
        <div className='flex flex-col gap-1 py-2'>
          <div className='text-sm poppins-regular text-gray-500'>
            Category <span className='text-red-500'>*</span>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='bg-gray-100 px-4 rounded py-2 outline-none'
          >
            <option className='capitalize'>Select a Category</option>
            {!isCategoriesLoading &&
              allCategories?.map((item: any, index) => (
                <option
                  className='capitalize'
                  key={index}
                  value={item.category}
                >
                  {item.category}
                </option>
              ))}
          </select>
        </div>
        <TextInput
          label='Author'
          placeholder='Elon Musk'
          state={[author, setAuthor]}
        />
        <div className='flex flex-col gap-1 py-2'>
          <div className='text-sm poppins-regular text-gray-500'>
            Route <span className='text-red-500'>*</span>
          </div>
          <input
            value={title ? `/${title.toLowerCase().split(' ').join('-')}` : ''}
            className='bg-gray-100 px-4 rounded py-2 outline-none text-slate-500'
            type='text'
            placeholder={'/my-blog-post'}
            readOnly
          />
        </div>
        <TextInput
          label='Summary'
          placeholder='Brief introduction about your article'
          state={[summary, setSummary]}
        />
      </div>

      <div>
        <TextInput
          label='Published on'
          placeholder={'March 14, 2024'}
          state={[publishDate, setPublishDate]}
        />
        <TextInput
          label='Read time'
          placeholder='3 mins'
          state={[readTime, setReadTime]}
        />
        <CheckboxInput
          label='Featured'
          boolState={[isFeatured, setIsFeatured]}
        />
        <CheckboxInput
          label='Disable Comments'
          boolState={[isCommentsDisabled, setIsCommentsDisabled]}
        />
        <div className='relative mt-3 inline-block w-3/6'>
          <label htmlFor='fileInput' className='cursor-pointer block'>
            <input
              id='fileInput'
              type='file'
              className='sr-only'
              onChange={handleFileChange}
            />
            <div className='border border-dashed border-gray-400 rounded-md justify-center items-center'>
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt='Selected file'
                  className='h-52 w-full object-cover object-top object'
                />
              ) : (
                <div className='my-5 flex flex-col items-center'>
                  <GoPlus className='text-gray-500 text-4xl' />
                  <p className='mt-2 text-sm text-gray-500'>Add Image</p>
                </div>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsForm
