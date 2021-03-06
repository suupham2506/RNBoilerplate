import React, { Component, PureComponent } from 'react';
import { Surface, Text } from '~/src/themes/ThemeComponent'
import { Animated, View } from 'react-native'
import { COLORS, } from '~/src/themes/common'
import BankAccountItem from '~/src/components/BankAccountItem'
import { SIZES } from '~/src/themes/common';
import CardItem from '~/src/components/CardItem'

export default class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    _renderHeaderContent = () => {
        const { render, titleT } = this.props
        if (titleT) {
            return <Text white description t={titleT} />
        } else if (render) {
            return render
        }
    }

    render() {
        const { scrollY, floatBankItem = false, bankItemInfo, cardItemInfo, enable = true, empty = false, render } = this.props
        if (!enable) return <View />
        if (render) {
            return render()
        }
        if (empty) {
            return <Surface themeable={false} imageBackgroundFloat />
        }
        console.log('Header Bank Item Info', this.props)
        if (floatBankItem) {
            return (
                <Surface themeable={false} imageBackgroundFloat>
                    <Surface themeable={false} fakeToolbar />
                    <Surface themeable={false} space20 />
                    <Surface themeable={false} containerHorizontalSpace>
                        {this._renderHeaderContent()}
                    </Surface>
                    <Surface themeable={false} flex />
                    <Surface themeable={false} containerHorizontalMargin style={{ zIndex: 100 }}>
                        {bankItemInfo ?
                            <BankAccountItem
                                {...bankItemInfo}
                                verticalMargin={false}
                            /> :
                            <Surface themeable={false} rowCenter>
                                <CardItem {...cardItemInfo} />
                            </Surface>}
                    </Surface>
                    <Surface floatBankItemPart />
                    <Animated.View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: SIZES.BANK_ITEM_HEIGHT / 2,
                        backgroundColor: COLORS.BLUE,
                        opacity: !!scrollY ? scrollY.interpolate({
                            inputRange: [0, 70],
                            outputRange: [0, 1],
                        }) : 0,
                    }} />
                </Surface>
            )
        }
        return (
            <Surface themeable={false} containerHorizontalSpace imageBackground>
                <Surface themeable={false} fakeToolbar />
                <Surface themeable={false} space20 />
                {this._renderHeaderContent()}
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: COLORS.BLUE,
                    opacity: !!scrollY ? scrollY.interpolate({
                        inputRange: [0, 70],
                        outputRange: [0, 1],
                    }) : 0,
                }} />
            </Surface>
        )
    }
}