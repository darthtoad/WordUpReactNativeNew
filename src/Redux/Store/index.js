import { createStore, applyMiddleware, combineReducers, composeEnhancers } from 'redux';
import reducers from './../Reducers/index';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { AppNavigator } from './../../Screens/index';
import { connect } from 'react-redux';

// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav,
// );


const App = reduxifyNavigator(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});
export const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
    reducers, // todo: remove old reducer after refactor
    // composeEnhancers(
    //   applyMiddleware(...middleware),
    //   // other store enhancers if any
    // ),
);

export default store;