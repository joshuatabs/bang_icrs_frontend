import {createContext} from 'react'

type UserContextType = {
    user: string | null,
    setUser: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType | null>(null);