import React from 'react';
import { StyleSheet } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../rn_common/themes/default_theme';
import global_style from '../rn_common/common_style';

const commonStyle = EStyleSheet.create(
    global_style
);

export {
    commonStyle,
    theme
};
