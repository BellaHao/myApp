import Color from 'color';

import {Platform} from 'react-native';

export default {
    sceneBg: '#EEE',
    grid_1: 4,
    grid_2x: 8,
    grid_3x: 12,
    grid_4x: 16,

	  brandPrimary : "#36C07E",
	  brandInfo: "#9E9E9E",
	  brandSuccess: "#36C07E",
	  brandDanger: "#FF5C07",
	  brandWarning: "#FFC358",
	  brandSidebar: "#252932",

    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
	  btnFontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
	  iconFamily: 'Ionicons',

	  inverseTextColor: "#fff",
	  textColor: "#5D5D5D",

	  subtitleColor: "#7d7d7d",
    minorTextColor: '#9e9e9e',

	  fontSizeBase: 16,
	  titleFontSize: 18, 
	  subTitleFontSize: 17, 
    minorTextSize: 14,

	  inputFontSize: 16,
	  inputLineHeight: 18,

	  get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },

    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.2;
    },
    get btnTextSize () {
        return  (Platform.OS==='ios') ? this.fontSizeBase* 1.1 : this.fontSizeBase-1;

        //return this.fontSizeBase * 1.1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .9;
    },
    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },

	  buttonPadding: 6,

    borderRadiusBase: 4, // (Platform.OS === 'ios' ) ? 5 : 2,

    get borderRadiusLarge () {
        return 4;
        // return this.fontSizeBase* 3.8;
    },

    footerHeight: 55,
    toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
    toolbarDefaultBg:  "#F8F8F8" ,
    toolbarInverseBg: "#222",

	  iosToolbarBtnColor: "#007aff",

	  checkboxBgColor: "#039BE5",
	  checkboxTickColor: "#fff",

	  checkboxSize: 23,

	  radioColor: "#7e7e7e",
	  radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,

	  tabBgColor: "#F8F8F8",
	  tabTextColor: "#fff",

	  btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

	  cardDefaultBg: "#fff",

	  get darkenHeader() {
		    return Color(this.tabBgColor).darken(0.03).hexString();
	  },
    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.inverseTextColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.inverseTextColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.inverseTextColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.inverseTextColor;
    },

    borderWidth: 1,
    iconMargin: 7,

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return '#C5C5C5';
    },
    inputBorderColor: "#D9D5DC",
    inputHeightBase: 36,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft * 8;
    },

    btnLineHeight: 19,

    dropdownBg: "#000",
    dropdownLinkColor: "#414142",

    jumbotronPadding: 30,
    jumbotronBg: "#C9C9CE",

    contentPadding: 10,

    listBorderColor: "#ddd",
    listDividerBg: "#ddd",
    listItemPadding: 9,
    listNoteColor: "#808080",
	  listNoteSize: 13,

    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,

    badgeColor: "#fff",
    badgeBg: "#ED1727",

    lineHeight: (Platform.OS === 'ios' ) ? 20 : 24,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,

	  toolbarIconSize: (Platform.OS === 'ios' ) ? 20 : 22,

	  toolbarInputColor: "#CECDD2",

    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B"
}
