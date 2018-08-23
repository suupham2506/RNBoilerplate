import React, { Component } from 'react'
import { themeSelector } from '~/src/store/selectors/Theme'
import { connect } from 'react-redux'
import { getTheme } from './utils'
import { TextInput } from 'react-native'
import { Surface, Icon } from '~/src/themes/ThemeComponent'
import commonStyle, { TEXT_INPUT_STYLES } from '~/src/themes/common'

class ThemeTextInput extends Component {
    render() {
        const { forwardedRef, style, theme, themeable, descriptionIcon, ...rest } = this.props
        const themeStyle = getTheme(theme)
        let textThemeStyle = themeable ?
            [{ color: themeStyle.textInputTextColor }, commonStyle.textInput.input, style]
            : [commonStyle.textInput.input, style]
        let placeholderTextColorTheme = themeable ? themeStyle.textInputPlaceholderColor : 'rgba(0, 0, 0, 0.4)'
        let descriptionIconStyle = themeable ?
            [{ color: themeStyle.textInputTextColor }, commonStyle.textInput.descriptionIcon]
            : [commonStyle.textInput.descriptionIcon]

        for (let identifier in rest) {
            if (TEXT_INPUT_STYLES[identifier] && rest[identifier]) {
                const { placeholderTextColor, ...restTextInputSyle } = TEXT_INPUT_STYLES[identifier]
                textThemeStyle.push(restTextInputSyle)
                if (restTextInputSyle) {
                    const { color } = restTextInputSyle
                    if (color) {
                        descriptionIconStyle.push({ color })
                    }
                }
                if (placeholderTextColor) {
                    placeholderTextColorTheme = placeholderTextColor
                }
            }
        }

        return (
            <Surface themeable={false} rowStart>
                {!!descriptionIcon && <Icon name={descriptionIcon} style={descriptionIconStyle} />}
                <TextInput
                    {...rest}
                    placeholderTextColor={placeholderTextColorTheme}
                    style={textThemeStyle}
                />
            </Surface>
        )
    }
}

const ConnectedTextInput = connect(state => ({
    theme: themeSelector(state)
}))(ThemeTextInput)

export default React.forwardRef((props, ref) => {
    return <ConnectedTextInput {...props} forwardedRef={ref} />
})