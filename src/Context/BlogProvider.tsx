import { SetStateAction, useState } from 'react'
import { BlogContext } from './BlogContext'
import { ContentDataType } from '../pages/Admin/admin-pages/Blogs/NewBlog/ContentForm'

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
}

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishDate, setPublishDate] = useState('')
  const [route, setRoute] = useState('')
  const [category, setCategory] = useState('')
  const [isPublished, setIsPublished] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)
  const [isCommentsDisabled, setIsCommentsDisabled] = useState(false)
  const [content, setContent] = useState('')
  const [summary, setSummary] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [contentData, setContentData] = useState<ContentDataType[]>([
    { content: 'Please edit this heading', id: 'shn25ay5w', type: 'heading' },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure deleniti, optio rerum asperiores reiciendis unde incidunt sed at fugit consequatur itaque vero rem animi praesentium quam ea. Autem, laudantium.',
      id: '04zyavyj6',
      type: 'paragraph',
    },
  ])

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
  }
  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider
