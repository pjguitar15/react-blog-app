import { createContext, useContext } from 'react'
import { BlogContextType } from './BlogProvider'

const BlogContext = createContext<BlogContextType | undefined>(undefined)

const useBlogContext = (): BlogContextType => {
  const context = useContext(BlogContext)

  if (!context) {
    throw new Error('useBlogContext must be used within a MyProvider')
  }

  return context
}

export { BlogContext, useBlogContext }
