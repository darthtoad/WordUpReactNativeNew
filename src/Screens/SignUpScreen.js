import React, {Component} from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';
import { createUser } from './../Redux/Actions/AuthActions'
import { styles } from './../Util/styles';
import { connect } from 'react-redux';

class SignUpScreen extends Component {
    state = {
        phoneNumber: '',
        email: '',
        password: '',
        username: '',
    }

    // signUp = () => {
    //     const poolData = {
    //         UserPoolId: "us-east-1_4guAAHSTW",
    //         ClientId: "19g34mhghi8ideuuh6ltcgk980",
    //     }
    //     const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    //     let attributeList = [];
    //     const dataPhoneNumber = {
    //         name: 'phone_number',
    //         value: this.state.phoneNumber,
    //     }
    //     const dataEmail = {
    //         name: 'email',
    //         value: this.state.email,
    //     }
    //     createUser()
    // }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <ScrollView>
                    <Text style={styles.title}>Sign Up for Word Up</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Email"
                        onChangeText={(email) => this.setState({email})}
                    />
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
                            if (this.state.password !== '' && this.state.username !== '') {
                            try {
                                await createUser(this.state.username, this.state.password, this.state.email, this.state.phoneNumber
                                );                           
                            } catch (err) {
                                console.log(err);
                                alert("Error! Make sure your username and password are correct")
                            }
                            } else {
                                alert("Please enter your username and password");
                            }
                        }}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.navigation.navigate('LogIn')}
                    >
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const mapDispatchToProps = {
    dispatchCreateUser: (username, password, email, phoneNumber) => createUser(username, password, email, phoneNumber)
}

export default connect(null, mapDispatchToProps)