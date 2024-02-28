import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<string | undefined>('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log(uid)
        setLoggedInUser(uid)
      } else {
        console.log(user)
        setLoggedInUser('')
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ loggedInUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
