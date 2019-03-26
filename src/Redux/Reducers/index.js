import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import AppContainer from './../../Screens/index';
//import reducers here

export default reducers = combineReducers({
    auth: AuthReducers,
    nav: AppContainer,
})

