import { getFontStyle } from '~/src/utils'
import { Platform } from 'react-native'

export const THEMES = {
    light: 'light',
    dark: 'dark'
}

export const FONT_WEIGHTS = {
    light: 'light',
    regular: 'regular',
    medium: 'medium',
    bold: 'bold'
}

// export const FONT_SIZES = {
//     small: 10,

// }

export const TEXT_STYLES = {
    h5: {
        ...getFontStyle(FONT_WEIGHTS.regular),
        fontSize: 24
    },
    h6: {
        ...getFontStyle(FONT_WEIGHTS.medium),
        fontSize: 20
    },
    overline: {
        ...getFontStyle(FONT_WEIGHTS.regular),
        fontSize: 10
    },
    body1: {
        ...getFontStyle(FONT_WEIGHTS.regular),
        fontSize: 16
    },
    body2: {
        ...getFontStyle(FONT_WEIGHTS.regular),
        fontSize: 14
    },
    subtitle1: {
        ...getFontStyle(FONT_WEIGHTS.regular),
        fontSize: 16
    },
    subtitle2: {
        ...getFontStyle(FONT_WEIGHTS.medium),
        fontSize: 14
    }
}

export default {
    button: {
        borderRadius: 2,
        backgroundColor: '#F16654',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
    },
    buttonIcon: {
        fontSize: 18,
        color: 'white',
        marginRight: 5
    }
}

export const toastStyle = {
    toastStyle: {
        backgroundColor: "#4ADDFB",
        width: 300,
        height: Platform.OS === ("ios") ? 50 : 120,
        color: "#ffffff",
        fontSize: 15,
        lineHeight: 2,
        lines: 4,
        borderRadius: 15,
        fontWeight: "bold",
        yOffset: 40
    }
}