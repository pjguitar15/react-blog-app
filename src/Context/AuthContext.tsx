import { createContext, useContext } from 'react'

const AuthContext = createContext(undefined)
const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useMyContext must be used within AuthProvider')
  }

  return context
}

export { AuthContext, useAuthContext }
