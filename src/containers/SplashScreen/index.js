
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import {Icon} from '~/src/themes/ThemeComponent'
import { Colors } from 'react-native-ui-lib';
import { View } from '~/src/themes/ThemeComponent'

export default class SplashScreen extends Component {

    static get options() {
        return {
            topBar: {
                visible: false,
                drawBehind: false,
                animate: false,
            },
        };
    }


    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    componentDidAppear() {
        console.log('Splash Screen Did Appear')
    }

    componentDidMount() {
        console.log('Splash Screen Did Mount')
        setTimeout(() => {
            Navigation.setStackRoot(this.props.componentId, {
                component: {
                    name: 'gigabankclient.HomeScreen',
                },
            });
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name="the-bank" style={{ color: Colors.orange30, fontSize: 120 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
