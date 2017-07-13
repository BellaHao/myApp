import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// import account_reducers from '../../rn_common/reducers/account';

// import routes from './routes';

const rootReducer = combineReducers({
  //   routes,
  //   account: account_reducers
    form: formReducer
});

export default rootReducer;
