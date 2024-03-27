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
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetAllRoutes } from '../helpers/hooks/useGetAllRoutes'
import { useAuthContext } from './AuthContext'

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
  const { allRoutes } = useGetAllRoutes()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { loggedInUser } = useAuthContext()

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

  useEffect(() => {
    title
      ? setRoute(`/${title.toLowerCase().split(' ').join('-')}`)
      : setRoute('')
  }, [title])

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
      setContentData,
      setIsFeatured,
      setIsCommentsDisabled
    )
  }

  const handleSave = async () => {
    if (hasEmptyFields) {
      setValidationError(
        `We can't process this yet. Please complete all fields and hit save again.`
      )
      return
    }

    const isInvalidRoute = allRoutes.some(
      (item: { route: string }) => item.route === route
    )

    if (isInvalidRoute) {
      setValidationError(
        `This route is taken. Please enter a different route for your blog.`
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
      status: 'pending',
      route,
      category,
      isFeatured,
      publishDate,
      isCommentsDisabled,
      summary,
      readTime,
      featuredImage: featuredImageURL,
      uid: loggedInUser.uid,
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
    <BlogContext.Provider value={contextValue}>
      {isUserEditing && pathname !== '/admin/blogs/new' ? (
        <button
          onClick={() => navigate('/admin/blogs/new')}
          className='bg-yellow-100 border border-yellow-300 fixed bottom-[3rem] right-[3rem] pb-3 rounded-lg poppins-medium text-yellow-700 z-50'
        >
          <div className='relative pt-3'>
            <div
              onClick={reset}
              className='absolute right-0 -top-4 text-md font-semibold bg-red-100 rounded-full px-3 py-1 text-red-800 hover:scale-105 transition duration-300'
            >
              ×
            </div>
          </div>
          <div className='px-5'>✍️ Continue writing your post?</div>
        </button>
      ) : (
        <></>
      )}

      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
