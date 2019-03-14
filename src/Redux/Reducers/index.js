import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
//import reducers here
import {
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
import AppContainer from './../../Screens/index';

export const NavReducer = createNavigationReducer(AppContainer);

export default reducers = combineReducers({
    auth: AuthReducers,
    nav: NavReducer,
})

