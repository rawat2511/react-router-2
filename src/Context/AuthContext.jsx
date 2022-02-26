import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthContextPorvider( { children } ) {

    const [isAuthenticated , setIsAuthenticated] = useState(false)

    const toggleAuth = () => {
        setIsAuthenticated( !isAuthenticated );
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, toggleAuth} }>
            { children }
        </AuthContext.Provider>
    )
}