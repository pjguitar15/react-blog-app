import React, { useEffect } from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthGuardWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { loggedInUser } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/sign-in')
    }
  }, [loggedInUser])

  return <>{children}</>
}

export default AuthGuardWrapper
