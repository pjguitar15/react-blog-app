import React, { useEffect } from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthGuardWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { loggedInUser, loading } = useAuthContext()
  const navigate = useNavigate()

  const displayLoading = () => {
    if (loading) {
      return (
        <>
          <h1 className='text-4xl text-center text-black'>Loading...</h1>
        </>
      )
    } else {
      if (!loggedInUser) {
        navigate('/sign-in')
      }
    }
  }

  useEffect(() => {
    displayLoading()
  }, [loggedInUser, loading])

  return <>{children}</>
}

export default AuthGuardWrapper
