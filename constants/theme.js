import {Dimensions} from 'react-native';



const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: '#00996D',
    secondary: '#606d87',

    black: '#1E1F20',
    white: '#FFFFFF',
    lightGray: '#eff2f5',
    gray: '#BEC1D2',
}

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    width,
    height,
}

export const FONTS = {
    h1: {fontSize: SIZES.h1, lineHeight: 36, fontWeight: '800'},
    h2: { fontSize: SIZES.h2, lineHeight: 30, fontWeight: '700'},
    h3: {fontSize: SIZES.h3, lineHeight: 22, fontWeight: '500'},
    h4: {fontSize: SIZES.h4, lineHeight: 22, fontWeight: '400'},
    body1: { fontSize: SIZES.body1, lineHeight:36, fontWeight: '700'},
    body2: { fontSize: SIZES.body2, lineHeight: 30, fontWeight: '600'},
    body3: { fontSize: SIZES.body3, lineHeight: 22, fontWeight: '500'},
    body4: { fontSize: SIZES.body4, lineHeight: 22, fontWeight: '400'},
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55, fontWeight: '800'}
}
const appTheme = { COLORS, SIZES, FONTS};

export default appTheme;