import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {useCurrentAuthUserQuery} from "../redux/services/currentAuthUser.ts";

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

interface AuthContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const {data, isLoading, isError} = useCurrentAuthUserQuery(undefined);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        if (data && !user) {
            setUser({id: data.id, firstName: data.firstName, lastName: data.lastName})
        }
    }, [data, isLoading, isError, user]);

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider');
    }
    return context;
};




