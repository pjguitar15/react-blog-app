type ArticleCardTypes = {
  title: string
  featuredImage: string
  authorImage: string
  authorName: string
  datePosted: string
  articleLength: string
}

const ArticleCard: React.FC<{ item: ArticleCardTypes }> = ({ item }) => {
  return (
    <div className='p-3 shadow-lg bg-white transition duration-300 cursor-pointer rounded-lg hover:scale-105'>
      <div className='h-48 overflow-hidden rounded-lg'>
        <img src={item.featuredImage} alt='featured' />
      </div>
      <h3 className='text-md font-semibold mt-5'>{item.title}</h3>
      {/* article info */}
      <div className='flex justify-start items-center gap-4 mt-5'>
        <img
          className='size-11 rounded-full object-cover'
          src={item.authorImage}
          alt='author'
        />
        <div>
          <h6 className='text-sm font-semibold'>{item.authorName}</h6>
          <div className='flex justify-between items-center text-slate-600 gap-2'>
            <h6 className='text-sm'>{item.datePosted}</h6>
            <div className='size-0.5 rounded-full bg-slate-800'></div>
            <h6 className='text-sm'>{item.articleLength} read</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
