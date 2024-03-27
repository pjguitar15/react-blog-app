import { useGetDoc } from '../../../../helpers/hooks/useGetDoc'
import { useGetUserInfo } from '../../../../helpers/hooks/useGetUserInfo'
import TopArticles from './TopArticles'
import WelcomePanel from './WelcomePanel'

const Dashboard = () => {
  const { dataFromFirestore } = useGetDoc('blogs')
  const { userInfo } = useGetUserInfo()
  return (
    <main className='bg-slate-100 w-full h-screen p-10 flex gap-5 overflow-y-scroll'>
      <div className='w-3/4 flex flex-col gap-6'>
        <WelcomePanel />
        <TopArticles />
      </div>
      <div className='w-1/4 flex flex-col gap-4'>
        <div className='bg-yellow-500 py-4 rounded-lg flex flex-col justify-center items-center px-4'>
          <h3 className='text-6xl poppins-semibold text-yellow-950'>
            {dataFromFirestore.length || (
              <div className='border-gray-300 size-20 animate-spin rounded-full border-8 border-t-blue-600' />
            )}
          </h3>
          <h6 className='text-xl poppins-medium text-yellow-900'>
            Published Articles
          </h6>
        </div>
        {userInfo?.type === 'admin' && (
          <div className='bg-yellow-500 py-4 rounded-lg flex flex-col justify-center items-center px-4'>
            <h3 className='text-6xl poppins-semibold text-yellow-950'>1</h3>

            <h6 className='text-xl poppins-medium text-yellow-900'>
              Pending Article
            </h6>
          </div>
        )}
      </div>
    </main>
  )
}

export default Dashboard
