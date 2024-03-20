import { SetStateAction } from 'react'
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
  readTime: string
  setReadTime: React.Dispatch<SetStateAction<string>>
  handleSave: () => void
  validationError: string
  setValidationError: React.Dispatch<SetStateAction<string>>
  isUserEditing: boolean
  reset: () => void
  isFormEmpty: boolean
  uploadLoading: boolean
}
