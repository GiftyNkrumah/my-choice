import React, { createContext, useState } from 'react'

export const PollContext = createContext()

export default function PollContextProvider (props) {
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')  
    const [cat, setCat] = useState({
        description: '',
        options: []
    })
    
    return (
        <PollContext.Provider value = {{title, setTitle, subtitle, setSubtitle, cat, setCat}}>
            {props.children}
        </PollContext.Provider>
    )
}