import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, ScreenDimensions, TextButton } from '../components';

const Login : FC = (props) => {
    return (
        <ScreenDimensions>
        <View style={style.container}>
            <Text style={style.title}>Welcome back!</Text>
            <Input placeholder='Email' onChangeText={() => { }} />
            <Input placeholder='Password' onChangeText={() => { }} />
            <TextButton label='Login' onPress={() => { }} />
            <View style={style.hasAccountContainer}>
                    <Text style={style.text}>Don't have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('SignUp')}
                    >
                        <Text style={style.selected}>Sign up</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </ScreenDimensions>
    );
}
export  default Login;
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 10,
    },
    hasAccountContainer: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
        marginRight: 8,
    },
    selected: {
        color: '#ff9f43',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
    },
});