import NewsletterSection from '../../../components/NewsletterSection'
import CategorySection from './CategorySection'
import FeaturedArticleSection from './FeaturedArticleSection'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedArticleSection />
      <NewsletterSection />
    </main>
  )
}

export default Home
