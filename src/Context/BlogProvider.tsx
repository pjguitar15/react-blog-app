import { useEffect, useState } from 'react'
import { BlogContext } from './BlogContext'
import { ContentDataType } from '../pages/Admin/admin-pages/Blogs/NewBlog/ContentForm'
import { format } from 'date-fns'
import { BlogContextType } from './BlogProviderType'
import {
  defaultContentData,
  processContentData,
  resetFields,
  uploadFeaturedImage,
} from './useBlogProviderFunctions'
import { useUploadToFirestore } from '../helpers/hooks/useUploadToFirestore'

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
  const [featuredImage, setFeaturedImage] = useState<any>(null)
  const [validationError, setValidationError] = useState('')
  const [uploadLoading, setUploadLoading] = useState(false)
  const [contentData, setContentData] =
    useState<ContentDataType[]>(defaultContentData)
  const [successMessage, setSuccessMessage] = useState('')

  const { uploadPayload } = useUploadToFirestore()

  const hasEmptyFields =
    title === '' ||
    route === '' ||
    category === 'Select a Category' ||
    summary === '' ||
    readTime === '' ||
    author === '' ||
    featuredImage === null ||
    publishDate === ''

  const isUserEditing =
    title !== '' ||
    route !== '' ||
    category !== 'Select a Category' ||
    summary !== '' ||
    readTime !== '' ||
    author !== '' ||
    featuredImage !== null ||
    contentData.length > 2

  const isFormEmpty =
    title === '' &&
    route === '' &&
    category === 'Select a Category' &&
    summary === '' &&
    readTime === '' &&
    author === '' &&
    featuredImage === null &&
    contentData === defaultContentData

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
    featuredImage,
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
      setFeaturedImage,
      setContentData
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
    console.log('Step 1: ', modifiedContentData)

    // STEP 2: Upload featuredImage
    const featuredImageURL = await uploadFeaturedImage(featuredImage)
    console.log('Step 2:', featuredImageURL)
    setUploadLoading(false)

    // Step 3: Create payload object
    const payload = {
      content: modifiedContentData,
      title,
      author,
      publishDate,
      route,
      category,
      isPublished,
      isFeatured,
      isCommentsDisabled,
      summary,
      readTime,
      featuredImage: featuredImageURL,
    }
    console.log('Payload', payload)
    console.log('Done!')

    // Step 4: Upload payload to
    console.log('Uploading payload to firestore...')
    await uploadPayload('blogs', payload)
    console.log('Upload done!')

    // Last Step: Display Success/Fail Message and Reset Form
    setSuccessMessage(`You have successfully uploaded the blog.`)
    reset()
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
    selectedFile: featuredImage,
    setSelectedFile: setFeaturedImage,
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
    successMessage,
    setSuccessMessage,
  }
  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider
