import React, {Component} from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';
import { authenticate } from './../Redux/Actions/AuthActions';
import { styles } from './../Util/styles';
import { connect } from 'react-redux';

class LogInScreen extends Component {
    state = {
        username: '',
        password: '',
    }

    // logIn = () => {
    //     const poolData = {
    //         UserPoolId: "us-east-1_4guAAHSTW",
    //         ClientId: "19g34mhghi8ideuuh6ltcgk980",
    //     }
    //     const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        
    // }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Log In to Word Up</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Username"
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput style={styles.input}
                        placeholder="Enter your Password"
                        onChangeText={(password) => this.setState({password})}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                                try {
                                    await authenticate(this.state.username, this.state.password);
                                } catch (err) {
                                    alert("Username and password not recognized");
                                }
                            }
                        }>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.navigation.navigate('SignUp')}
                    >
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const mapDispatchToProps = {
    dispatchAuthenticate: (username, password) => authenticate(username, password)
}

export default connect(null, mapDispatchToProps)(LogInScreen);