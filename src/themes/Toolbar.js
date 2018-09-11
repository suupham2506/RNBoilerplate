import React from 'react'
import { Dimensions, StatusBar } from 'react-native'
import { Surface, Text, Icon, Button } from '~/src/themes/ThemeComponent'
const { width } = Dimensions.get('window')
import commonStyle from '~/src/themes/common'
const { toolbar } = commonStyle
const styles = {}
import { Navigation } from 'react-native-navigation'

export default class Toolbar extends React.PureComponent {

    constructor(props) {
        super(props)

    }

    _onPressBack = () => {
        const { onPressIconLeft, componentId } = this.props
        if (onPressIconLeft) {
            onPressIconLeft()
            return;
        }
        if (componentId) {
            Navigation.pop(this.props.componentId)
            return;
        }
    }

    _onPressIconRight = () => {
        const { onPressIconRight } = this.props
        onPressIconRight && onPressIconRight()
    }

    render() {
        const { iconLeft, iconRight, title, titleStyle, style, iconStyle, themeable,
            leftComponent, centerComponent, rightComponent, transparent=false
        } = this.props

        const left = leftComponent ? leftComponent() : <Button themeable={themeable} flat noPadding onPress={this._onPressBack}
            style={toolbar.iconLeftContainer}
            icon={!!iconLeft ? iconLeft : 'back'}
            iconStyle={[toolbar.iconLeft, iconStyle]}
        />
        const center = centerComponent ? centerComponent() : (!!title ?
            <Text style={[toolbar.title, titleStyle]} numberOfLines={1} themeable={themeable}>{" " + title + " "}</Text>
            :
            <Surface themeable={themeable} flex />
        )
        const right = rightComponent ? rightComponent() : (iconRight ? <Button themeable={themeable} flat onPress={this._onPressIconRight}
            style={toolbar.iconRightContainer}
            icon={iconRight}
            iconStyle={[toolbar.iconRight, iconStyle]}
        /> : <Surface themeable={false} />)
        if (transparent){
            return (
                <Surface style={[toolbar.container, style]} themeable={false} />
            )
        }

        const statusBarHeight = StatusBar.currentHeight || 0
        console.log('Statusbar Height', statusBarHeight)

        return (
            <Surface themeable={false}>
                <Surface themeable={false} style={{width: '100%', height: statusBarHeight}}/>
            <Surface style={[toolbar.container, style]} themeable={themeable}>
                {left}
                {center}
                {right}
            </Surface>
            </Surface>
        )
    }
}
