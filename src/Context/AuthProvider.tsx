import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<string | undefined>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const uid = user.uid
          setLoggedInUser(uid)
        } else {
          setLoggedInUser('')
        }
      } catch (error) {
        console.error('Error in onAuthStateChanged:', error)
        // Handle the error as needed (e.g., redirect to an error page)
      } finally {
        setLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ loggedInUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
