import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'
import { AuthPayload } from '../graphql/dist/generated-client'

type AuthStateContextType = {
  authPayload: AuthPayload | null
}

type AuthDispatchContextType = {
  setAuthPayload: (authPayload: AuthPayload) => void
}

const AuthStateContext = createContext({} as AuthStateContextType)
const AuthDispatchContext = createContext({} as AuthDispatchContextType)

export const AuthProviderContainer = ({ children }: PropsWithChildren<{}>) => {
  const [authPayload, setAuthPayload] = useState<AuthPayload | null>(null)

  return (
    <AuthStateContext.Provider value={{ authPayload }}>
      <AuthDispatchContext.Provider value={{ setAuthPayload }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)
