import { createStore, applyMiddleware, combineReducers, composeEnhancers } from 'redux';
import reducers from './../Reducers/index';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { AppNavigator } from './../../Screens/index';
import { connect } from 'react-redux';

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = (state) => ({
  state: state.nav,
});

export const MainApp = connect(mapStateToProps)(App);

export const store = createStore(
    reducers, applyMiddleware(middleware)// todo: remove old reducer after refactor
    // composeEnhancers(
    //   applyMiddleware(...middleware),
    //   // other store enhancers if any
    // ),
);