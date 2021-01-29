import React, { useContext, useEffect, useState } from 'react';
import {auth} from '../firebase'

const AuthContext = React.createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password) {
        auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsub;
    },[])

    
    const value = {
        currentUser,
        signUp
    }
    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}
 
