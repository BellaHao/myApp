import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import Immutable from 'immutable';

import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../rn_common/themes/default_theme';
import Routes from './routes';
import RootContainer from './container/root_container';

EStyleSheet.build(theme);

const store = configureStore({
    account: Immutable.Map()
});

class Application extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

export default Application;
