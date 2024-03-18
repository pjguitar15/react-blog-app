import TextInput from './TextInput'
import CheckboxInput from './CheckboxInput'
import { useBlogContext } from '../../../../../Context/BlogContext'
import { GoPlus } from 'react-icons/go'

const BlogDetailsForm = () => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    publishDate,
    setPublishDate,
    route,
    setRoute,
    category,
    setCategory,
    isPublished,
    setIsPublished,
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

  const CATEGORIES = ['Category 1', 'Category 2', 'Category 3']

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
            {CATEGORIES.map((item, index) => (
              <option className='capitalize' key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <TextInput
          label='Author'
          placeholder='Elon Musk'
          state={[author, setAuthor]}
        />
        <TextInput
          label='Route'
          placeholder='/this-is-my-blog'
          state={[route, setRoute]}
        />
        <TextInput
          label='Summary'
          placeholder='Brief introduction about your article'
          state={[summary, setSummary]}
        />
      </div>

      <div>
        <TextInput
          label='Published on'
          placeholder='March 15, 2024'
          state={[publishDate, setPublishDate]}
        />
        <TextInput
          label='Read time'
          placeholder='3 mins'
          state={[readTime, setReadTime]}
        />
        <CheckboxInput
          label='Published'
          boolState={[isPublished, setIsPublished]}
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
