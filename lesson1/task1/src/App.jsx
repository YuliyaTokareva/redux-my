import React, { Component } from 'react'
import ThemeButton from './ThemeButton.jsx'
import { ThemeContext, themes } from './themes-context.js'

class App extends Component {
    state = {
        theme: themes.dark,
    }
    toggleTheme = () => {
        const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark
        this.setState({
            theme: newTheme,
        })
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemeButton onClick={this.toggleTheme}>Dynamic Theme</ThemeButton>
                </ThemeContext.Provider>
                <ThemeButton onClick={this.toggleTheme}>Default Theme</ThemeButton>
            </div>
        )
    }
}
export default App
