import React, { Component } from 'react'
import { Text, View , TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.welcome}>Welcome</Text>
                <TextInput 
                placeholder="Username"
                placeholderTextColor="rgba(19, 15, 64,0.5)"
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                style={styles.input}/>
                <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(19, 15, 64,0.5)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 20,
        borderColor: "#30336b",
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    welcome: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        color:"black"
    },
    buttonContainer:{
        backgroundColor: "#30336b",
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    buttonText:{
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: 'bold'
    }
});