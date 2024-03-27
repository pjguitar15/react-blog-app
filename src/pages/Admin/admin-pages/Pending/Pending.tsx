import { useGetUserInfo } from '../../../../helpers/hooks/useGetUserInfo'
import AdminDisplay from './AdminDisplay/AdminDisplay'
import Loading from './UserDisplay/Loading'
import UserDisplay from './UserDisplay/UserDisplay'

const Pending = () => {
  const { userInfo, loading } = useGetUserInfo()
  return (
    <main className='bg-slate-100 w-full p-7 relative'>
      {loading ? (
        <div className='py-7 grid grid-cols-2 gap-5'>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      ) : (
        <>
          {userInfo && (
            <>
              <div className='flex justify-between font-semibold'>
                <div className='flex items-center gap-3'>
                  <h5 className='text-lg'>
                    {userInfo?.type === 'user' ? 'Your ' : 'Accept/Decline '}
                    Pending Blogs
                  </h5>
                </div>
              </div>
              <DetermineDisplay type={userInfo?.type} />
            </>
          )}
        </>
      )}
    </main>
  )
}

const DetermineDisplay = ({ type }: { type: string | undefined }) => {
  return <div>{type === 'user' ? <UserDisplay /> : <AdminDisplay />}</div>
}

export default Pending
