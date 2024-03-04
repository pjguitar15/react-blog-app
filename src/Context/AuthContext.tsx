import { createContext, useContext } from 'react'

interface MyContextType {
  loggedInUser: string | undefined
  loading: boolean
}

const AuthContext = createContext<MyContextType | undefined>(undefined)
const useAuthContext = (): MyContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useMyContext must be used within AuthProvider')
  }

  return context
}

export { AuthContext, useAuthContext }
