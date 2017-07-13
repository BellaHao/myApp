import React, { Component } from 'react';
import { NativeModules, StyleSheet } from 'react-native';
import { Modal, Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import {connect} from 'react-redux';
import RootContainer from './container/root_container';
// import HomePageContainer from './container/home_page_container';
// import LoginContainer from './container/login_container';
// import RegisterContainer from './container/register_container';
// import { init_app_env, read_first_run_flag } from '../rn_common/actions/global';
// import { is_authenticated, load_remembered_account, report_position } from '../rn_common/actions/account';


const styles = StyleSheet.create({
    barIcon: {
        width:  36,
        height: 36
    },

    barLeftButton: {
        bottom:        9,
        padding:       0,
        flexDirection: "row",
        alignItems:    'center'
    },

    titleText: {
        fontSize:          18,
        textAlignVertical: 'center',
        color:             '#FFF'
    },

    barButtonText: {
        color:    '#FFF',
        fontSize: 16
    },

    navBar: {
        /*         height:          56,*/
        backgroundColor: '#36C073'
    }
});

const navBarProps = {
    navigationBarStyle:  styles.navBar,
    titleStyle:          styles.titleText,
    leftButtonIconStyle: styles.barIcon,
    leftButtonStyle:     styles.barLeftButton,
    hideNavBar:          false
};

const backBtnProps = {
    backTitle:           '返回',
    backButtonImage:     require('../rn_common/images/back.png'),
    backButtonTextStyle: styles.barButtonText
};


const scenes = () =>
    <Router>
        <Scene key="root" { ... navBarProps } { ...backBtnProps } >

        <Scene key="app_home" component={RootContainer } title="首页" hideNavBar={true}
               initial={ true }/>

        {/*<Scene key="homepage" component={ HomePageContainer } title="首页"*/}
        {/*renderRightButton={ ()=> <HomeChatsIcon /> }*/}
        {/*/>*/}

        {/*<Scene key="register" component={RegisterContainer}*/}
        {/*title="注册" hideNavBar={false}*/}
        {/*{ ...backBtnProps } />*/}

        {/*<Scene key="login" component={LoginContainer}*/}
        {/*title="登录" hideNavBar={false}*/}
        {/*{ ...backBtnProps } />*/}
    </Scene>
    </Router>

class Routes extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        NativeModules.NativeApplication.getEnvironment().then((result) => {
            // dispatch(init_app_env(result));
            // dispatch(load_remembered_account());
        });
        // dispatch(read_first_run_flag());
    }

   render() {
        return (
            <Router scenes={ scenes }/>
        );
    }
}

export default connect()(Routes);
