import React, {Component} from 'react';
import { View } from 'react-native';
import AppContainer, { MainNavigator } from './index';
import { Auth } from 'aws-amplify';
import { NavigationActions } from 'react-navigation';

export default class Home extends Component {
    state = {
        user: {},
    }

    async componentWillReceiveProps(nextProps) {
        try {
          const user = await Auth.currentAuthenticatedUser()
          this.setState({ user });
          this.navigator && this.navigator.dispatch(
              NavigationActions.navigate({ routeName: MainNavigator })
          )
        } catch (err) {
          this.setState({ user: {} })
        }
    }

    render() {
        return (
            <View>
                <AppContainer
                    ref={nav => {
                        this.navigator = nav;
                    }}
                />
            </View>
        )
    }
}