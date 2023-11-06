import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}

const Authcontext = createContext({
    isAuthenticated: false,
})

export function AuthProvider({children}: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
    <Authcontext.Provider value={{isAuthenticated}}>
        {children}
    </Authcontext.Provider>
    );
}

export const useAuth = () => useContext(Authcontext)

