import { SetStateAction, useState } from 'react'
import { BlogContext } from './BlogContext'
import { ContentDataType } from '../pages/Admin/admin-pages/Blogs/NewBlog/ContentForm'
import { format } from 'date-fns'

export type BlogContextType = {
  title: string
  setTitle: React.Dispatch<SetStateAction<string>>
  author: string
  setAuthor: React.Dispatch<SetStateAction<string>>
  publishDate: string
  setPublishDate: React.Dispatch<SetStateAction<string>>
  route: string
  setRoute: React.Dispatch<SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<SetStateAction<string>>
  isPublished: boolean
  setIsPublished: React.Dispatch<SetStateAction<boolean>>
  isFeatured: boolean
  setIsFeatured: React.Dispatch<SetStateAction<boolean>>
  isCommentsDisabled: boolean
  setIsCommentsDisabled: React.Dispatch<SetStateAction<boolean>>
  content: string
  setContent: React.Dispatch<SetStateAction<string>>
  summary: string
  setSummary: React.Dispatch<SetStateAction<string>>
  selectedFile: null
  setSelectedFile: React.Dispatch<SetStateAction<null>>
  contentData: ContentDataType[]
  setContentData: React.Dispatch<SetStateAction<ContentDataType[]>>
  readTime: string
  setReadTime: React.Dispatch<SetStateAction<string>>
  handleSave: () => void
  validationError: string
}

// Get the current date
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
  const [selectedFile, setSelectedFile] = useState(null)
  const [validationError, setValidationError] = useState('')
  const [contentData, setContentData] = useState<ContentDataType[]>([
    { content: 'Please edit this heading', id: 'shn25ay5w', type: 'heading' },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.',
      id: '04zyavyj6',
      type: 'paragraph',
    },
  ])

  const handleSave = () => {
    const hasEmptyFields =
      title === '' ||
      route === '' ||
      category === '' ||
      summary === '' ||
      readTime === '' ||
      author === '' ||
      selectedFile === null ||
      publishDate === ''

    if (hasEmptyFields) {
      setValidationError(
        `We can't process this yet. Please complete all fields and hit save again.`
      )
      return
    }

    setValidationError(``)
    console.log({
      title,
      route,
      category,
      summary,
      author,
      publishDate,
      readTime,
      selectedFile,
      isPublished,
      isFeatured,
      isCommentsDisabled,
    })
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
  }
  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider
