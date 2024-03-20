import { useEffect, useState } from 'react'
import { BlogContext } from './BlogContext'
import { ContentDataType } from '../pages/Admin/admin-pages/Blogs/NewBlog/ContentForm'
import { format } from 'date-fns'
import { BlogContextType } from './BlogProviderType'
import { processContentData, resetFields } from './useBlogProviderFunctions'

const currentDate = new Date()

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishDate, setPublishDate] = useState(
    format(currentDate, 'MMMM dd, yyyy')
  )
  const [route, setRoute] = useState('')
  const [category, setCategory] = useState<string>('Select a Category')
  const [isPublished, setIsPublished] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)
  const [isCommentsDisabled, setIsCommentsDisabled] = useState(false)
  const [content, setContent] = useState('')
  const [summary, setSummary] = useState('')
  const [readTime, setReadTime] = useState('')
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [validationError, setValidationError] = useState('')
  const [uploadLoading, setUploadLoading] = useState(false)
  const [contentData, setContentData] = useState<ContentDataType[]>([
    { content: 'Please edit this heading', id: 'shn25ay5w', type: 'heading' },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.',
      id: '04zyavyj6',
      type: 'paragraph',
    },
  ])

  const hasEmptyFields =
    title === '' ||
    route === '' ||
    category === 'Select a Category' ||
    summary === '' ||
    readTime === '' ||
    author === '' ||
    selectedFile === null ||
    publishDate === ''

  const isUserEditing =
    title !== '' ||
    route !== '' ||
    category !== 'Select a Category' ||
    summary !== '' ||
    readTime !== '' ||
    author !== '' ||
    selectedFile !== null

  const isFormEmpty =
    title === '' &&
    route === '' &&
    category === 'Select a Category' &&
    summary === '' &&
    readTime === '' &&
    author === '' &&
    selectedFile === null

  // * Removes the validation error when user completes the form after getting a validation error
  useEffect(() => {
    if (!hasEmptyFields) {
      setValidationError('')
    }
  }, [
    title,
    author,
    publishDate,
    route,
    category,
    summary,
    readTime,
    selectedFile,
    hasEmptyFields,
  ])

  const reset = () => {
    resetFields(
      setTitle,
      setAuthor,
      setPublishDate,
      setRoute,
      setCategory,
      setSummary,
      setReadTime,
      setSelectedFile
    )
  }

  const handleSave = async () => {
    if (hasEmptyFields) {
      setValidationError(
        `We can't process this yet. Please complete all fields and hit save again.`
      )
      return
    }

    setValidationError(``)

    // Upload Process
    // STEP 1: Modify content array so image content will be strings
    setUploadLoading(true)
    const modifiedContentData = await processContentData(contentData)
    console.log('test', modifiedContentData)
    setUploadLoading(false)

    // TODO: Create the next step here
    // next step here
  }

  const contextValue: BlogContextType = {
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
    content,
    setContent,
    summary,
    setSummary,
    selectedFile,
    setSelectedFile,
    contentData,
    setContentData,
    readTime,
    setReadTime,
    handleSave,
    validationError,
    setValidationError,
    isUserEditing,
    reset,
    isFormEmpty,
    uploadLoading,
  }
  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider
