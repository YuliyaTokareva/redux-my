import React, { Component } from 'react'
import { TemeContext, ThemeContext } from './themes-context'
class ThemeButton extends Component {
    render() {
        return (
            <button
                {...this.props}
                style={{
                    backgroundColor: this.context.background,
                    color: this.context.fontColor,
                }}
                className="btn"
            />
        )
    }
}
ThemeButton.contextType = ThemeContext
export default ThemeButton
