import { SlArrowRight } from 'react-icons/sl'
import ArticleCard from '../../../components/ArticleCard'
import { Link } from 'react-router-dom'

const TEST_AUTHOR_IMAGE =
  'https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/415498733_24540656215581232_7927848766146061217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH9jej0YvFLaYs4s7kcq_BhyJcZVrg1GDbIlxlWuDUYNu1fq36opt2_FpihapjaGWJqEJ9HSPGHbjX_Qkbq9rJz&_nc_ohc=vcpTY796y-QAX-27BwH&_nc_ht=scontent.fmnl33-6.fna&oh=00_AfC-M8UwbBphdJl2N-9hCrnnqa7kf5E0e6SvPSr5lDnl4w&oe=65E18E10'

const ARTICLES = [
  {
    title: 'JavaScript Fundamentals',
    featuredImage:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/03/1488480428eloquent-js.jpg',
    authorImage: TEST_AUTHOR_IMAGE,
    authorName: 'Philcob Josol',
    datePosted: 'Feb 27, 2024',
    articleLength: '3 mins',
  },
  {
    title: 'ReactJS Fundamentals',
    featuredImage:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--QewpUDvn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX384_BO1%2C204%2C203%2C200_.jpg',
    authorImage: TEST_AUTHOR_IMAGE,
    authorName: 'Philcob Josol',
    datePosted: 'Feb 27, 2024',
    articleLength: '3 mins',
  },
  {
    title: 'TailwindCSS Fundamentals',
    featuredImage: 'https://m.media-amazon.com/images/I/41J0PqhHY1L.jpg',
    authorImage: TEST_AUTHOR_IMAGE,
    authorName: 'Philcob Josol',
    datePosted: 'Feb 27, 2024',
    articleLength: '3 mins',
  },
  {
    title: 'TypeScript Fundamentals',
    featuredImage:
      'https://m.media-amazon.com/images/I/71LSG+FfoAS._AC_UF1000,1000_QL80_.jpg',
    authorImage: TEST_AUTHOR_IMAGE,
    authorName: 'Philcob Josol',
    datePosted: 'Feb 27, 2024',
    articleLength: '3 mins',
  },
]

const FeaturedArticleSection = () => {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-lg font-semibold'>
          <div className='flex items-center gap-3'>
            <h5>Featured Article</h5>
            <div className='bg-slate-800 h-0.5 w-9 mt-1'></div>
          </div>
          <div className='flex items-center gap-2'>
            <Link to='/blogs?category=All'>See All Article</Link>
            <SlArrowRight />
          </div>
        </div>

        {/* cards */}
        <div className='grid grid-cols-4 mt-8 gap-4'>
          {ARTICLES.map((item, index) => (
            <ArticleCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticleSection
