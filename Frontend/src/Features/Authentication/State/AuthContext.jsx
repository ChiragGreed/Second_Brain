import React, { createContext, useState } from 'react'


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [User, setUser] = useState();
    const [Loading, setLoading] = useState();


    return (
        <AuthContext.Provider value={{ User, setUser, Loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
