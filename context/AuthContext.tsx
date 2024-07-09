import { createContext, useContext, useEffect, useState } from 'react';

import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';

import firebase from '@/firebase/config';

const auth = getAuth(firebase);
export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [user, setUser] = useState(null || auth.currentUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {loading ? <div></div> : children}
        </AuthContext.Provider>
    );
};