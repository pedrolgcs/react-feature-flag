import { createContext, useContext } from 'react'

type User = {
  id: string
  email: string
  group: string
}

type AuthContextValue = {
  currentUser: User | null
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const currentUser = {
    id: '1',
    email: 'johndoe@example.com',
    group: 'groupA',
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
