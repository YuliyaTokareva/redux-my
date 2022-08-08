import React from 'react'
export const themes = {
    dark: {
        fontColor: '#ffffff',
        background: '#222222',
    },
    light: {
        fontColor: '#222222',
        background: '#ffffff',
    },
}
export const ThemeContext = React.createContext(themes.dark)
