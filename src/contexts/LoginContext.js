import React, { createContext, useState } from 'react'

export const LoginContext = createContext()

export default function LoginContextProvider (props) {
    const [isLogged, setLogged] = useState(true)
    const [email, setEmail] = useState('')  
    
    return (
        <LoginContext.Provider value = {{isLogged, setLogged, email, setEmail}}>
            {props.children}
        </LoginContext.Provider>
    )
}