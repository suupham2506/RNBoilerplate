import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Image,
    StatusBar,
    ImageBackground,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native'
import { Surface, Text, Toolbar, Button, Icon, TextInput } from '~/src/themes/ThemeComponent'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { maskBankAccount, getElevation } from '~/src/utils'
import styles from './styles'
import {
    ASSETS,
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
    SURFACE_STYLES,
    COLORS,
    SIZES,
    STATUS_BAR_HEIGHT
} from '~/src/themes/common'
import Cards from '~/src/components/Cards'
import BankAccountItem from '~/src/components/BankAccountItem'

class WithDrawSearch extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchWord: ''
        }
    }

    componentDidMount() {

    }
    
    getText = () => {
        return this.state.searchWord
    }
    
    // setText = (text) => {
    //     this.setState({newValue: text})
    // }
    
    _onPressBack = () => {
        alert('On back press handle')
    }

    _onPressSearch = () => {
        alert(this.getText())
    }
    
    _renderItemFlatList = (item, index) => {
        return (
            <BankAccountItem
                bankImage = {item.iconBank}
                bankName = {item.bankName}
                // expireDate = {item.expireDate}
                // bankAccount = {item.bankAccount}
            />
        )
    }

    render() {

        const items = [
            {
                id: 1,
                iconBank: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg',
                bankName: 'NMMK M',
                expireDate: '12/22',
                bankAccount: 'HUU LUNG LA'
            },
            {
                id: 2,
                iconBank: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg',
                bankName: 'NMMK M',
                expireDate: '12/22',
                bankAccount: 'HUU LUNG LA'
            },
            {
                id: 3,
                iconBank: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg',
                bankName: 'NMMK M',
                expireDate: '12/22',
                bankAccount: 'HUU LUNG LA'
            },
            {
                id: 4,
                iconBank: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg',
                bankName: 'NMMK M',
                expireDate: '12/22',
                bankAccount: 'HUU LUNG LA'
            },
            {
                id: 5,
                iconBank: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg',
                bankName: 'NMMK M',
                expireDate: '12/22',
                bankAccount: 'HUU LUNG LA'
            },
        ]

        return (
            <Surface themeable={false} flex>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <ImageBackground source={ASSETS.LIGHT_BACKGROUND} style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}>
                    <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={this._onPressBack}>
                            <View style={styles.backContainer}>
                                <Icon name={'GB_arrow_left'} style={styles.backIcon} />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.searchCover}>
                            <TextInput style={styles.searchText}
                                placeholderT={'search_bank'}
                                onChangeText={(value) => this.setState({searchWord: value})}
                            />
                            <TouchableWithoutFeedback onPress={this._onPressSearch}>
                                <View style={styles.rightContainer }>
                                    <Icon name={'GB_search'} style={styles.searchIcon} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <Surface themeable={false} space8 />
                    <Surface themeable={true} flex >
                        <Surface themeable={false} space10 />
                        <FlatList
                            data={items}
                            renderItem={this._renderItemFlatList}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item.id + '_' + index}
                            bounces={false}
                            >
                        </FlatList>
                    </Surface>
                </ImageBackground>
            </Surface>
        )
    }
}

export default connect(null, {})(WithDrawSearch)