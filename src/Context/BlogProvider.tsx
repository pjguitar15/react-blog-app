import { SetStateAction, useState } from 'react'
import { BlogContext } from './BlogContext'

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
  }
  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider
