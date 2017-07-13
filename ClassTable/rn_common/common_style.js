import React from 'react';
import { Platform, StyleSheet } from 'react-native';

const commonStyle = {
    scene: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '$sceneBg',
        ...Platform.select({
            ios: { marginTop: 64 },
            android: { marginTop: 54 }
        })
    },

    scene_bg: {
        flex: 1,
        backgroundColor: '$sceneBg'
    },

    white_bg:{
        backgroundColor:'#FFF'
    },

    full_screen_scene: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '$sceneBg'
    },

    footer_action_bar: {
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x',
        paddingBottom:'$grid_2x',
        height: 56
    },

    native_base_footer_action_bar: {
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x'
    },

    action_bar_but: {
        paddingRight: '$grid_4x',
        paddingLeft: '$grid_4x',
        marginLeft: '$grid_4x'
    },

    content_padding: {
        padding: '$grid_2x',
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x'
    },

    v_space_half: {
        marginTop: '$grid_2x',
        marginBottom: '$grid_2x'
    },

    v_space: {
        marginTop: '$grid_4x',
        marginBottom: '$grid_4x'
    },

    v_space_2x: {
        marginTop: '$grid_4x * 2',
        marginBottom: '$grid_4x * 2'
    },

    h_padding : {
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x'
    },

    right_space: {
        marginRight: '$grid_4x'
    },

    left_space: {
        marginLeft: '$grid_4x'
    },

    link: {
        color: '#36C07E'
    },

    bodyText: {
        fontSize: '$fontSizeBase',
        color: '$textColor',
        lineHeight: 24,
       // marginBottom: '$grid_2x'
    },

    title: {
        fontSize: '$titleFontSize',
        color: '$textColor',
        marginBottom: '$grid_2x',
        lineHeight: 32
    },

    subtitle: {
        fontSize: '$subTitleFontSize',
        color: '$subtitleColor',
        marginBottom: '$grid_2x',
        lineHeight: 24
    },

    importantText: {
        color: '$brandPrimary'
    },

    minorText: {
        fontSize: '$minorTextSize',
        color: '$minorTextColor'
    },

    text_center: {
        textAlign: 'center'
    },

    text_important: {
        color: '$brandPrimary'
    },

    text_reverse: {
        color: 'white'
    },

    right_in_col: {
        alignSelf: 'flex-end'
    },

    icon_primary: {
        color: '$brandPrimary'
    },

    date_picker: {
        height: 45
    },

    date_picker_text: {
        fontSize:'$inputFontSize' 
    },

    list_item_divider: {
        borderColor: '$listBorderColor',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid'
    },

    list_item_padding: {
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x',
        paddingTop: '$grid_2x',
        paddingBottom: '$grid_2x'
    },

    content_between : {
        justifyContent: 'space-between'
    },

    row :{
        flexDirection :'row',
        paddingTop: '$grid_2x',
        paddingBottom: '$grid_2x',
        paddingLeft: '$grid_4x',
        paddingRight: '$grid_4x',
        backgroundColor:'#FFFFFF'
    }
};

export default commonStyle;

