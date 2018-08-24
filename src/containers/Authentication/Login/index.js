import React, { Component } from 'react';
import { TextInput, Surface, Background, Text, Button, Toolbar } from '~/src/themes/ThemeComponent'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import I18n from '~/src/I18n'
import { isValidPhoneNumer } from '~/src/utils'
import PopupConfirm from '~/src/components/PopupConfirm'
import Password from '~/src/components/Password'
import styles from '~/src/containers/Authentication/styles'
import { TEXT_INPUT_STYLES } from '~/src/themes/common'
import { BackHandler } from 'react-native'
import { DEFAULT_PUSH_ANIMATION, DEFAULT_POP_ANIMATION, ASSETS, DEVICE_WIDTH, DEVICE_HEIGHT } from '~/src/themes/common'
import { ImageBackground } from 'react-native'

const STEP = {
    PHONE: 'PHONE',
    PASSWORD: 'PASSWORD'
}

class Login extends Component {
    static get options() {
        return {
            animations: {
                push: DEFAULT_PUSH_ANIMATION,
                pop: DEFAULT_POP_ANIMATION
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            step: STEP.PHONE,
            phone: '',
            password: '',
            errPhone: '',
            errPassword: ''
        }
    }

    _handlePressBackIcon = () => {
        if (this.state.step == STEP.PHONE) {
            Navigation.pop(this.props.componentId)
        } else if (this.state.step == STEP.PASSWORD) {
            this.setState({ step: STEP.PHONE })
        }
        return true

    }

    _onChangePhoneNumber = (text) => {
        this.setState({ phone: text }, () => {
            setTimeout(() => {
                if (!!this.state.errPhone && isValidPhoneNumer(text)) {
                    this.setState({ phone: text.replace(/\D/g, ''), errPhone: '' })
                } else {
                    this.setState({ phone: text.replace(/\D/g, '') })
                }
            }, 0)
        })
    }



    _onCancelPhone = () => {

    }

    _handlePressContinuePhone = () => {
        if (!this.state.phone || !isValidPhoneNumer(this.state.phone)) {
            this.setState({ errPhone: I18n.t('err_invalid_phone_number') })
            return
        } else {
            // this.popupAccountNotRegister && this.popupAccountNotRegister.open()
            this.setState({ step: STEP.PASSWORD })
        }
    }

    _renderStepPhone = () => {
        const enableContinuePhoneButton = (this.state.phone && this.state.phone.trim())
        return (
            <Surface pd20 themeable={false}>
                <Surface themeable={false} fullWidth mb20 rowCenter>
                    <Text white h6 center t={'login'} />
                </Surface>
                {!!this.state.errPhone && <Text error body2>{this.state.errPhone}</Text>}
                <Surface themeable={false} fullWidth mb20>
                    <TextInput
                        placeholderT={'phone'}
                        white
                        keyboardType='numeric'
                        onChangeText={this._onChangePhoneNumber}
                        value={this.state.phone}
                    />
                </Surface>
                <Surface themeable={false} fullWidth mb20>
                    <Button
                        round
                        t={'continue'}
                        textTransform={String.prototype.toUpperCase}
                        full
                        enable={enableContinuePhoneButton}
                        onPress={this._handlePressContinuePhone} />
                </Surface>
            </Surface>
        )
    }

    _handlePressFinish = () => {
        Navigation.setStackRoot('mainStack',
            {
                sideMenu: {
                    id: 'sideMenu',
                    left: {
                        component: {
                            name: 'gigabankclient.Drawer',
                        }
                    },
                    center: {
                        component: {
                            name: 'gigabankclient.HomeScreen',
                        }
                    },
                }
            })
    }

    _handlePressForgotPassword = () => {
        Navigation.push('mainStack', {
            component: {
                name: 'gigabankclient.ForgotPassword'
            }
        })
    }

    _renderStepPassword = () => {
        const { placeholderTextColor, color, ...restStyle } = TEXT_INPUT_STYLES.white
        return (
            <Surface pd20 themeable={false}>
                <Surface themeable={false} fullWidth mb20 rowCenter>
                    <Text white h6 center t={'password'} />
                </Surface>
                <Surface themeable={false} fullWidth mb20>
                    <Password
                        placeholderT={'hint_input_password'}
                        containerStyle={styles.textInput}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholderTextColor={placeholderTextColor}
                        iconStyle={{ color }}
                        style={{ flex: 1, padding: 2, color }}
                        containerStyle={restStyle}
                    />
                </Surface>

                <Surface themeable={false} fullWidth mb20>
                    <Button round
                        t={'finish'}
                        textTransform={String.prototype.toUpperCase}
                        full
                        onPress={this._handlePressFinish} />
                </Surface>

                <Surface themeable={false} fullWidth mb20 center>
                    <Button flat
                        t={'forgot_password_question'}
                        textStyle={{ color: '#38A5DA' }}
                        onPress={this._handlePressForgotPassword}
                    />
                </Surface>
            </Surface>
        )
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handlePressBackIcon)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handlePressBackIcon)
    }

    _render = () => {
        switch (this.state.step) {
            case STEP.PHONE:
            default:
                return this._renderStepPhone()
            case STEP.PASSWORD:
                return this._renderStepPassword()
        }
    }

    render() {
        return (
            <ImageBackground source={ASSETS.MAIN_BACKGROUND} style={{ width: '100%', height: '100%' }}>
                <Surface themeable={false} flex>
                    <Toolbar
                        onPressIconLeft={this._handlePressBackIcon}
                        themeable={false}
                        iconStyle={{ color: 'white' }}
                    />
                    <PopupConfirm
                        animationType='none'
                        content={I18n.t('err_account_not_register')}
                        textButton1={'close'}
                        onPressButton1={() => { }}
                        ref={ref => this.popupAccountNotRegister = ref} />
                    <PopupConfirm
                        animationType='none'
                        content={I18n.t('already_have_bank_account')}
                        textButton1={'disagree'}
                        textButton2={'popup_confirmed'}
                        onPressButton1={() => { }}
                        onPressButton2={() => this._onConfirmHaveBankAccount()}
                        ref={ref => this.popupHaveBankAccount = ref} />
                    {this._render()}
                </Surface>
            </ImageBackground>
        )
    }
}
export default connect(null, null)(Login)
