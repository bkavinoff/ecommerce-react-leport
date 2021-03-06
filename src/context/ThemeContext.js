import {createContext, useState} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [lightTheme, setLightTheme] = useState(false)

    const handleTheme = ()=>{
        setLightTheme(!lightTheme)
    }
    
    const data = {
        lightTheme,
        handleTheme
    }
    return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext