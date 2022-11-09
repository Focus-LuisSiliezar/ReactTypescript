import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, ScreenDimensions, TextButton } from '../components';

const SignUp: FC = (props) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return (
        <ScreenDimensions>
            <View style={style.container}>
                <Text style={style.title}>Sign Up</Text>
                <Input placeholder='Name' onChangeText={() => { }} />
                <Input placeholder='Email' onChangeText={() => { }} />
                <Input placeholder='Password' onChangeText={() => { }} />
                <TextButton label='Create Account' onPress={() => { }} />
                <View style={style.hasAccountContainer}>
                    <Text style={style.text}>Already have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Login')}
                    >
                        <Text style={style.selected}>Login Here</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScreenDimensions>

    );
}
export default SignUp;

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