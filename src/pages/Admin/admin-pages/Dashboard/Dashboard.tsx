import TopArticles from './TopArticles'
import WelcomePanel from './WelcomePanel'

const Dashboard = () => {
  return (
    <main className='bg-slate-100 w-full p-10 flex gap-5'>
      <div className='w-3/4 flex flex-col gap-6'>
        <WelcomePanel />
        <TopArticles />
      </div>
      <div className='w-1/4 flex flex-col gap-4'>
        <div className='bg-yellow-500 py-4 rounded-lg flex flex-col justify-center items-center px-4'>
          <h3 className='text-6xl poppins-semibold text-yellow-950'>8</h3>
          <h6 className='text-xl poppins-medium text-yellow-900'>
            Published Articles
          </h6>
        </div>
        <div className='bg-yellow-500 py-4 rounded-lg flex flex-col justify-center items-center px-4'>
          <h3 className='text-6xl poppins-semibold text-yellow-950'>1</h3>
          <h6 className='text-xl poppins-medium text-yellow-900'>
            Pending Article
          </h6>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
