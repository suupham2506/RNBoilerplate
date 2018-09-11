import React, { Component } from 'react';
import { Surface, Text, Button, Image, TextInput, Toolbar, Icon } from '~/src/themes/ThemeComponent'
import { ImageBackground, StatusBar, Platform, Linking } from 'react-native'
import { Navigation } from 'react-native-navigation'
import styles from './styles'
import { connect } from 'react-redux'
import I18n from '~/src/I18n'
import { ASSETS, COLORS, DEVICE_WIDTH, DEVICE_HEIGHT } from '~/src/themes/common'
import { DIALOG_MODE } from '~/src/constants'
import PopupConfirm from '~/src/components/PopupConfirm'
import { replacePatternString, formatPhoneNumber } from '~/src/utils'
import Ripple from 'react-native-material-ripple'
import FingerprintPopup from './FingerprintPopup'
import FingerprintScanner from 'react-native-fingerprint-scanner'

class Authentication extends Component {
    static get options() {
        return {
            topBar: {
                drawBehind: true,
                visible: false,
                animate: false
            }
        };
    }

    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: '',
            secure: true,
            showFingerprint: false
        }
    }

    _handlePressLogin = () => {
        if (this.state.phone == 1) {
            this.popupNotRegister.open()
            return
        }
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

    _handlePressRegister = () => {
        Navigation.push('mainStack', {
            component: {
                name: 'gigabankclient.Register',
            }
        })
    }

    _handlePressForgotPassword = () => {
        // Navigation.push('mainStack', {
        //     component: {
        //         name: 'gigabankclient.ForgotPassword',
        //     }
        // })
        this.popupForgotPassword && this.popupForgotPassword.open()
    }

    _handlePressFingerprint = () => {
        this.fingerprintPopup && this.fingerprintPopup.open()
    }

    _onAuthenticateFingerprintSuccess = () => {
        // alert('YOLO')
        this._handlePressLogin()
    }

    _handleCallHotline = () => {
        const hotline = I18n.t('hotline')
        const url = 'tel: ' + hotline
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    componentDidMount() {
        if (Platform.OS == 'android') {
            FingerprintScanner
                .isSensorAvailable()
                .then(isAvailable => {
                    if (isAvailable === true) {
                        this.setState({ showFingerprint: true })
                    }
                })
        }
    }


    render() {
        const enableLoginButton = (this.state.phone && this.state.phone.trim()
            && this.state.password && this.state.password.trim()
        )
        const forgotPasswordContent = replacePatternString(I18n.t('forgot_password_popup_content'), formatPhoneNumber(I18n.t('hotline')))
        return (
            <ImageBackground source={ASSETS.MAIN_BACKGROUND} style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}
                />
                <Toolbar transparent={true} />
                <FingerprintPopup
                    ref={ref => this.fingerprintPopup = ref}
                    onAuthenticateSuccess={this._onAuthenticateFingerprintSuccess}
                />
                <PopupConfirm
                    animationType='none'
                    content={forgotPasswordContent}
                    titleT={'forgot_password'}
                    textYesT={'call'}
                    textNoT={'cancel'}
                    onPressYes={this._handleCallHotline}
                    mode={DIALOG_MODE.YES_NO}
                    ref={ref => this.popupForgotPassword = ref} />

                <PopupConfirm
                    animationType='none'
                    contentT={'phone_not_register_content'}
                    titleT={'phone_not_register'}
                    textYesT={'register'}
                    onPressYes={this._handlePressRegister}
                    mode={DIALOG_MODE.YES_NO}
                    ref={ref => this.popupNotRegister = ref} />

                <Surface themeable={false} flex containerHorizontalSpace>
                    <Surface space20 themeable={false} />
                    <Surface themeable={false} titleAndDescription>
                        <Surface themeable={false} rowCenter>
                            <Text white title bold>GIGA</Text>
                            <Text white title thin>BANK</Text>
                        </Surface>
                    </Surface>
                    <TextInput
                        descriptionIcon={'GB_icon-34'}
                        placeholderT={'phone'}
                        white
                        onChangeText={text => this.setState({ phone: text })}
                        keyboardType='number-pad'
                        value={this.state.phone}
                        iconRight={'GB_icon-31'}
                        onPressIconRight={() => this.setState({ phone: '' })}
                        showIconRight={(this.state.phone && this.state.phone.trim())}
                    />
                    <TextInput
                        descriptionIcon={'GB_icon-28'}
                        placeholder={'\u2022 \u2022 \u2022 \u2022 \u2022 \u2022'}
                        white
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry={this.state.secure}
                    />


                    <Surface space16 themeable={false} />
                    <Button round full
                        t={'login'}
                        onPress={this._handlePressLogin}
                        enable={!!enableLoginButton}
                        gradientButton={true}
                    />
                    <Surface space8 themeable={false} />
                    <Surface themeable={false} rowSpacebetween fullWidth>
                        <Button flat noPadding
                            t={'register'}
                            textStyle={{ color: COLORS.BLUE }}
                            onPress={this._handlePressRegister}
                        />
                        <Button flat noPadding
                            t={'forgot_password_question'}
                            textStyle={{ color: COLORS.BLUE }}
                            onPress={this._handlePressForgotPassword}
                        />
                    </Surface>
                    <Surface themeable={false} flex columnEnd>
                        {!!this.state.showFingerprint && <Ripple rippleColor={COLORS.WHITE} style={{ padding: 10 }} onPress={this._handlePressFingerprint}>
                            <Icon name='GB_icon-30' style={{ fontSize: 40, color: COLORS.BLUE }} />
                        </Ripple>}
                    </Surface>
                </Surface>
            </ImageBackground>
        )
    }
}
export default connect(null, null)(Authentication)
