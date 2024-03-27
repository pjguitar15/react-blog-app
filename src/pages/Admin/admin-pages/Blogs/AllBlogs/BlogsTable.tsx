import React from 'react'
import RowItem from './RowItem'

export type BlogType = {
  author: string
  category: string
  content: ContentType[]
  featuredImage: string
  id: string
  isCommentsDisabled: boolean
  isFeatured: boolean
  isPublished: boolean
  publishDate: string
  readTime: string
  route: string
  summary: string
  title: string
  uid: string
  status: string
}

type ContentType = {
  content: string
  id: string
  type: string
}

const BlogsTable: React.FC<{ paginatedData: BlogType[] }> = ({
  paginatedData,
}) => {
  return (
    <div className='bg-white rounded-lg border'>
      <div className='flex px-6 py-4 poppins-semibold text-sm text-violet-900 border-b'>
        <h5 className='w-2/12'>Author</h5>
        <h5 className='w-3/12'>Home Page URL</h5>
        <h5 className='w-1/12'>Views</h5>
        <h5 className='w-1/12'>Comments</h5>
        <h5 className='w-1/12'>Category</h5>
        <h5 className='w-2/12'>Created</h5>
        <h5 className='w-1/12'>Action</h5>
      </div>
      {paginatedData.map((item, index) => (
        <RowItem
          author={item.author}
          url={item.route}
          category={item.category}
          publishDate={item.publishDate}
          key={index}
        />
      ))}
    </div>
  )
}

export default BlogsTable
