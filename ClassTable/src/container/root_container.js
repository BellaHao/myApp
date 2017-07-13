import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { commonStyle, theme } from '../common_style';
// import AppIntro from '../../rn_common/components/app_intro';

// const LAUNCHING_IMG = require('../images/launching.png');
//
// const INTRO_IMAGES = [require('../images/intro_1.png'),
//     require('../images/intro_2.png'),
//     require('../images/intro_3.png'),
//     require('../images/intro_4.png'),
//     require('../images/intro_5.png')
// ];


class RootContainer extends Component {
  componentWillMount() {
      console.log("RootContainer: will mount with props");
      console.log(this.props);
      const { env_got,
          account_recalled,
          authenticated,
          firstRun } = this.props;
    if ( ! env_got || ! account_recalled ) {
      return;
    }

    if (! authenticated) {
      if ( firstRun ) {
        Actions.register({type: ActionConst.REPLACE});
      } else {
        Actions.login( { type: ActionConst.REPLACE});
      }
    } else {
      Actions.homepage( { type: ActionConst.REPLACE});
    }
  }

  componentWillReceiveProps(next_props) {
      console.log("RootContainer: will receive props");
      console.log(next_props);
    const { got_first_run, env_got, account_recalled, authenticated, firstRun } = next_props;
    if (! env_got) {
      return;
    }

    if ( got_first_run && account_recalled) {
        if ( ! firstRun ) {
            if (! authenticated ) {
                Actions.login( { type: ActionConst.REPLACE});
            } else {
                Actions.homepage( { type: ActionConst.REPLACE});
            }
        }
    }

      /* if (! authenticated ) {
       *   if ( firstRun ) {
       *     Actions.register({type: ActionConst.REPLACE});
       *   } else {
       *     Actions.login( { type: ActionConst.REPLACE});
       *   }
       * } else {
       *   Actions.homepage( { type: ActionConst.REPLACE});
       * }
         } */
  }

  render () {
      const { height, width } = Dimensions.get("window");

    const { got_first_run, firstRun } = this.props;

      {/*if ( got_first_run && firstRun ) {*/}
          {/*return (*/}
      //         <AppIntro
      //           commonStyle = { commonStyle }
      //           images= { INTRO_IMAGES }
      //           onFinish = { () => Actions.register({ type: ActionConst.REPLACE})}
      //         />
      //     );
      // }
    return (
      <Container theme={ theme } style={ commonStyle.full_screen_scene} >
        <Content >
            {/*<Image style={ { flex: 1, width, height } }*/}
              {/*resizeMode="cover"*/}
              {/*source={ LAUNCHING_IMG } />*/}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { account, global } = state;
  let props = {
    got_first_run: false,
    account_recalled: false,
    authenticated: false,
    env_got: true
  };

  if (global) {
    props.firstRun = global.get("first_run") ;
    if ( undefined != props.firstRun) {
      props.got_first_run = true;
    }

    const env = global.get("env");
    if (undefined == env ||
        null == env ) {
      props.env_got = true;
    }
  }

  let credential;
  if ( undefined == (credential = account.get('credential'))  ) {
    props.account_recalled = false;
  } else {
    props.account_recalled = true;
  }

  console.log("authenticated? ");
  if (credential &&
      credential.get('login_name')) {
    console.log("YES");
    props.authenticated = true;
  }

    console.log("RootContainer.mapStateToProps");
    console.log(props);
  return props;
}

export default connect(mapStateToProps)(RootContainer);
