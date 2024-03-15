import TextInput from './TextInput'
import CheckboxInput from './CheckboxInput'
import { useBlogContext } from '../../../../../Context/BlogContext'

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
  } = useBlogContext()

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
      </div>

      <div>
        <TextInput
          label='Published on'
          placeholder='March 15, 2024'
          state={[publishDate, setPublishDate]}
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
      </div>
    </div>
  )
}

export default BlogDetailsForm
